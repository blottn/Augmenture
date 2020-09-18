import * as jwt from 'jsonwebtoken';

import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';

import { Request, Response } from 'express';

import Index from './frontend/components/index.jsx';
import Home from './frontend/components/home.jsx';

import { validateEmail } from './utils';

import UserModel, { User } from './models/user';
import CollectionModel from './models/collection';

export function index(req, res) {
    res.send(ReactDOMServer.renderToString(<Index />));
}

export function home(req, res) {
    // find home for the user
    UserModel.findOne({ uname: req.uname }, (err, user) => {
        if (err || user == null) {
            res.redirect('/');
        } else {
            console.log(user);
            res.send(ReactDOMServer.renderToString(<Home user={user.uname} cards={[]} />));
        }
    });
}
export function signup(req, res) {
    const { email, uname, pw } = req.body;

    // validate password
    if ((!pw) || pw.length < 8) {
        res.status(400)
            .end();
        return;
    }

    // validate email
    if (!validateEmail(email)) {
        res.status(400)
            .end();
        return;
    }

    UserModel.findOne({ uname }, (err, user) => {
        if (user) {
            res.status(409)
                .send(`${uname} already in use`);
        } else {
            UserModel.create({
                uname,
                email,
                secret: pw,
            }, () => {
                // success
                const token = jwt.sign({ uname }, 'greatsecret');
                res.status(201)
                    .send({ accessToken: token });
            });
        }
    });
}
