import React from 'react';
import classes from './BuildControls.css';
import Buildcontrol from './BuildControl/BuildControl'

const controls = [
    { lebel: 'Salad', type: 'salad' },
    { lebel: 'Cheese', type: 'cheese' },
    { lebel: 'Bacon', type: 'bacon' },
    { lebel: 'Meat', type: 'meat' },
]

const buildControls = (props) => (
    
    <div className={classes.Control}>
        {controls.map((control,key) => {
            return <Buildcontrol 
                key={key} 
                lebel={control.lebel}  
                increase={() => props.increase(control.type)}
                decrease={() => props.decrease(control.type)}
            />
        })}
    </div>
);



export default buildControls;