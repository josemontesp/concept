import express from 'express';

export function errorHandler(
  err: Error & { status: number },
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
) {
  if (err.status) {
    response.status(err.status || 500);
    response.json({
      error: err.message || 'Server error',
    });
  } else {
    console.error(err);
    response.status(500);
    response.json({
      error: 'Unexpected Server error',
    });
  }
}
