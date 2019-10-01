const express = require('express');
const mongoose = require('mongoose');


import CardModel from './models/card';
import CollectionModel from './models/collection';
import { listAll } from './controller';

const port = 3000;
const app = express();

//configure
app.get('/', listAll);

let start = () =>{

    CardModel.find(function (err, cards) {
        if (err) return console.error(err);
        console.log(cards);
    });
   
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    });
}

//init db connection
mongoose.connect('mongodb://localhost/augmenture', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', start);
