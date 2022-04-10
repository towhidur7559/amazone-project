import React from 'react';
import './Home.css';
import Cart from '../Cart/Cart'
import useTShirts from '../Hooks/useTShirts';


const Home = () => {
    const [tShirts] = useTShirts();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                <h3>hey:{tShirts.length}</h3>
            </div>
            <div className="cart-container">
                 <Cart></Cart>
            </div>
            
        </div>
    );
};

export default Home;