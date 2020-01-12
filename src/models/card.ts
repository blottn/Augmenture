import { model, Schema, Document } from 'mongoose';
import { User } from './user';

export interface Card extends Document{
    title: string;
    content: string;
    owner: User['_id'];
}

export const CardName = 'card';

export const CardSchema: Schema = new Schema({
    title: String,
    content: String,
});


export default model<Card>(CardName, CardSchema);
