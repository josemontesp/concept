import express, { IRoute, NextFunction } from 'express';

import { MethodNotAllowedError } from '../errors';

export class BaseController {
  useRoute(route: IRoute) {
    route.get(
      async (
        request: express.Request,
        response: express.Response,
        next: NextFunction,
      ) => {
        try {
          response.send(await this.get(request));
        } catch (error) {
          next(error);
        }
      },
    );
    route.post(
      async (
        request: express.Request,
        response: express.Response,
        next: NextFunction,
      ) => {
        try {
          response.send(await this.post(request));
        } catch (error) {
          next(error);
        }
      },
    );
    route.put(
      async (
        request: express.Request,
        response: express.Response,
        next: NextFunction,
      ) => {
        try {
          response.send(await this.put(request));
        } catch (error) {
          next(error);
        }
      },
    );
    route.delete(
      async (
        request: express.Request,
        response: express.Response,
        next: NextFunction,
      ) => {
        try {
          response.send(await this.delete(request));
        } catch (error) {
          next(error);
        }
      },
    );
  }

  async get(request: express.Request): Promise<unknown> {
    throw new MethodNotAllowedError(`Cannot GET ${request.path}`);
  }
  async post(request: express.Request): Promise<unknown> {
    throw new MethodNotAllowedError(`Cannot POST ${request.path}`);
  }
  async put(request: express.Request): Promise<unknown> {
    throw new MethodNotAllowedError(`Cannot PUT ${request.path}`);
  }
  async delete(request: express.Request): Promise<unknown> {
    throw new MethodNotAllowedError(`Cannot DELETE ${request.path}`);
  }
}
