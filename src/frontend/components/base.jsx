import * as React from 'react';

import Header from './header.jsx';



export const BaseComponent = ({ elementSrc, data }) => (
    <html lang="en">
        <head>
            <script src={ elementSrc }></script>
            <script dangerouslySetInnerHTML={{
                __html: "window.data = " + JSON.stringify(data) + ";" 
            }}/>
        </head>
        <body className="root">
            <div id="root" className="flex fill">
            </div>
        </body>
    </html>
);

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
