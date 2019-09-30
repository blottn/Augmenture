import CardModel from './models/card';
import { Request, Response } from "express";

async function listAll(request: Request, response: Response) {
    let output = '';
    await CardModel.find(function (err, cards) {
        if (err) return console.log(err);
        cards.map((card) => {
            output += JSON.stringify(card) + '\n';
        });
    });
    response.send(output);
}



export {listAll};
