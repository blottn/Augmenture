const path = require('path');
const jwt = require('jsonwebtoken');

import {TokenRequest} from './types';
import {validateEmail} from './utils';

import UserModel from './models/user';
import CardModel from './models/card';

import { Request, Response } from "express";

export async function index(req: Request, res: Response) {
    res.render('index', { message: 'Hello there!' })
}

export async function signup(req: Request, res: Response) {
    console.log(req.body);
    let email : string = req.body.email;
    let uname : string = req.body.uname;
    let pass : string = req.body.pw;
    // validate password
    if ((!pass) || pass.length < 8) {
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

    UserModel.findOne({'uname': uname}, (err, user: IUser) => {
        if (user) {
            res.status(409)
                .send(uname + ' already in use');
        }
        else {
            UserModel.create({
                uname: uname,
                email: email,
                secret: pass,
            }, () => {
                //success
                let token = jwt.sign({uname: uname}, "greatsecret", {
                    expiresIn: "24h"
                });
                res.status(201)
                    .send({'access_token': token})
            });
        }
    });
}

export async function home(req: TokenRequest, res: Response) {
    res.send('home');
}
