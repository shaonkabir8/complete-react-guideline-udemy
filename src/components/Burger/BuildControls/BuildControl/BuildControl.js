import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Lebel}>{props.lebel}</div>
            <button className={classes.More}>+ More</button>
            <button className={classes.Less}>- Less</button>
        </div>
    )
}
export default buildControl;