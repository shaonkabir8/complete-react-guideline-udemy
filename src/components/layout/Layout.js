import React from 'react';
import Aux from '../../hoc/Auxx';
import classes from './Layout.css'
import Toolbar from '../Navigator/Toolbar/Toolbar'
import SideDrawer from '../Navigator/SideDrawer/SideDrawer'



const Layout = props => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <div>Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout;