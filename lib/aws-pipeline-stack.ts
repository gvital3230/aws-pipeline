import { Stack, StackProps } from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class AwsPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.connection('gvital3230/aws-pipeline', 'main', {
          connectionArn: 'arn:aws:codestar-connections:eu-central-1:059130598637:connection/62097f80-3a4a-4ecc-a8cd-7b0777fa8d07'
        }),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth'
        ]
      })
    })
  }
}
