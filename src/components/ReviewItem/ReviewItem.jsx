import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {name, quantity, img, price, id} = product;

    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='prod-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Qauntity: <span className='orange-text'>{quantity}</span></p>
                <p></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItem;