import React from 'react';

import { Header } from './header';
import { Banner, Signup} from './signup';
import { Clicker } from './clicker';

export class Index extends React.Component {
 
    render() {
        return (
            <html>
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
    }
}
