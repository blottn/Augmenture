import {model, Schema, Document} from "mongoose";

export interface ICard extends Document{
    name: String,
    mycontents: String
};


export const CardSchema : Schema = new Schema({
    title: String,
    body: String
});


export default model<ICard>('Card', CardSchema);

