import { INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status-codes';
import { ExtendableError } from 'ts-error';

export class HandledError extends ExtendableError {
  readonly status: number = INTERNAL_SERVER_ERROR;
}

export class NotFoundError extends HandledError {
  readonly status = NOT_FOUND;
}
