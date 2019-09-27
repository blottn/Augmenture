const mongoose = require('mongoose');

const CardModel = mongoose.model('Card', {title: String, body: String});

export default CardModel;
