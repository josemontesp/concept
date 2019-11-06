import { pre, prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

@pre<BaseSchema>('save', async function(next) {
  if (this._id === undefined || this._id === null) {
    this._id = Types.ObjectId();
  }
  next();
})
export abstract class BaseSchema {
  // tslint:disable-next-line:variable-name
  @prop()
  public _id!: Types.ObjectId;

  protected timestamps = true;
}
