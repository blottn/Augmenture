import * as jwt from 'jsonwebtoken';
import express from 'express';
const { Response } = express;

export default function decodeToken(dev, req, res, next) {
    if (dev) {
        req.uname = 'dev';
        next();
    }
    if (!req.token) {
        res.redirect('/');
    } else {
        try {
            const { uname } = jwt.verify(req.token, 'greatsecret');
            req.uname = uname;
            next();
        } catch (err) {
            res.status(401)
                .end();
        }
    }
}

export function getDecodeToken(dev) {
    return (req, res, next) => decodeToken(dev, req, res, next);
}
