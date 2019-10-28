import * as React from 'react';

import Header from './header';
import { Banner, Signup } from './signup';

export default (): JSX.Element => (
    <html lang="en">
        <head>
            <Header />
            <title>Augmenture</title>
        </head>
        <body className="root">
            <div id="root" className="flex fill">
                <Banner />
                <Signup />
            </div>
        </body>
    </html>
);
