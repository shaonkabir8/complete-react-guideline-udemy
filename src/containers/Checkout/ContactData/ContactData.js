import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter you Name"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter your Email"
        },
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your Street"
        },
        value: ""
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your ZIP Code"
        },
        value: ""
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your Country Name"
        },
        value: ""
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "normal", displayValue: "Normal" },
            { value: "slow", displayValue: "Slow" }
          ]
        },
        value: ""
      }
    },
    loading: false
  };

  // form submition function
  orderHandler = e => {
    e.preventDefault();
    // set 'loading' fasle to display Loader
    this.setState({ loading: true });
    // destructure the input property and grab the values
    const { name, email, street, postalCode, deliveryMethod } = e.target;
    // create an object to send firebase
    const order = {
      ingredents: this.props.ingredents,
      price: this.props.price,
      customer: {
        name: name.value,
        email: email.value,
        address: {
          street: street.value,
          postalCode: postalCode.value
        }
      },
      deliveryMethod: deliveryMethod.value
    };
    // send data to firebase as 'orders.json'
    axios
      .post("/orders.json", order)
      .then(res => this.setState({ loading: false }))
      .catch(error => this.setState({ loading: false }));
  };

  render() {
    // create input based on Config
    let formElementArray = [];
    for (var key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    // initial markup of form when DOM isn't loading
    let form = (
      <form>
        {formElementArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
          />
        ))}
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    // check if DOM is Busy => Spinner will be visiable
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Write your details to continue shoping</h4>
        {form}
      </div>
    );
  }
}
export default ContactData;
