import * as React from 'react';

import Header from './header';

// pages
import Index from './index';
import Home from './home';

const pages = {
    '': Index,
    home: Home,
};

type BaseProps = {
    route: string;
};

const Base: React.FunctionComponent<BaseProps> = ({ route }) => {
    const Page = pages[route];

    return (
        <html lang="en">
            <head>
                <Header />
                <title>Augmenture</title>
            </head>
            <body className="root">
                <div id="root" className="flex fill">
                    <Page />
                </div>
            </body>
        </html>
    );
};

export default Base;
