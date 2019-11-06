import * as ReactDOM from 'react-dom';
import * as React from 'react';

import Home from './components/home';

window.onload = (): void => {
    ReactDOM.hydrate(<Home />, document.getElementById('root'));
};
export default {
    Home,
};
