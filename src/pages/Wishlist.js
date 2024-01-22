import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Load wishlist from local storage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  return (
    <Layout>
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map((productId) => (
          <li key={productId}>{/* Display product details based on productId */}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Wishlist;
