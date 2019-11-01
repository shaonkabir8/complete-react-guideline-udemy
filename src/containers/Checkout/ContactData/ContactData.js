import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    }

    orderHandler = (e) => {
        // prevent Default behaviour
        e.preventDefault();
        // set 'loading' fasle to display Loader
        this.setState({loading: true})
        // sending order summery to firebase server
        const order = {
            ingredents: this.props.ingredents,
            price: this.props.price,
            customer: {
                name: 'Shaon Kabir',
                address: {
                    street: 'Baganchara College road',
                    dist: 'Jashore',
                    country: 'Bangladesh',
                    zipCode: 7433,
                },
                email: 'shaonkabir98@gmail.com',
                phone: +8801916380678,
            },
            deliveryMethod: 'express/fastest',
        }
        // send data to firebase as 'orders.json'
        axios.post('/orders.json',order )
            .then(res => this.setState({loading: false}))
            .catch(error => this.setState({loading: false}))
    }

    render() {

        // initial markup of form when DOM isn't loading
        let form = (
            <form>
                <input type="text" placeholder="Entery Your Name" name="name"/>
                <input type="email" placeholder="Entery Your Email" name="email"/>
                <input type="text" placeholder="Entery Your Street" name="street"/>
                <input type="text" placeholder="Entery Your PostalCode" name="postalCode"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        )

        // check if DOM is Busy => Spinner will be visiable
        if(this.state.loading) {
            form = <Spinner />
        }

        return(
            <div className={classes.ContactData}>
                <h4>Write your details to continue shoping !</h4>
                {form}
            </div>
        )
    }
};
export default ContactData;