import { model, Schema, Document } from 'mongoose';
import UserModel, { User } from './user';
import CardModel, { Card } from './card';

export interface Collection extends Document {
    title: string;
    items: Card['_id'][];
    owner: User['_id'];
}

export const CollectionSchema: Schema = new Schema({
    title: String,
    items: [{ type: Schema.Types.ObjectId, ref: CardModel.modelName }],
    owner: { type: Schema.Types.ObjectId, ref: UserModel.modelName },
});

export default model<Collection>('Collection', CollectionSchema);
