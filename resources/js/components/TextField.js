import React from 'react';

export default function TextField(props) {

    return <div>
        <input type="text" name={props.name} id={props.name} placeholder={props.placeholder} />
    </div>

}