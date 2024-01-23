import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import Wishlist from './Wishlist';

const api = axios.create({
  baseURL: 'https://vintage-backend.onrender.com/api',
});

function AddtoCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart data
    const fetchCartData = async () => {
      try {
        const response = await api.get('/cart/get-cart-items');
        const data = await response.data;
        setCartItems(data); // Assuming the API response contains cart items
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);

  return (
    <Layout>
      <div>
        <h2>Your Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.productName} style={{ maxWidth: '100px', maxHeight: '100px' }} />
            <p>{item.productName}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            {/* Add more details if needed */}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Wishlist;
