import {model, Schema, Document} from "mongoose";
import {IUser} from "./user";

export interface ICard extends Document{
    name: String,
    body: String,
    owner: IUser['_id']
};


export const CardSchema : Schema = new Schema({
    title: String,
    body: String
});


export default model<ICard>('Card', CardSchema);

