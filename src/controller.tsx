import * as jwt from 'jsonwebtoken';

import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';

import { Request, Response } from 'express';

import { Index } from './frontend/index.tsx';

import { TokenRequest } from './types.ts';
import { validateEmail } from './utils.ts';

import UserModel, { IUser } from './models/user.ts';

export async function index(req: Request, res: Response): void {
    res.send(ReactDOMServer.renderToString(<Index />));
}

export async function signup(req: Request, res: Response): void {
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

    UserModel.findOne({ uname }, (err, user: IUser) => {
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
                const token = jwt.sign({ uname }, 'greatsecret', {
                    expiresIn: '24h',
                });
                res.status(201)
                    .send({ accessToken: token });
            });
        }
    });
}

export async function home(req: TokenRequest, res: Response): void {
    res.send('home');
}
