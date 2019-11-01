import React from 'react';
import Burger from '../Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummery.css'

const checkoutSummery = (props) => {
    return(
        <div className={classes.CheckoutSummery}>
            <h2>Your Delicious Burger is ready to serve!</h2>
            <div style={{'width': '100%','margin': 'auto'}}>
                <Burger ingredents={props.ingredents} />
            </div>
            <Button btnType="Danger" clicked>Cancel</Button>
            <Button btnType="Success" clicked>Continue</Button>
        </div>
    )
};

export default checkoutSummery;

// Todo :-
// 1. Button's clicked function isn't defined yet
// Both functionality will be added sooner