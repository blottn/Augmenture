import * as jwt from 'jsonwebtoken';

import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';

import { Request, Response } from 'express';

import withBase from './frontend/components/base';
import Index from './frontend/components/index';
import Home from './frontend/components/home';

import { TokenRequest } from './types';
import { validateEmail } from './utils';

import UserModel, { User } from './models/user';
import CollectionModel, { Collection } from './models/collection';
import CardModel, { Card } from './models/card';

export function index(req: Request, res: Response): void {
    const Page = withBase<{}>(Index);
    res.send(ReactDOMServer.renderToString(<Page />));
}

export function home(req: TokenRequest, res: Response): void {
    // find home for the user
    UserModel.findOne({uname: req.uname}, (err, { home }) => {
        if (err) {
            res.redirect('/');
        }
        else {
            const Page = withBase<{cards: Card[]}>(Home);
            res.send(ReactDOMServer.renderToString(<Page model={{ cards: home.items }} />));
        }
    });
}
export function signup(req: Request, res: Response): void {
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

    UserModel.findOne({ uname }, (err, user: User) => {
        if (user) {
            res.status(409)
                .send(`${uname} already in use`);
        } else {
            UserModel.create({
                uname,
                email,
                secret: pw,
                home: new CollectionModel(),
            }, () => {
                // success
                const token = jwt.sign({ uname }, 'greatsecret');
                res.status(201)
                    .send({ accessToken: token });
            });
        }
    });
}
