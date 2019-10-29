import React , { Component } from 'react';
import classes from './Modal.css'
import Aux from '../../../hoc/Auxx'
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProp, nextState) {
        return nextProp.show !== this.props.show || nextProp.children !== this.props.children;
    }

    componentWillUpdate() {
        console.log('Modal Updating')
    }


    render() {
        return(
            <Aux>
                <Backdrop show={this.props.show} close={this.props.close} />
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}


export default Modal;