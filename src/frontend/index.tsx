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
                <div className="flex-balance">
                    <Banner />
                </div>
                <div className="flex flex-balance flex-center purple">
                    <Signup />
                </div>
            </div>
        </body>
    </html>
);
