import React from 'react';

export default function TopBar(props) {
    return <div className="top-bar">
        <section>
            <ul>
                <li><a href="#">Call to Action</a></li>
                <li><a href="#">Cart <i className="fa fa-shopping-cart"/> {props.cartItems} </a></li>
            </ul>
        </section>
    </div>
}