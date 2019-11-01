import React, { Component } from 'react';
import CheckoutSummery from '../../components/Burger/CheckoutSummery/CheckoutSummery';


class Checkout extends Component {

    // fake state for burger component
    // change it later
    state = {
        ingredents: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1,
        }
    }
    
    render() {
        return(
            <div>
                <CheckoutSummery ingredents={this.state.ingredents} />
            </div>
        )
    }
};

export default Checkout;