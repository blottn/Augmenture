

function apply(app: any, route: any) {
    app[route.kind](route.handler);
}


function applyAll(app: any, routes: Array<any>) {
    routes.map((route) => {
        app[route.kind](route.handler);
    });
}

