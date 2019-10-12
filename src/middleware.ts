const jwt = require('jsonwebtoken');

import { TokenRequest } from './types';

import { Response } from 'express';

export function decodeToken(req : TokenRequest, res: Response, next) {
    console.log('decoding token...');
    if (! req.token) {
        console.log('no token found');
        res.status(401)
            .end();
    }
    else {
        try {
            let decoded = jwt.verify(req.token, 'greatsecret');
            req.token = decoded;
            next();
            console.log('successfully decoded');
        }
        catch (err) {
            console.log('ah its an error');
            console.log(err);
            res.status(401)
                .end();
            console.log('error');
        }
    }
}
