import path from 'path';
import bearertoken from 'express-bearer-token';

import express, { Application } from 'express';
import mongoose from 'mongoose';

import cardModel from './models/card';
import Collection from './models/collection';
import User from './models/user';
import { index, signup, home } from './controller.jsx';
import { generateCRUD } from './utils';
import decodeToken from './middleware';

const port = 3000;
const app = express();

// static files
app.use('/static', express.static(path.join(__dirname, './static')));
app.use(bearertoken({
    cookie: {
        signed: false,
        secret: 'greatsecret',
        key: 'access_token',
    },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// views
// app.set('view engine', 'pug')
// app.set('views', path.join(__dirname, './views'))

// configure routes
app.get('/', index);
app.get('/home', decodeToken, home);
app.post('/signup', signup);

generateCRUD(app, [cardModel, User, Collection]);

function start() {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    });
}

// init db connection
mongoose.connect('mongodb://localhost/augmenture', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', start);
