import { model, Schema, Document } from 'mongoose';
import UserModel, { User } from './user';
import CardModel, { Card } from './card';

export interface Collection extends Document {
    title: string;
    items: Card['_id'][];
}

export const CollectionSchema: Schema = new Schema({
    title: String,
    items: [{ type: Schema.Types.ObjectId, ref: CardModel.modelName }],
    // children: [{ type: Schema.Types.ObjectId, ref: CollectionModel.modelName }]
});

const CollectionModel = model<Collection>('Collection', CollectionSchema);

export default CollectionModel;

