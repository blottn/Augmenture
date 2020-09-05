import * as ReactDOM from 'react-dom';
import * as React from 'react';

import { Index } from './components/index';

window.onload = () => {
    ReactDOM.hydrate(<Index />, document.getElementById('root'));
};
export default {
    Index,
};
