import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../styles/Card.css";
import Layout from "../components/Layout";

const api = axios.create({
  baseURL: "https://vintage-backend.onrender.com/api",
});

const Beauty = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  async function getProducts() {
    try {
      const response = await api.get(
        "/products/get-category-products?category=beauty"
      );
      const data = await response.data;
      setProducts(data.slice(0, 20));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    // Load wishlist from local storage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const addToWishlist = (productId) => {
    // Check if the product is already in the wishlist
    if (!wishlist.includes(productId)) {
      // Add product to the wishlist
      const updatedWishlist = [...wishlist, productId];
      setWishlist(updatedWishlist);

      // Update local storage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  return (
    <Layout className="beauty">
      <div className="beauty-content row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
        {products.map((product) => (
          <div className="col card col-md-4 col-lg-3" key={product.id}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text fw-bold">${product.price}</p>
              <p className="card-text text-truncate">{product.description}</p>
            </div>
            <div className="button-container text-center" style={{ paddingTop: "15px" }}>
              <Link to="/addtocart" className="btn btn-dark btn-lg">
                Add to Cart
              </Link>
              <button
                className="btn btn-outline-dark btn-lg"
                style={{ marginLeft: "10px" }}
                onClick={() => addToWishlist(product.id)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Beauty;
