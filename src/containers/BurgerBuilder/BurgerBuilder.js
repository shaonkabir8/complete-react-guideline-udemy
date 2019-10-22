import React, { Component } from 'react'
import Aux from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDENTS_PRICE = {
    salad: 10,
    bacon: 20,
    meat: 22,
    cheese: 10
}

class BurgerBuilder extends Component {
    state = {
        ingredents : {
            salad: 0,
            bacon: 0,
            meat:0,
            cheese:0,
        },
        price: 40
    }

    // Binding Methods
    // increaseIngredents = this.increaseIngredents.bind(this)
    // decreaseIngredents = this.decreaseIngredents.bind(this)


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
    }
    
    decreaseIngredents = (type) => {
        const oldCount = this.state.ingredents[type];
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
    }

    
    render() {
        return (
            <Aux>
                <Burger ingredents={this.state.ingredents} />
                <BuildControls 
                    lebel={this.state.ingredents} 
                    increase = {this.increaseIngredents}
                    decrease = {this.decreaseIngredents}
                />
            </Aux>
        )
    }
}
export default BurgerBuilder;