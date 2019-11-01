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


    // life cycle for grabing the data passed through URL and render them immidately
    componentDidMount() {
        // 1. grab the url where the params are passed
        const queryParams = new URLSearchParams(this.props.location.search);
        // 2. create an empty object and loop through the queryParams and store on it
        let ingredents = {}
        for( let params of queryParams.entries() ) {
            ingredents[ params[0] ] = +params[1];
        };
        // 3. Update our state to render ingrendts
        this.setState({ingredents})
    }


    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    render() {
        return(
            <div>
                <CheckoutSummery 
                    ingredents={this.state.ingredents} 
                    cancel={this.checkoutCancelHandler}
                    continue={this.checkoutContinueHandler}/>
            </div>
        )
    }
};

export default Checkout;