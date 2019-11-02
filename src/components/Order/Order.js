import React from 'react';
import classes from './Order.css'

const Order = (props) => {

    let ingredents = [];
    for(var ingredentsName in props.ingredents) {
        ingredents.push({
            name: ingredentsName,
            amount: props.ingredents[ingredentsName]
        })
    }

    const ingredentsOutput = ingredents.map(ingredent => {
        return <span 
                key={ingredent.name}
                style={{
                    "textTransform": "capitalize",
                    "margin": "0 5px",
                    "border": "1px solid #eee",
                    "display": "inline-block",
                    "padding": "5px",
                    "fontSize": "15px",
                    "fontWeight": "bold"
                }}> {ingredent.name} ({ingredent.amount})
            </span>
    })

    return (
        <div className={classes.Order}>
            <p>Ingredents: {ingredentsOutput}</p>
            <p>Price: <strong>BDT {props.price}</strong></p>
        </div>
    );
}

export default Order;
