import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database, you must use async await

    
    
    const storedCart = getShoppingCart();
    const savedCart = [];

    // console.log(storedCart);
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    

    // if you need to send two or multiple things, JS does not allow that. so we can return a single array marging the both like this: 
    // return[products, savedCart]

    //  or you can return as an object whos properties would be your values.
    // return {products, savedCart}


    return savedCart;
}

export default CartProductsLoader;