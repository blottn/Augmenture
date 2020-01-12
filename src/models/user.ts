import { model, Schema, Document } from 'mongoose';

import { Collection, CollectionSchema } from './collection';

export interface User extends Document {
    fname?: string;
    sname?: string;
    email: string;
    uname: string;
    secret: string;
    root: Collection;
}

export const UserName = 'user';

export const UserSchema: Schema = new Schema({
    fname: String,
    sname: String,
    uname: String,
    secret: String,
    root: CollectionSchema,
});

const UserModel = model<User>(UserName, UserSchema);

export default UserModel;

export function createUser(): User {
    return new UserModel({});
}
