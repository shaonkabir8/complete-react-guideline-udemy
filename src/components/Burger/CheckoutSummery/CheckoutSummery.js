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
            <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.continue}>Continue</Button>
        </div>
    )
};

export default checkoutSummery;

