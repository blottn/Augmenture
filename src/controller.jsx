import * as jwt from 'jsonwebtoken';

import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';

import { Request, Response, Router } from 'express';

import { BaseComponent } from './frontend/components/base.jsx';

import { validateEmail } from './utils';

import UserModel, { User } from './models/user';
import CollectionModel from './models/collection';

import { getDecodeToken } from './middleware.js';

export class AugmentureRouter extends Router {
    constructor(dev) {
        super();
        this.get('/', (req, res) => {
            res.send(ReactDOMServer.renderToString(<BaseComponent elementSrc="./static/index.js" />));
        });
        this.get('/home', getDecodeToken(dev), (req, res) => {
            if (dev) {
                res.send(ReactDOMServer.renderToString(
                    <BaseComponent elementSrc="./static/home.js" data={{user: req.uname, cards:[]}}/>
            ));
            }
            else {
                // find home for the user
                UserModel.findOne({ uname: req.uname }, (err, user) => {
                    if (err || user == null) {
                        res.redirect('/');
                    } else {
                        console.log(user);
                        res.send(ReactDOMServer.renderToString(
                            <BaseComponent elementSrc="./static/home.js" data={{user: user.uname, cards:[]}}/>
                        ));
                    }
                });
            }
        });
        this.post('/signup', (req, res) => {
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
        });
    }
}
