import React from 'react';

export default function PageHeading(props) {
    return <section className="page-heading">
        <h1>{props.heading}</h1>
        <h2>{props.subHeading}</h2>
    </section>
}