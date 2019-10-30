import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxx';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
        }

        componentWillMount() {
            this.requestInterceptors = axios.interceptors.request.use( req => {
                this.setState({error: null});
                return req;
            });

            this.responseInterceptors = axios.interceptors.response.use(response => response,      error => {
                this.setState({error})
            });
        }

        // eject mode for axios interceptors
        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptors);
            axios.interceptors.response.eject(this.responseInterceptors)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render() {
            return(
                <Aux>
                    <Modal 
                        show = {this.state.error}
                        close={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
};

export default withErrorHandler;