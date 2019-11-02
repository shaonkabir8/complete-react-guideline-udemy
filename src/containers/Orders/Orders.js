import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
class Orders extends Component {

    state = {
        orders: [],
        loading: true,
    }
    
    componentDidMount() {
        axios.get('/orders.json')
        .then(res => {
                let fetchOrders = [];
                for( var key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading:false, orders: fetchOrders})
            })
            .catch(error => this.setState({loading:false}))
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => {
                   return (
                        <Order 
                            key={order.id}  
                            ingredents={order.ingredents}
                            price={order.price}/>
                   )
                })}
            </div>
        )
    }
}
export default withErrorHandler(Orders, axios);
