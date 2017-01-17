import React from 'react';
import ReactDOM from 'react-dom';

import Standard from './layouts/Standard';

const element = <Standard cartItems="2" />;

ReactDOM.render(
    element,
    document.getElementById('root')
);