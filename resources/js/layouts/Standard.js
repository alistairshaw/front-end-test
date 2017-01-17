import React from 'react';
import Header from '../components/Header';

export default function Standard(props) {
    return <div>
        <Header cartItems={props.cartItems} />
    </div>
}