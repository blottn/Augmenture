import { Request } from 'express';

export interface TokenRequest extends Request {
    uname: string;
}
