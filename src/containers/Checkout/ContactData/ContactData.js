import React, { Component } from 'react';
// import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'


class ContactData extends Component {
    state = {
        // name: '',
        // email: '',
        // address: {
        //     street: '',
        //     postalCode: '',
        // },
        loading: false,
    }

    // form submition function
    orderHandler = (e) => {
        e.preventDefault();
        // set 'loading' fasle to display Loader
        this.setState({loading: true})
        // destructure the input property and grab the values 
        const { name, email, street, postalCode, deliveryMethod }  = e.target
        // create an object to send firebase
        const contactInfo = {
            name: name.value,
            email: email.value,
            address: {
                street: street.value,
                postalCode: postalCode.value,
            },
            deliveryMethod: deliveryMethod.value,
            // sending ingredents and price to firebase for rendering in DOM(Orders Component)
            ingredents: this.props.ingredents,
            price: this.props.price
        };
        // send data to firebase as 'orders.json'
        axios.post('/orders.json', contactInfo )
            .then(res => this.setState({loading: false}))
            .catch(error => this.setState({loading: false}))

    }

    render() {

        // initial markup of form when DOM isn't loading
        let form = (
            <form onSubmit={this.orderHandler}>
                <input type="text" placeholder="Entery Your Name" name="name" ref={(input) => this.name = input}/>
                <input type="email" placeholder="Entery Your Email" name="email" ref={(input) => this.email = input}/>
                <input type="text" placeholder="Entery Your Street" name="street" ref={(input) => this.street = input}/>
                <input type="text" placeholder="Entery Your PostalCode" name="postalCode" ref={(input) => this.postalCode = input}/>
                <label htmlFor="deliveryStatus">Delivery Method :</label>
                <select name="deliveryMethod" ref={(input) => this.deliveryMethod = input}>
                    <option value="Fastest">Fastest</option>
                    <option value="Normal">Normal</option>
                </select>
                <input type="submit" value="Submit"/>

                {/* <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button> */}
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