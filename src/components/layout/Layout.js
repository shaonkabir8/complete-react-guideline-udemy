import React from 'react';
import Aux from '../../hoc/Auxx';
import classes from './Layout.css'
import Toolbar from '../Navigator/Toolbar/Toolbar'


const Layout = props => (
    <Aux>
        <Toolbar />
        <div>Sidebar, Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout;