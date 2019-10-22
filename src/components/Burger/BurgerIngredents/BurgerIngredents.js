import React , { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredents.css';


class BurgerIngredents extends Component {
    

    render() {
        let ingredents = null; 

        switch(this.props.type) {
            case ('bread-bottom'):
                ingredents = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredents = 
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>;
                break;
            case('meat'):
                ingredents = <div className={classes.Meat}></div>
                break;
            case('cheese'):
                ingredents = <div className={classes.Cheese}></div>
                break;
            case('salad'):
                ingredents = <div className={classes.Salad}></div>
                break;
            case('bacon'):
                ingredents = <div className={classes.Bacon}></div>
                break;
            default:
                ingredents = null;

            
        }

        return ingredents;
    }
}


BurgerIngredents.propTypes = {
    type: PropTypes.string.isRequired
}


export default BurgerIngredents;
