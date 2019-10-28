import * as jwt from 'jsonwebtoken';
import { Response } from 'express';

import { TokenRequest } from './types';

export default function (req: TokenRequest, res: Response, next): void {
    if (!req.token) {
        res.status(401)
            .end();
    } else {
        try {
            const decoded = jwt.verify(req.token, 'greatsecret');
            req.token = decoded;
            next();
        } catch (err) {
            res.status(401)
                .end();
        }
    }
}
