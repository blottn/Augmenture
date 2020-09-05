import { model, Schema, Document } from 'mongoose';
import { User } from './user';

export const CardName = 'card';

export const CardSchema = new Schema({
    title,
    content,
});


export default model(CardName, CardSchema);
