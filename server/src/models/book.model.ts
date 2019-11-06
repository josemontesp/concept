import { getModelForClass, prop } from '@typegoose/typegoose';

import { BaseSchema } from './base.schema';

export class BookSchema extends BaseSchema {
  @prop({ default: 'A book' }) name!: string;
}

export const BookModel = getModelForClass(BookSchema);
