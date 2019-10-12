import {model, Schema, Document} from "mongoose";

export interface IUser extends Document {
    fname?: string,
    sname?: string,
    email: string,
    uname: string,
    secret: string,
};

export const UserSchema : Schema = new Schema({
    fname: String,
    sname: String,
    uname: String,
    secret: String,
    api_key: String
});

export default model<IUser>('User', UserSchema);
