import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart;  //option 1
    // const {cart} = props; //option 2
    console.log(cart);
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
       total = total + product.price;
       totalShipping += product.shipping; 
    }
    const tax = total * 7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Shipping : ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;