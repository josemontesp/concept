import express from 'express';

import { BookModel } from '../models/book.model';
import { BaseController } from './base.controller';

export class BookController extends BaseController {
  async get(request: express.Request) {
    return BookModel.find();
  }
  async post(request: express.Request) {
    return new BookModel().save();
  }
  async put(request: express.Request) {}
  async delete(request: express.Request) {}
}

export const bookController = new BookController();
