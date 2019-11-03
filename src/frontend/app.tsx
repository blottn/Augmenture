import React from 'react';
import ReactDOM from 'react-dom';

import * as Index from './index';

import Pong from './pong';

window.onload = (): void => {
    ReactDOM.hydrate(React.createElement(Index, {}), document.getElementsByClassName('root')[0]);
};
export default {
    Index,
    Pong,
};
