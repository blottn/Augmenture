import * as ReactDOM from 'react-dom';
import * as React from 'react';

import { HomePage } from './components/home.jsx';

window.onload = () => {
    console.log(window.data);
    ReactDOM.hydrate(<HomePage {...window.data} />, document.getElementById('root'));
};

export default {
    HomePage,
};
