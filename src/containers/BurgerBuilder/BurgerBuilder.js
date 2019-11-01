import React, { Component } from 'react'
import axios from '../../axios-orders'
import Aux from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OderSummery from '../../components/Burger/OrderSummery/OrderSummery';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDENTS_PRICE = {
    salad: 5,
    bacon: 8,
    meat: 20,
    cheese: 5
}

class BurgerBuilder extends Component {
    state = {
        ingredents : null,
        price: 10,
        purchasable : false,
        purchasing: false,
        loading: false,
        error: false,
    }


    increaseIngredents = (type) => {
        const oldCount = this.state.ingredents[type];
        const updatedCount = oldCount + 1;
        const updatedIngredents = {
            ...this.state.ingredents
        }
        updatedIngredents[type] = updatedCount;
        const priceTradition = INGREDENTS_PRICE[type]
        const oldPrice = this.state.price
        const currentPrice = oldPrice + priceTradition;

        this.setState({
            ingredents: updatedIngredents,
            price: currentPrice
        })
        this.updatePurchaseStatus(updatedIngredents)
    }
    
    decreaseIngredents = (type) => {
        const oldCount = this.state.ingredents[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredents = {
            ...this.state.ingredents
        }
        updatedIngredents[type] = updatedCount;
        const priceTradition = INGREDENTS_PRICE[type]
        const oldPrice = this.state.price
        const currentPrice = oldPrice - priceTradition;

        this.setState({
            ingredents: updatedIngredents,
            price: currentPrice
        })
        this.updatePurchaseStatus(updatedIngredents)
    }

    
    updatePurchaseStatus(ingredents) {
        const total = 
            Object.keys(ingredents)
                .map(ingredent => {
                    return ingredents[ingredent]
                })
                .reduce((total,element) => {
                    return total + element;
                },0)
        this.setState({purchasable: total > 0})

    }

    // Purchasing Order Button
    purchasHandler = () => {
        this.setState({purchasing: true})
    }

    cancelPurchase = () => {
        this.setState({purchasing: false})
    }
    continuePurchase = () => {
        // sending data by encoding to Checkout component

        // 1. encode our state's ingrendts according to 'key' = 'value'
        const queryParams = [];
        for(var i in this.state.ingredents) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredents[i]))
        };
        // # push ingredents to use them on ContactData throuth Checkot
        queryParams.push('price=' + this.state.price)
        // 2. Join our encoded data
        const queryString = queryParams.join('&');

        // Chaning url to make routing successfull
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })
    }

    // fetching ingredents data from server
    componentDidMount() {
        axios.get('https://burger-builder-84ff5.firebaseio.com/ingredents.json')
            .then(res => {
                this.setState({ingredents: res.data})
            })
            .catch(error => this.setState({error: true}));
    }


    render() {
        let disabledInfo = {...this.state.ingredents};
        for(var key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        // initial order summery markup
        let OrderSummery =  <Spinner />
        
        // if no ingrendts found, spinner will be available
        let burger = this.state.error ? <p style={{textAlign: "center",marginTop: '100px', color: 'red', fontWeight: 'bold'}}>ingredents can't be loaded.. Something went wrong !</p> : <Spinner />
        // checking if ingredents rendered from server
        if(this.state.ingredents) {
            burger = (
                <Aux >
                <Burger ingredents={this.state.ingredents} />
                <BuildControls 
                    lebel={this.state.ingredents} 
                    increase = {this.increaseIngredents}
                    decrease = {this.decreaseIngredents}
                    disabled = {disabledInfo}
                    price = {this.state.price}
                    purchasable ={this.state.purchasable}
                    order = {this.purchasHandler}
                />
            </Aux>
            );

            OrderSummery = <OderSummery
                ingredents={this.state.ingredents} 
                close={this.cancelPurchase}
                continue={this.continuePurchase}
                price={this.state.price}/>
            // check if DOM is loading,
            if(this.state.loading) {
                OrderSummery = <Spinner />
            }

        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} close={this.cancelPurchase}>
                    {OrderSummery}
                </Modal>
                {burger}
            </Aux>
        )
    }
}
export default withErrorHandler(BurgerBuilder, axios);