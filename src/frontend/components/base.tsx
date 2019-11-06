import * as React from 'react';

import Header from './header';

// pages
import Pages from './pages';

type BaseProps = {
    route: string;
};

const Base: React.FunctionComponent<BaseProps> = ({ route }) => {
    const { Component, bundle } = Pages[route];
    return (
        <html lang="en">
            <head>
                <Header bundleSrc={bundle} />
                <title>Augmenture</title>
            </head>
            <body className="root">
                <div id="root" className="flex fill">
                    <Component />
                </div>
            </body>
        </html>
    );
};

export default Base;
