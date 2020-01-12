import * as ReactDOM from 'react-dom';
import * as React from 'react';

import {HomePage} from './components/home';

window.onload = (): void => {
    console.log(window.data);
    ReactDOM.hydrate(<HomePage cards={window.data.cards} />, document.getElementById('root'));
};
export default {
    HomePage,
};
