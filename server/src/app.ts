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

app.get('/jose', (request: express.Request, response: express.Response) => {
  throw new Error('a bad error here');
});

app.use(
  (
    err: Error & { status: number },
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) => {
    response.status(err.status || 500);
    response.json({
      error: err.message || 'Server error',
    });
  },
);
