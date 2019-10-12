const jwt = require('jsonwebtoken');

import { TokenRequest } from './types';

import { Response } from 'express';

export function decodeToken(req : TokenRequest, res: Response, next) {
    if (! req.token) {
        res.status(401)
            .end();
    }
    else {
        try {
            let decoded = jwt.verify(req.token, 'greatsecret');
            req.token = decoded;
            next();
        }
        catch (err) {
            console.log(err);
            res.status(401)
                .end();
        }
    }
}
