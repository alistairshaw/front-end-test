import React from 'react';
import ReactDOM from 'react-dom';

import Standard from './layouts/Standard';

const heading = 'Confirm your Order';
const subHeading = 'You are one step away from accessing your resources';
const cartItems = 2;

const element = <Standard cartItems={cartItems} heading={heading} subHeading={subHeading} />;

ReactDOM.render(
    element,
    document.getElementById('root')
);