import * as jwt from 'jsonwebtoken';
import { Response } from 'express';

export default function (req, res, next) {
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
