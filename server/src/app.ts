import './database';

import { json, urlencoded } from 'body-parser';
import express from 'express';

import { errorHandler } from './error-handler';
import { router } from './router';

export const app = express();

app.use(json());
app.use(
  urlencoded({
    extended: true,
  }),
);

app.use('/', router);

app.use(errorHandler);
