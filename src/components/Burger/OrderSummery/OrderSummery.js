import React, { Component } from 'react';
import Aux from '../../../hoc/Auxx'
import Button from '../../UI/Button/Button'

class OrderSummery extends Component {

    componentWillUpdate() {
        console.log('Updating')
    }
    
    render() {
        const orderIngredents = Object.keys(this.props.ingredents).map((ingredent, index) => {
            return <li key={index}>
                        <span style={{textTransform: 'capitalize'}}> { ingredent } </span> : { this.props.ingredents[ingredent] }
                    </li>
            })
        return(
            <Aux>
                <div>Your Order Summery</div>
                <p>Your delicious Burger with the following ingredents:</p>
                <ul>
                    {orderIngredents}
                </ul>
                <p><strong>Total Price: ${this.props.price}</strong></p>
                <p>Continue checkout ?</p>
                <Button btnType='Danger' clicked={this.props.close}> Cancel </Button>
                <Button btnType='Success' clicked={this.props.continue}> Checkout </Button>
            </Aux>
        )
    }
}
export default OrderSummery;