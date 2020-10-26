import mongoose from 'mongoose';
import { CardSchema } from './card';

const { model, Schema } = mongoose;

export const UserName = 'user';

export const UserSchema = new Schema({
    fname: String,
    sname: String,
    uname: String,
    secret: String,
    cards: [CardSchema],
});

const UserModel = model(UserName, UserSchema);

export default UserModel;

export function createUser(){
    return new UserModel({});
}
