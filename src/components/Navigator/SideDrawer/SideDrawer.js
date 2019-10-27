import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigationitems/NavigationItems'
import BackDrop from '../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.css'
import Aux from '../../../hoc/Auxx'

const sideDrawer = (props) => {

    let attachedClass = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClass = [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <BackDrop show={props.open} close={props.closed} />
            <div className={attachedClass.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
};

export default sideDrawer;