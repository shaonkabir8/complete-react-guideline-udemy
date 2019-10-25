import React from 'react';
import Aux from '../../../hoc/Auxx'
import Button from '../../UI/Button/Button'

const orderSummery = (props) => {
    const orderIngredents = Object.keys(props.ingredents).map((ingredent, index) => {
        return <li key={index}>
                    <span style={{textTransform: 'capitalize'}}> { ingredent } </span> : { props.ingredents[ingredent] }
                </li>
    })
    return(
        <Aux>
            <div>Your Order Summery</div>
            <p>Your delicious Burger with the following ingredents:</p>
            <ul>
                {orderIngredents}
            </ul>
            <p><strong>Total Price: ${props.price}</strong></p>
            <p>Continue checkout ?</p>
            <Button btnType='Danger' clicked={props.close}> Cancel </Button>
            <Button btnType='Success' clicked={props.continue}> Checkout </Button>
        </Aux>
    )
};
export default orderSummery;