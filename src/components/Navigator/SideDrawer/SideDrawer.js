import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigationitems/NavigationItems'
import BackDrop from '../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.css'

const sideDrawer = (props) => {
    return(
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
};

export default sideDrawer;