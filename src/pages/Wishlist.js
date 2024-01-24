import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vintage-backend.onrender.com/api',
});

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  // Move fetchWishlistData outside useEffect
  const fetchWishlistData = async () => {
    try {
      const response = await api.get('/wishlist/get-wishlist-items');
      const data = await response.data;
      setWishlist(data); // Assuming the API response contains wishlist items
    } catch (error) {
      console.error('Error fetching wishlist data:', error);
    }
  };

  useEffect(() => {
    // Fetch wishlist data
    fetchWishlistData();
  }, []);

  const deleteFromWishlist = async (productId) => {
    try {
      const response = await api.delete('/wishlist/delete-item-from-wishlist', {
        data: { product_id: productId },
      });

      if (response.status === 200) {
        console.log('Item deleted from the wishlist');
        // Refresh wishlist data after deletion
        fetchWishlistData();
      } else {
        console.error('Failed to delete item from the wishlist');
      }
    } catch (error) {
      console.error('Error deleting item from the wishlist:', error);
    }
  };

  return (
    <Layout>
      <div>
        <h2>Your Wishlist</h2>
        {wishlist.map((item) => (
          <div key={item.id}>
            <img
              src={item.imageUrl}
              alt={item.productName}
              style={{ maxWidth: '100px', maxHeight: '100px' }}
            />
            <p>{item.productName}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            {/* Add more details if needed */}
            <button onClick={() => deleteFromWishlist(item.productId)}>
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Wishlist;
