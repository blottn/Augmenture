import { model, Schema, Document } from 'mongoose';

import CollectionModel, { Collection, CollectionSchema } from './collection';

export interface User extends Document {
    fname?: string;
    sname?: string;
    email: string;
    uname: string;
    secret: string;
    home: Collection;
}

export const UserName = 'user';

export const UserSchema: Schema = new Schema({
    fname: String,
    sname: String,
    uname: String,
    secret: String,
    home: CollectionSchema,
});

const UserModel = model<User>(UserName, UserSchema);

export default UserModel;

export function createUser(opts) {
    opts.home = new CollectionModel();
    new UserModel({});
}
