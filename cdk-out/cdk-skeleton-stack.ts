
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create Lambda function
    const lambdaFunction = new lambda.Function(this, "HelloWorldFunction", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("tmp4pqel2ym"), 
      handler: "index.handler",
      role: lambda.Role.fromRoleArn(this, "LambdaRole", "arn:aws:iam::YOUR_ACCOUNT_ID:role/YOUR_LAMBDA_EXECUTION_ROLE")
    });
    
    // Create API Gateway
    const api = new apigateway.RestApi(this, "hello-world-api", {
      restApiName: "Hello World API",
    });
    
    const getLambdaIntegration = new apigateway.LambdaIntegration(lambdaFunction);

    api.root.addMethod("GET", getLambdaIntegration); 
  }
}
 