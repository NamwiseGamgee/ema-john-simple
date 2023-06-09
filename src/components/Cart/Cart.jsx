import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    // const cart = props.cart;  //option 1
    // const {cart} = props; //option 2
    // console.log(cart);
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        /* if(product.quantity === 0){
            product.quantity =1;
        } */
       total = total + product.price * product.quantity;
       totalShipping += product.shipping; 
       quantity = quantity + product.quantity;
    }
    const tax = total * 7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Shipping : ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button onClick={handleClearCart}>
                Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
            {children}
        </div>
    );
};

export default Cart;