import * as React from 'react';

import withBase from './base';
import { Banner, Signup } from './signup';

export function Index() {
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

Index.bundleSrc = 'index';

export default withBase(Index);
