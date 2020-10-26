import mongoose from 'mongoose';
import CardModel from './card.js';

const { model, Schema } = mongoose;

export const CollectionName = 'collection';

export const CollectionSchema= new Schema({
    title: String,
    items: [{ type: Schema.Types.ObjectId, ref: CardModel.modelName }],
});

const CollectionModel = model(CollectionName, CollectionSchema);


export default CollectionModel;
