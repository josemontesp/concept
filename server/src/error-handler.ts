import express from 'express';

import { HandledError } from './errors';

export function errorHandler(
  error: Error | HandledError,
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
) {
  if (error instanceof HandledError) {
    response.status(error.status || 500);
    response.json({
      error: error.message || 'Server error',
    });
  } else {
    console.error(error);
    response.status(500);
    response.json({
      error: 'Unexpected Server error',
      message: error.message,
      stack: error.stack,
    });
  }
}
