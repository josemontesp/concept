import { json, urlencoded } from 'body-parser';
import express from 'express';

import { errorHandler } from './error-handler';

export const app = express();

app.use(json());
app.use(
  urlencoded({
    extended: true,
  }),
);

app.get('/', (request: express.Request, response: express.Response) => {
  response.json({
    name: 'Express application',
  });
});

app.get(
  '/unhandlederror',
  (request: express.Request, response: express.Response) => {
    (undefined as any).unexistingProperty = '123';
  },
);

app.get(
  '/handlederror',
  (request: express.Request, response: express.Response) => {
    throw { status: 400, message: 'This is a handled error' };
  },
);

app.use(errorHandler);
