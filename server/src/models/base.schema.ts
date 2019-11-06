import { Types } from 'mongoose';
import { GetModelForClassOptions, pre, prop, Typegoose } from 'typegoose';

import { mongoose } from '../database';

@pre<BaseSchema>('save', async function(next) {
  if (this._id === undefined || this._id === null) {
    this._id = Types.ObjectId();
  }
  next();
})
export abstract class BaseSchema extends Typegoose {
  // tslint:disable-next-line:variable-name
  @prop()
  public _id!: Types.ObjectId;

  protected timestamps = true;

  public getModelForSchema<T>(t: T, options?: GetModelForClassOptions) {
    return super.getModelForClass<T>(t, {
      existingMongoose: mongoose,
      schemaOptions: {
        timestamps: this.timestamps,
      },
      ...options,
    });
  }
}
