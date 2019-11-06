import { prop } from 'typegoose';

import { BaseSchema } from './base.schema';

export class BookSchema extends BaseSchema {
  @prop({ default: 'A book' }) name!: string;
}

export const BookModel = new BookSchema().getModelForSchema(BookSchema);
