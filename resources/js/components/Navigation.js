import React from 'react';

export default function Navigation(props) {

    return <nav>
        <a href="#" className="logo" />
        <ul>
            <li><a href="#">Resources <i className="fa fa-chevron-down"/></a></li>
            <li><a href="#">Training Packs</a></li>
            <li><a href="#">About <i className="fa fa-chevron-down"/></a></li>
        </ul>
    </nav>

}