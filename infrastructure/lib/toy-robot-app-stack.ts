import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CloudFrontStaticWebsite } from './resources/bucket';

export class ToyRobotAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CloudFrontStaticWebsite(this, `${id}CloudFrontStaticWebsite`, {
      bucketName: 'toy-robot-app',
    });
  }
}
