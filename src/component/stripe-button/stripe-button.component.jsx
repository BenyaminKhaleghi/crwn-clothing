import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const  StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_P9yrDqWdLhsQ42H7qJnce81e00QlV6NMBQ';

    const onToken = token => {
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='PayNow'
            token={onToken}
            stripeKey={publishablekey}
            />
    )
};

export default StripeCheckoutButton;