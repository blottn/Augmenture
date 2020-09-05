import { Application, Request, Response } from 'express';
import { Model, Document } from 'mongoose';

export function validateEmail(email) {
    if (!email) {
        return false;
    }

    const parts = email.split('@');
    if ((parts.length !== 2) || (!parts[1])) {
        return false;
    }

    const domain = parts[1];
    if ((!domain)) {
        return false;
    }

    const domainParts = domain.split('.');
    if ((domainParts.length !== 2)
        || (!domainParts[0])
        || (!domainParts[1])) {
        return false;
    }

    return true;
}

// CRUD gen
function generateCreate(app, DocumentModel, root = '/api/') {
    const route = `${root}${DocumentModel.modelName}/create`;
    app.post(route, (req, resp) => {
        new DocumentModel(req.body).save((err) => { console.log(`doc create: err: ${err}`); });
        resp.send('OK');
    });
}

function generateRead(app, model, root = '/api/') {
    const route = `${root}${model.modelName}/read`;
    app.get(route, (req, resp) => {
        resp.send('OK');
    });
}

function generateUpdate(app: Application, model: Model<Document>, root = '/api/'): void {
    const route = `${root}${model.modelName}/update`;
    app.put(route, (req: Request, resp: Response) => {
        resp.send('OK');
    });
}

function generateDelete(app: Application, model: Model<Document>, root = '/api/'): void {
    const route = `${root}${model.modelName}/delete`;
    app.delete(route, (req: Request, resp: Response) => {
        resp.send('OK');
    });
}

export function generateCRUD(app: Application, models: Model<Document>[]): void {
    models.map((model: Model<Document>) => {
        generateCreate(app, model);
        generateRead(app, model);
        generateUpdate(app, model);
        generateDelete(app, model);
        return model;
    });
}
