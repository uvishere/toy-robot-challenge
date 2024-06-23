# Welcome to your CDK TypeScript project
![Infrastructure workflow](https://github.com/uvishere/toy-robot-challenge/actions/workflows/aws-deploy.yml/badge.svg)

The infrastrucute project is developed using AWS CDK with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute the app.

## Developing locally

### Prerequisites
1. Create an aws account (if you don't have one)
2. Create a User with necessary access and get required ACCESS and SECRET keys (Not a recommended way though nowadays)
3. Install `aws-cli` if you haven't already
4. Run `aws configure` to configure your access and provide the AWS_ACCESS_KEY and AWS_SECRET_KEY in the required fields
5. Run `npm install`
6. To check diffs, `npx cdk diff`
7. To deploy, `npx cdk deploy --all`

### Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template


### CI/CD
The app can be deployed through CD pipelines defined with GitHub actions. To do that:
1. Make your changes
2. Push the code
3. Pipeline with run it's steps and deploy the defined aws resources
