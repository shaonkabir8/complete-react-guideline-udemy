import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.lebel}</div>
            <button 
                className={classes.Less}
                onClick={props.decrease}
                disabled = {props.disabled}>
                    - Less 
            </button>
            <button 
                className={classes.More}
                onClick={props.increase}>
                    + More
            </button>
        </div>
    )
}
export default buildControl;
