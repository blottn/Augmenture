import React from 'react';

import { Header } from './header';
import { Clicker } from './clicker';
export class Index extends React.Component {
 
    render() {
        return (
            <html>
                <head>
                <Header />
                    <title>Augmenture</title>
                </head>
                <body id="root" className="root">
                    <div id="root">
                        <Clicker />
                    </div>
                </body>
            </html>
        );
    }
}
