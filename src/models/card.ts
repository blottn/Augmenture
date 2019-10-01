const mongoose = require('mongoose');

const Card = mongoose.Schema({
    title: String,
    body: String
});

const CardModel = mongoose.model('Card', Card);

export default CardModel;
export const CardSchema = Card;
