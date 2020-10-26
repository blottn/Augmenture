import * as ReactDOM from 'react-dom';
import * as React from 'react';

import css from './static/styles/index.scss';

import Index from './components/index.jsx';

window.onload = () => {
    ReactDOM.render(<Index />, document.getElementById('root'));
};

export default {
    Index,
};
