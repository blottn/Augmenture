import { model, Schema, Document } from 'mongoose';
import CardModel, { Card } from './card';

export const CollectionName = 'collection';

export const CollectionSchema= new Schema({
    title: String,
    items: [{ type: Schema.Types.ObjectId, ref: CardModel.modelName }],
});

const CollectionModel = model(CollectionName, CollectionSchema);


export default CollectionModel;
