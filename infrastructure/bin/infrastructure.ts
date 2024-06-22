#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { ToyRobotAppStack } from '../lib/toy-robot-app-stack';

const app = new cdk.App();
new ToyRobotAppStack(app, 'ToyRobotAppStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
