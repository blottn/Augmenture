import path from 'path';
import process from 'path';
import bearertoken from 'express-bearer-token';

import express from 'express';
import mongoose from 'mongoose';
import { ArgumentParser } from 'argparse';

import cardModel from './models/card.js';
import Collection from './models/collection.js';
import User from './models/user.js';
import { AugmentureRouter } from './controller.jsx';
import { generateCRUD } from './utils.js';
import decodeToken from './middleware.js';

const parser = new ArgumentParser({
  description: 'Augmenture webapp'
});

 
parser.add_argument('-v', '--version', { action: 'version', version: '0.0.11' });
parser.add_argument('--port', { help: 'Port to listen on', default: 3000 });
parser.add_argument('--static-dir', { help: 'Static file directory', default: './static'});
parser.add_argument('--dev', { help: 'Run in dev mode', default: false});


const { port, static_dir, dev } = parser.parse_args();

const app = express();

// static files
app.use('/static', express.static(path.join(__dirname, static_dir)));
app.use(bearertoken({
    cookie: {
        signed: false,
        secret: 'greatsecret',
        key: 'access_token',
    },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configure routes
app.use(new AugmentureRouter(dev));

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
