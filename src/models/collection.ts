import { model, Schema, Document } from 'mongoose';
import CardModel, { Card } from './card';

export interface Collection extends Document {
    title: string;
    items: Card['_id'][];
}

export const CollectionName = 'collection';

export const CollectionSchema: Schema = new Schema({
    title: String,
    items: [{ type: Schema.Types.ObjectId, ref: CardModel.modelName }],
    children: [{ type: Schema.Types.ObjectId, ref: CollectionName }],
});

const CollectionModel = model<Collection>(CollectionName, CollectionSchema);


export default CollectionModel;
