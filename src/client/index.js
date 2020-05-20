import React from 'react';
import ReactDOM from 'react-dom';

import App from 'Client/App';

const el = React.createElement(App);
const target = document.getElementById('root');

ReactDOM.hydrate(el, target);
