import { Application, Request, Response } from 'express';
import { Model, Document } from 'mongoose';

export function validateEmail(email: string): boolean {
    if (!email) {
        return false;
    }

    const parts: string[] = email.split('@');
    if ((parts.length !== 2) || (!parts[1])) {
        return false;
    }

    const domain: string = parts[1];
    if ((!domain)) {
        return false;
    }

    const domainParts: string[] = domain.split('.');
    if ((domainParts.length !== 2)
        || (!domainParts[0])
        || (!domainParts[1])) {
        return false;
    }

    return true;
}

// CRUD gen
function generateCreate(app: Application, model: Model<Document>, root = '/api/'): void {
    const route = `${root}${model.modelName}/create`;
    app.post(route, (req: Request, resp: Response) => {
        resp.send('OK');
    });
}

function generateRead(app: Application, model: Model<Document>, root = '/api/'): void {
    const route = `${root}${model.modelName}/read`;
    app.get(route, (req: Request, resp: Response) => {
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
