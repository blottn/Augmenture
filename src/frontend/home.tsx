import * as ReactDOM from 'react-dom';
import * as React from 'react';

import Home from './components/home';

window.onload = (): void => {
    console.log(window.data);
    ReactDOM.hydrate(<Home cards={window.data.cards} />, document.getElementById('root'));
};
export default {
    Home,
};
