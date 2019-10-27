import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigationitems/NavigationItems'
import BackDrop from '../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.css'

const sideDrawer = (props) => {
    return(
        <div className={classes.SideDrawer}>
            <Logo height="10%" />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
};

export default sideDrawer;