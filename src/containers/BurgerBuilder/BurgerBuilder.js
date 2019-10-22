import React, { Component } from 'react'
import Aux from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDENTS_PRICE = {
    salad: 5,
    bacon: 8,
    meat: 20,
    cheese: 5
}

class BurgerBuilder extends Component {
    state = {
        ingredents : {
            salad: 0,
            bacon: 0,
            meat:0,
            cheese:0,
        },
        price: 10
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
    }

    
    render() {
        let disabledInfo = {...this.state.ingredents};
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Burger ingredents={this.state.ingredents} />
                <BuildControls 
                    lebel={this.state.ingredents} 
                    increase = {this.increaseIngredents}
                    decrease = {this.decreaseIngredents}
                    disabled = {disabledInfo}
                    price = {this.state.price}
                />
            </Aux>
        )
    }
}
export default BurgerBuilder;