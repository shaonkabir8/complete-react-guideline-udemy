import React from 'react';
import Aux from '../../../hoc/Auxx'

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
        </Aux>
    )
};
export default orderSummery;