import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProduct';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Orders = () => {
    const [products] = useProducts();
    // const [products,setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product =>{
        // console.log(product);
        const rest = cart.filter(pd => pd.id !==product.id)
        setCart(rest);
        removeFromDb(product.id);
    } 
    return (
        <div className='shop-container'>
            <div className='products-review-container'>
                 {
                     cart.map(product => <ReviewItem key={product.id}
                     product={product} handleRemoveProduct={handleRemoveProduct}>                       
                     </ReviewItem>)
                 } 
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={'/inventory'}><button>Proceed Checker</button> </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Orders;