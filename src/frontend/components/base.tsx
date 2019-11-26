import * as React from 'react';

import Header from './header';

type BaseP = {
    Page: React.ElementType;
    bundleSrc: string;
};


function Base<M>({ Page, model, bundleSrc }): React.FunctionComponentElement<BaseP & {model?: M}> {
    return (
        <html lang="en">
            <head>
                <Header<M> model={model} bundleSrc={bundleSrc} />
                <title>Augmenture</title>
            </head>
            <body className="root">
                <div id="root" className="flex fill">
                    <Page model={model} />
                </div>
            </body>
        </html>
    );
}

Base.defaultProps = {
    model: undefined,
};

export default Base;
