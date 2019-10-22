import React from 'react';
import classes from './BuildControls.css';
import Buildcontrol from './BuildControl/BuildControl'

// const buildControls = (props) => (
    
//     <div className={classes.Control}>
//         <Buildcontrol lebel="All content are empty now" />
//     </div>
// );

class buildControls extends React.Component {
    render() {
        let lebelText = Object.keys(this.props.lebel).map(item => {
            return <li key={item}>{item}</li>;
        })
        console.log(lebelText)
        return(
            <div className={classes.Control}>
                <Buildcontrol lebel={lebelText} />
            </div>
        )
    }
}


export default buildControls;