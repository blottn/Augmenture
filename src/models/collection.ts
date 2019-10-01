const mongoose = require('mongoose');

import CardModel, {CardSchema} from "./card"

const CollectionModel = mongoose.model('Collection', {
    title: String,
    items: [CardSchema]
});

export default CollectionModel;
