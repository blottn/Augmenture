import * as React from 'react';

import withBase from './base.jsx';
import { Banner, Signup } from './signup.jsx';

export default function Index() {
    return (
        <>
            <div className="flex-balance">
                <Banner />
            </div>
            <div className="flex flex-balance flex-center purple">
                <Signup />
            </div>
        </>
    );
}
