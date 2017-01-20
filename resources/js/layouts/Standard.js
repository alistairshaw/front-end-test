import React from 'react';
import Header from '../sections/Header';
import PageHeading from '../components/PageHeading';
import CheckoutForm from '../components/CheckoutForm';
import Footer from '../sections/Footer';

export default function Standard(props) {
    return <div>
        <Header cartItems={props.cartItems} />
        <PageHeading heading={props.heading} subHeading={props.subHeading} />
        <CheckoutForm />
        <Footer />
    </div>
}