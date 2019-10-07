import {Model} from "mongoose";

function apply(app: any, route: any) {
    app[route.kind](route.handler);
}


function applyAll(app: any, routes: Array<any>) {
    routes.map((route) => {
        app[route.kind](route.handler);
    });
}

function generateCreate(model: Model<any>) {

}

function generateDelete(model: Model<any>) {

}

function generateUpdate(model: Model<any>) {

}

function generateGet(model: Model<any>) {
    
}




export function generateAPI(models : Model<any>[]) {
    models.map((model: Model<any>) => {
        generateCreate(model);
        generateDelete(model);
        generateUpdate(model);
        generateGet(model);
    });
}
