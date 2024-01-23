import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../styles/Card.css";
import Layout from "../components/Layout";

const api = axios.create({
  baseURL: "https://vintage-backend.onrender.com/api",
});

const Beauty = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [, setWishlist] = useState([]);
  const navigate = useNavigate();

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

  const fetchCartData = async () => {
    try {
      const response = await api.get("/cart/get-cart");
      const data = await response.data;
      setCartItems(data.cart_items);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const fetchWishlistData = async () => {
    try {
      const response = await api.get("/wishlist/get-wishlist");
      const data = await response.data;
      setWishlist(data.wishlist_items);
    } catch (error) {
      console.error("Error fetching wishlist data:", error);
    }
  };

  useEffect(() => {
    getProducts();
    fetchCartData();
    fetchWishlistData();
  }, []);

  const isItemInCart = (productId) => {
    return cartItems.some((item) => item.product_id === productId);
  };

  const addToCart = async (productId) => {
    try {
      const response = await api.post("/cart/add-to-cart", {
        product_id: productId,
      });

      if (response.data.success) {
        console.log("Item added to the cart");
        fetchCartData(); // Refresh cart data
      } else {
        console.error("Failed to add item to the cart");
      }
    } catch (error) {
      console.error("Error adding item to the cart:", error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const response = await api.put("/cart/update-quantity", {
        product_id: productId,
        quantity: quantity,
      });

      if (response.data.success) {
        console.log("Quantity updated successfully");
        fetchCartData(); // Refresh cart data
      } else {
        console.error("Failed to update quantity");
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const addToWishlist = async (productId) => {
    try {
      const response = await api.post("/wishlist/add-to-wishlist", {
        product_id: productId,
      });

      if (response.data.success) {
        console.log("Item added to the wishlist");
        fetchWishlistData(); // Refresh wishlist data
      } else {
        console.error("Failed to add item to the wishlist");
      }
    } catch (error) {
      console.error("Error adding item to the wishlist:", error);
    }
  };

  return (
    <Layout className="beauty">
      <div className="card-content row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
        {products.map((product) => (
          <div className="col card col-md-4 col-lg-3" key={product.id}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text fw-bold">${product.price}</p>
              <p className="card-text text-truncate">{product.description}</p>
            </div>
            <div
              className="button-container text-center"
              style={{ paddingTop: "15px" }}
            >
              {isItemInCart(product.id) ? (
                <>
                  <button
                    className="btn btn-dark btn-lg"
                    onClick={() => navigate("/cart")}
                  >
                    Go to Cart
                  </button>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    style={{ marginLeft: "10px", width: "60px" }}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value, 10);
                      if (!isNaN(newQuantity)) {
                        updateQuantity(product.id, newQuantity);
                      }
                    }}
                  />
                </>
              ) : (
                <button
                  className="btn btn-dark btn-lg"
                  onClick={() => addToCart(product.id)}
                >
                  Add to Cart
                </button>
              )}
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
