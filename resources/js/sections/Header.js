import React from 'react';
import TopBar from './TopBar';
import Navigation from './Navigation';

export default function Header(props) {

    return <header>
        <TopBar cartItems={props.cartItems} />
        <Navigation />
    </header>

}