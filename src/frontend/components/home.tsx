import * as React from 'react';

import Nav from './nav';

const HomePage: React.FunctionComponent = (): JSX.Element => (
    <h1>Home</h1>
);

export default (): JSX.Element => (
    <Nav Page={HomePage} />
);
