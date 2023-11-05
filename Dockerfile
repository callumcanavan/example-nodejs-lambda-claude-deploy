
FROM public.ecr.aws/lambda/nodejs:14

# Copy function code
COPY function.zip ${LAMBDA_TASK_ROOT} 

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Set up environment variables
ENV AWS_ACCESS_KEY_ID ${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY ${AWS_SECRET_ACCESS_KEY}
ENV AWS_REGION ${AWS_REGION}

# Set entrypoint 
ENTRYPOINT [ "index.handler" ]
 