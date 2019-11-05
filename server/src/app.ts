import { json, urlencoded } from 'body-parser';
import express from 'express';

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

app.use(
  (
    err: Error & { status: number },
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) => {
    if (err.status) {
      response.status(err.status || 500);
      response.json({
        error: err.message || 'Server error',
      });
    } else {
      console.error(err);
      response.status( 500);
      response.json({
        error: 'Unexpected Server error',
      });
    }
  },
);
