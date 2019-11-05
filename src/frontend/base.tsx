import * as React from 'react';

import Index from './index';
import Header from './header';

const pages = {
    '': Index,
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
