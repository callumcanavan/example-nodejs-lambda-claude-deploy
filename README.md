# Hello World Lambda Function

This is a simple AWS Lambda function written in Node.js that returns a "Hello, World!" message. It is designed to be invoked by AWS API Gateway.

## Contents

- [Deployment](#deployment)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [API Gateway Setup](#api-gateway-setup)
- [Testing](#testing)
- [Additional Resources](#additional-resources)

## Deployment

### Prerequisites

- AWS CLI already configured with Administrator permission
- Node.js and NPM installed
- An IAM role for Lambda with the necessary permissions

### Steps

1. Clone the repository and navigate to the directory.

   ```sh
   git clone https://github.com/your-repo/lambda-hello-world.git
   cd lambda-hello-world
   ```

2. Install the dependencies.

   ```sh
   npm install
   ```

3. Zip the Lambda function.

   ```sh
   zip function.zip index.js
   ```

4. Use the AWS CLI to create the Lambda function.

   ```sh
   aws lambda create-function --function-name helloWorldLambda \
   --zip-file fileb://function.zip --handler index.handler --runtime nodejs14.x \
   --role arn:aws:iam::YOUR_ACCOUNT_ID:role/YOUR_LAMBDA_EXECUTION_ROLE
   ```

   Make sure to replace `YOUR_ACCOUNT_ID` and `YOUR_LAMBDA_EXECUTION_ROLE` with your actual account ID and Lambda execution role ARN.

## API Gateway Setup

To set up AWS API Gateway to trigger your Lambda:

1. Navigate to the AWS Management Console.
2. Select or create a new API in API Gateway.
3. Create a new resource and a GET method.
4. Attach the GET method to the Lambda function.
5. Deploy the API to a new or existing stage.

Detailed instructions can be found in the AWS API Gateway documentation.

## Testing

To test the Lambda function via API Gateway:

1. Navigate to the deployed API stage URL:

   ```plaintext
   https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/YOUR_STAGE/
   ```

2. You can test it with a browser or using a tool like `curl`:

   ```sh
   curl https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/YOUR_STAGE/
   ```

Replace `YOUR_API_ID`, `YOUR_REGION`, and `YOUR_STAGE` with your actual API ID, AWS region, and stage name.

## Additional Resources

- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [AWS API Gateway Documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [AWS CLI Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)

For more information on deploying Lambda functions and API Gateway setup, visit the links provided in the Additional Resources section.
