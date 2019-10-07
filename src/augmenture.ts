import express, {Application} from 'express';
import * as mongoose from 'mongoose';


import Card, {ICard} from './models/card';
import Collection from './models/collection';
import User from './models/user';
import { listAll } from './controller';

import {generateAPI} from './utils';

generateAPI([Card, User, Collection]);

const port : number = 3000;
const app : Application = express();

//configure routes
app.get('/', listAll);

let start = () =>{

    Card.find(function (err: any, cards : ICard[]) {
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
