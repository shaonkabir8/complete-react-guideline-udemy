import React from 'react';
import classes from './Toolbar.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../Navigator/Navigationitems/NavigationItems'
import DrawerToggle from '../Navigator/SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className={classes.Toolbar} >
        <DrawerToggle open={props.open} />
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;