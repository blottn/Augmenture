import * as React from 'react';

import Header from './header.jsx';

const withBase = (Page) => (model) => (
        <html lang="en">
            <head>
                <Header model={model} bundleSrc={Page.bundleSrc} />
                <title>Augmenture</title>
            </head>
            <body className="root">
                <div id="root" className="flex fill">
                    <Page {...model} />
                </div>
            </body>
        </html>
    );

export default withBase;
