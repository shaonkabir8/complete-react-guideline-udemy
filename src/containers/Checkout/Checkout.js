import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummery from '../../components/Burger/CheckoutSummery/CheckoutSummery';
import ContactData from '../Checkout/ContactData/ContactData';


class Checkout extends Component {

    // fake state for burger component
    // change it later
    state = {
        ingredents: null,
        price: 0,
    }


    // life cycle for grabing the data passed through URL and render them immidately
    componentWillMount() {
        // 1. grab the url where the params are passed
        const queryParams = new URLSearchParams(this.props.location.search);
        // 2. create an empty object and loop through the queryParams and store on it
        let ingredents = {}
        let price = 0;

        for( var params of queryParams.entries() ) {
            if(params[0] === 'price') {
               price = params[1]
            } else {
                ingredents[ params[0] ] = +params[1];
            }
        };
        // 3. Update our state to render ingrendts
        this.setState({ingredents, price})

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
                <Route 
                    path={this.props.match.path + '/contact-data'}
                    render={() => (<ContactData ingredents={this.state.ingredents} price={this.state.price} />) }/>
            </div>
        )
    }
};

export default Checkout;