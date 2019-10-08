import express, {Application} from 'express';
import mongoose from 'mongoose';

import Card, {ICard} from './models/card';
import Collection from './models/collection';
import User from './models/user';
import { index } from './controller';

import {generateCRUD} from './utils';


const port : number = 3000;
const app : Application = express();

// static files
app.use(express.static('static'));


//configure routes
app.get('/', index);

generateCRUD(app, [Card, User, Collection]);

let start = () =>{
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    });
}

//init db connection
mongoose.connect('mongodb://localhost/augmenture', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', start);
