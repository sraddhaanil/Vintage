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
        const response = await api.get('/wishlist/get-wishlist');
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
        <h2>Your Wishlist</h2>
        {wishlist.map((item) => (
          <div key={item.id}>
            <p>{item.productName}</p>
            <p>Price: ${item.price}</p>
            {/* Add more details if needed */}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Wishlist;

