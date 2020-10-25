import * as ReactDOM from 'react-dom';
import * as React from 'react';

import css from './static/styles/index.scss';

import { HomePage } from './components/home.jsx';

window.onload = () => {
    console.log(window.data);
    ReactDOM.render(<HomePage {...window.data} />, document.getElementById('root'));
};
