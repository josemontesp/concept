import 'source-map-support/register';

import { APIGatewayEvent, Context } from 'aws-lambda';
import serverlessExpress from 'aws-serverless-express';

import { app } from './app';

const server = serverlessExpress.createServer(app);

export function main(event: APIGatewayEvent, context: Context) {
  context.callbackWaitsForEmptyEventLoop = false;
  return serverlessExpress.proxy(server, event, context);
}
