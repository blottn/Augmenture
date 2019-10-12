import {model, Schema, Document} from "mongoose";

export interface IUser extends Document {
    fname: String,
    sname: String,
    secret: String,
    api_key: String
};

export const UserSchema : Schema = new Schema({
    fname: String,
    sname: String,
    secret: String,
    api_key: String
});

export default model<IUser>('User', UserSchema);
