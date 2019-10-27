import React , {Component} from 'react';
import Aux from '../Auxx';
import classes from './Layout.css'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigator/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        }))
    }

    render() {
        return(
            <Aux>
                <Toolbar open={this.sideDrawerOpenHandler} />
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