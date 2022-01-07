#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsPipelineStack } from '../lib/aws-pipeline-stack';

const app = new cdk.App();
new AwsPipelineStack(app, 'AwsPipelineStack', {
  env: { account: '059130598637', region: 'eu-central-1' },
});