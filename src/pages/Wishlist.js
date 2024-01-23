import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vintage-backend.onrender.com/api',
});

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch wishlist data
    const fetchWishlistData = async () => {
      try {
        const response = await api.get('/wishlist/get-wishlist-items');
        const data = await response.data;
        setWishlist(data); // Assuming the API response contains wishlist items
      } catch (error) {
        console.error('Error fetching wishlist data:', error);
      }
    };

    fetchWishlistData();
  }, []);

  return (
    <Layout>
      <div>
        <h2>Your Cart</h2>
        {wishlist.map((item) => (
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

