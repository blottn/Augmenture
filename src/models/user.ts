import { model, Schema, Document } from 'mongoose';

export interface User extends Document {
    fname?: string;
    sname?: string;
    email: string;
    uname: string;
    secret: string;
}

export const UserSchema: Schema = new Schema({
    fname: String,
    sname: String,
    uname: String,
    secret: String,
    apiKey: String,
});

export default model<User>('User', UserSchema);
