import { Request, Response } from "express";

function listAll(request: Request, response: Response) {
    response.send('hello world\n');
}

export {listAll};
