import { model, Schema, Document } from 'mongoose';
import { User } from './user.ts';

export interface Card extends Document{
    name: string;
    body: string;
    owner: User['_id'];
}


export const CardSchema: Schema = new Schema({
    title: String,
    body: String,
});


export default model<Card>('Card', CardSchema);
