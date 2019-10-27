import React , {Component} from 'react';
import Aux from '../../hoc/Auxx';
import classes from './Layout.css'
import Toolbar from '../Navigator/Toolbar/Toolbar'
import SideDrawer from '../Navigator/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: true,
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    render() {
        return(
            <Aux>
                <Toolbar />
                <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer} />
                <div>Backdrop</div>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;