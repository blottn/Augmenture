import * as React from 'react';

import { Banner, Signup } from './signup';

export default (): JSX.Element => (
    <>
        <div className="flex-balance">
            <Banner />
        </div>
        <div className="flex flex-balance flex-center purple">
            <Signup />
        </div>
    </>
);
