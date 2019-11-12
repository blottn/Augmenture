import * as React from 'react';

import Nav from './nav';

const HomePage: React.FunctionComponent = (): JSX.Element => (
    <div className="flex flex-column">
        <h1>Home</h1>
    </div>
);

export default (): JSX.Element => (
    <Nav Page={HomePage} />
);
