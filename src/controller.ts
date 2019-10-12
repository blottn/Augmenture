const path = require('path');
const jwt = require('jsonwebtoken');

import {TokenRequest} from './types';

import UserModel from './models/user';
import CardModel from './models/card';

import { Request, Response } from "express";

export async function index(req: Request, res: Response) {
    res.render('index', { message: 'Hello there!' })
}

export async function signup(req: Request, res: Response) {
    let email = req.body.email;
    let uname = req.body.username;
    let pass = req.body.pw;

    UserModel.findOne({'uname': uname}, (err, user) => {
        if (user) {
            res.status(409)
                .end();
        }
        else {
            UserModel.create({
                uname: uname,
                email: email,
                secret: pass,
            }, () => {
                let token = jwt.sign({uname: uname}, "greatsecret", {
                    expiresIn: "24h"
                });
                res.status(201)
                    .cookie('access_token', token)
                    .redirect(301, '/home');
            });
        }

    });
}

export async function home(req: TokenRequest, res: Response) {
    res.send('home');
}
