import React from 'react';

import TextField from './TextField';

export default function CheckoutForm(props) {

    return <div className="checkout-form">
        <section>
            <h3>Checkout</h3>
            <div className="school-details">
                <div>
                    <h4>Your School Details</h4>
                    <TextField name="schoolName" placeholder="School Name"/>
                    <TextField name="fullName" placeholder="Full Name"/>
                    <TextField name="jobRole" placeholder="Job Role"/>
                    <TextField name="emailAddress" placeholder="Email Address"/>
                </div>
            </div>
            <div className="billing-address">
                <div>
                    <h4>Billing Address</h4>
                    <TextField name="address1" placeholder="School Name / House Number"/>
                    <TextField name="street" placeholder="Street"/>
                    <TextField name="county" placeholder="County"/>
                    <TextField name="postcode" placeholder="Postcode"/>
                </div>
            </div>
            <div className="purchase-order-number">
                <div>
                    <h4>Purchase Order Number</h4>
                    <TextField name="purchaseOrder" placeholder="Purchase Order Number" />
                </div>
            </div>
            <div className="summary">
                <div>
                    <h4>Confirm Your Order</h4>

                </div>
            </div>
        </section>
    </div>

}