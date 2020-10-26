import mongoose from 'mongoose';

const { model, Schema } = mongoose;

export const CardName = 'card';

export const CardSchema = new Schema({
    title: String,
    content: String,
});


export default model(CardName, CardSchema);
