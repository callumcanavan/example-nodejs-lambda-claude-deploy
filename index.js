exports.handler = async (event) => {
  // The response structure is based on AWS Lambda Proxy Integration format.
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
    },
    body: "Hello, World!",
  };

  return response;
};
