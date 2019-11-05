import express from 'express';

export const router = express.Router();

router.get('/', (request: express.Request, response: express.Response) => {
  response.json({
    name: 'Express application',
  });
});

router.get(
  '/unhandlederror',
  (request: express.Request, response: express.Response) => {
    (undefined as any).unexistingProperty = '123';
  },
);

router.get(
  '/handlederror',
  (request: express.Request, response: express.Response) => {
    throw { status: 400, message: 'This is a handled error' };
  },
);
