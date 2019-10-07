import {model, Schema, Document} from "mongoose";
import UserModel, {IUser} from "./user"
import CardModel, {ICard} from "./card"

export interface ICollection extends Document {
    title: string,
    items: ICard['_id'][],
    owner: IUser['_id']
};

export const CollectionSchema : Schema = new Schema({
    title: String,
    items: [{type: Schema.Types.ObjectId, ref: CardModel.modelName}],
    owner: {type: Schema.Types.ObjectId, ref: UserModel.modelName}
});

export default model<ICollection>('Collection', CollectionSchema)

