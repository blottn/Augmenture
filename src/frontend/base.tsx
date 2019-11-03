import * as React from 'react';

import * as Index from './index';
import Header from './header';

export default (): JSX.Element => (
    <html lang="en">
        <head>
            <Header />
            <title>Augmenture</title>
        </head>
        <body className="root">
            <div id="root" className="flex fill">
                <Index />
            </div>
        </body>
    </html>
);
