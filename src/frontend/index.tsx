import * as React from 'react';

import { Header } from './header.tsx';
import { Banner, Signup } from './signup.tsx';

export default (): React.Component => (
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
