const path = require('path');

import CardModel from './models/card';
import { Request, Response } from "express";

export async function index(req: Request, res: Response) {
      res.render('index', { message: 'Hello there!' })
}

