
import CardModel from './models/card';
import { Request, Response } from "express";

export async function index(request: Request, response: Response) {
    response.send("HELLO WOLRD");
}

