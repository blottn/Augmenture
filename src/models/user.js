import mongoose from 'mongoose';
const { model, Schema } = mongoose;

export const UserName = 'user';

export const UserSchema = new Schema({
    fname: String,
    sname: String,
    uname: String,
    secret: String,
});

const UserModel = model(UserName, UserSchema);

export default UserModel;

export function createUser(){
    return new UserModel({});
}
