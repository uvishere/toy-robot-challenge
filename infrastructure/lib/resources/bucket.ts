import { CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import {
  CloudFrontWebDistribution,
  OriginAccessIdentity,
} from 'aws-cdk-lib/aws-cloudfront';
import { BlockPublicAccess, Bucket, BucketProps } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

interface CloudFrontStaticWebsiteProps extends StackProps {
  bucketName: string;
}

export class S3WebsiteBucket extends Bucket {
  constructor(scope: Construct, id: string, props?: BucketProps) {
    super(scope, id, {
      ...props,
      bucketName: props?.bucketName || id,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      autoDeleteObjects: true,
      removalPolicy: props?.removalPolicy || RemovalPolicy.DESTROY,
      versioned: true,
      publicReadAccess: true,
      blockPublicAccess: new BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      }),
    });
  }
}

export class CloudFrontStaticWebsite extends Stack {
  private bucket: S3WebsiteBucket;

  constructor(
    scope: Construct,
    id: string,
    props: CloudFrontStaticWebsiteProps
  ) {
    super(scope, id, props);

    this.setupBucket(id, props.bucketName);
    this.setupCloudFront(id, props.bucketName);
  }

  private setupBucket(id: string, bucketName: string) {
    this.bucket = new S3WebsiteBucket(this, `${id}Bucket`, {
      bucketName,
    });
  }

  private setupCloudFront(id: string, domainName: string) {
    const originAccessIdentity = new OriginAccessIdentity(this, `${id}OIA`, {
      comment: `Setup access from CloudFront to the ${domainName} bucket ( read )`,
    });
    this.bucket.grantRead(originAccessIdentity);

    //create cloudfront distribution
    const cfDist = new CloudFrontWebDistribution(this, `${id}Distribution`, {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: this.bucket,
            originAccessIdentity: originAccessIdentity,
          },
          behaviors: [{ isDefaultBehavior: true }],
        },
      ],
      errorConfigurations: [
        {
          errorCode: 403,
          responsePagePath: '/index.html',
          responseCode: 200,
        },
        {
          errorCode: 404,
          responsePagePath: '/index.html',
          responseCode: 200,
        },
      ],
    });

    new CfnOutput(this, `${id}CloudFrontUrl`, {
      value: `https://${cfDist.distributionDomainName}`,
      key: `${id}CloudFrontUrl`,
      description: 'The CloudFront URL',
    });

    new CfnOutput(this, `${id}CloudFrontDistributionId`, {
      value: cfDist.distributionId,
      key: `${id}CloudFrontDistributionId`,
      description: 'The CloudFront Distribution ID',
    });
  }
}
