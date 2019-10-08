const path = require('path');

import CardModel from './models/card';
import { Request, Response } from "express";

export async function index(request: Request, response: Response) {
    response.sendFile(path.join(__dirname, 'static', 'index.html'));

}

