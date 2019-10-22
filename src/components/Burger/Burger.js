import React from 'react';
import classes from './Burger.css';
import BurgerIngredents from './BurgerIngredents/BurgerIngredents'

const Burger = (props) => {
    let transformIngredents = 
        Object.keys(props.ingredents)
        .map(ingredent => {
            return [...Array(props.ingredents[ingredent])].map((_, i ) => {
                return <BurgerIngredents key={ingredent + 1} type={ingredent} />
            })
        })
        .reduce((array, element) => {
            return array.concat(element)
        }, []);
        
        // if no ingredents found,
        if(transformIngredents.length === 0) {
            transformIngredents = <p>Please add ingredents first !</p>
        }
    return(
        <div className={classes.Burger}>
            <BurgerIngredents type="bread-top" />
            {transformIngredents}
            <BurgerIngredents type="bread-bottom" />
        </div>
    )
}

export default Burger;