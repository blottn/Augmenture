const path = require('path');
const bearertoken = require('express-bearer-token');
const jwt = require('jsonwebtoken');

import express, {Application} from 'express';
import mongoose from 'mongoose';

import Card, {ICard} from './models/card';
import Collection from './models/collection';
import User from './models/user';
import { index, signup, home } from './controller';
import { generateCRUD } from './utils';
import { TokenRequest } from './types';
import { decodeToken } from './middleware';

const port : number = 3000;
const app : Application = express();

// static files
app.use('/static',express.static(path.join(__dirname, 'static')));
app.use(bearertoken({
    cookie: {
        key: 'access_token'
    }
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// views
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'))

//configure routes
app.get('/', index);
app.get('/home', decodeToken, home);
app.post('/signup', signup);

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
