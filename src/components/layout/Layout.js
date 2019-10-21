import React from 'react';
import Aux from '../../hoc/Auxx';
import classes from './Layout.css'


const Layout = props => (
    <Aux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout;