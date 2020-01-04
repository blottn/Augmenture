import * as jwt from 'jsonwebtoken';
import { Response } from 'express';

import { TokenRequest } from './types';

type Token = {
    uname: string;
};

export default function (req: TokenRequest, res: Response, next): void {
    if (!req.token) {
        res.status(401)
            .end();
    } else {
        try {
            const { uname } = jwt.verify(req.token, 'greatsecret') as Token;
            req.uname = uname;
            next();
        } catch (err) {
            res.status(401)
                .end();
        }
    }
}
