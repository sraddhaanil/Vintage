import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import "../styles/Wishlist.css";

const api = axios.create({
  baseURL: 'https://vintage-backend.onrender.com/api',
});

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  // Move fetchWishlistData outside useEffect
  const fetchWishlistData = async () => {
    try {
      const encodedData = btoa(localStorage.getItem("currentUser"))
      const response = await api.get('/wishlist/get-wishlist-items',{
        headers: {
          "Authorization": `Basic ${encodedData}`
        }
        });
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
        data: { 
          user:localStorage.getItem("currentUser"),
          product_id: productId },
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

  const moveToCart = async (productId) => {
    try {
      // Add to cart
      const addToCartResponse = await api.post('/cart/add-to-cart', {
        user:localStorage.getItem("currentUser"),
        product_id: productId,
      });

      if (addToCartResponse.status === 200) {
        console.log('Item moved to cart successfully');

        // Delete from wishlist after adding to cart
        await deleteFromWishlist(productId);
      } else {
        console.error('Failed to move item to cart');
      }
    } catch (error) {
      console.error('Error moving item to cart:', error);
    }
  };

  const codeLoggedIn = wishlist.map((item) => (
          <div key={item.id} className="wish-list-items">
            <img
              src={item.image}
              alt={item.title}
              style={{ maxWidth: '100px', maxHeight: '100px' }}
            />
            <p>{item.title}</p>
            {/* Add more details if needed */}
            <div>
            <button className="wish-list-btn" onClick={() => moveToCart(item["_id"])}>
              Move to Cart
            </button>
            <button className="wish-list-btn" onClick={() => deleteFromWishlist(item["_id"])}>
              Remove from Wishlist
            </button>
          </div>
          </div>
        ))

  return (
    <Layout>
      <div className="addtowishlist">
        <h2>Your Wishlist</h2>
        {localStorage.getItem("currentUser") ? codeLoggedIn : <h5>Login to add items to wishlist</h5>}
      </div>
    </Layout>
  );
}

export default Wishlist;

