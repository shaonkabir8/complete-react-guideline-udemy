import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css'


class ContactData extends Component {


    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
    }

    render() {
        return(
            <div className={classes.ContactData}>
                <h4>Write your details to continue shoping !</h4>
                <form action="">
                    <input type="text" placeholder="Entery Your Name" name="name"/>
                    <input type="email" placeholder="Entery Your Email" name="email"/>
                    <input type="text" placeholder="Entery Your Street" name="street"/>
                    <input type="text" placeholder="Entery Your PostalCode" name="postalCode"/>
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        )
    }
};
export default ContactData;