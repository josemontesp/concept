import { APIGatewayEvent, Context } from 'aws-lambda';

export async function main(event: APIGatewayEvent, context: Context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
    }),
  };
}
