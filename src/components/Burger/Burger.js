import React from 'react';
import classes from './Burger.css';
import BurgerIngredents from './BurgerIngredents/BurgerIngredents'

const Burger = (props) => {
    return(
        <div className={classes.Burger}>
            <BurgerIngredents type="bread-top" />
            <BurgerIngredents type="meat" />
            <BurgerIngredents type="salat" />
            <BurgerIngredents type="bread-bottom" />
        </div>
    )
}

export default Burger;