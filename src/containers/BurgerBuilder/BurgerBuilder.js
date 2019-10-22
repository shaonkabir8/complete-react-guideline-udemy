import React, { Component } from 'react'
import Aux from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger';


class BurgerBuilder extends Component {
    state = {
        ingredents : {
            salad: 0,
            bacon: 0,
            meat:0,
            cheese:0,
        }
    }
    
    render() {
        return (
            <Aux>
                <Burger ingredents={this.state.ingredents} />
                <div>Controls</div>
            </Aux>
        )
    }
}
export default BurgerBuilder;