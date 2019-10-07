import express, {Application, Request, Response} from "express";
import {Model} from "mongoose";

function apply(app: any, route: any) {
    app[route.kind](route.handler);
}


function applyAll(app: any, routes: Array<any>) {
    routes.map((route) => {
        app[route.kind](route.handler);
    });
}

function generateCreate(app: Application, model: Model<any>, root="/api/") {
    let route : string = root + model.modelName + '/create';
    app.post(route, express.json(), (req: Request, resp: Response) => {
        resp.send('OK');
    });
}

function generateRead(app: Application, model: Model<any>, root="/api/") {
    let route : string = root + model.modelName + '/read';
    app.get(route, express.json(), (req: Request, resp: Response) => {
        resp.send('OK');
    });
}

function generateUpdate(app: Application, model: Model<any>, root="/api/") {
    let route : string = root + model.modelName + '/update';
    app.put(route, express.json(), (req: Request, resp: Response) => {
        resp.send('OK');
    });
}

function generateDelete(app: Application, model: Model<any>, root="/api/") {
    let route : string = root + model.modelName + '/delete';
    app.delete(route, express.json(), (req: Request, resp: Response) => {
        resp.send('OK');
    });
}

export function generateCRUD(app: Application, models: Model<any>[]) {
    models.map((model: Model<any>) => {
        generateCreate(app, model);
        generateRead(app, model);
        generateUpdate(app, model);
        generateDelete(app, model);
    });
}
