import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect( () => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the added products
        for (const id in storedCart) {
            //step 2: get product from products by using the id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                //step 3: add quantity
                addedProduct.quantity = quantity;
                //step 4: push the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log("add korechi :", addedProduct);
        }
        //step 5: set the cart to the state variable
        setCart(savedCart);
    } , [products])

    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];

        //if product does not exist in the card, then set quantity = 1, if exists, then update by +1

        const exists = cart.find(pd => pd.id === product.id);
        if(!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                handleClearCart={handleClearCart}
                cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};


export default Shop;