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
  const [wishlist, setWishlist] = useState([]);
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
      const encodedData = btoa(localStorage.getItem("currentUser"));
      const response = await api.get("/cart/get-cart-items", {
        headers: {
          Authorization: `Basic ${encodedData}`,
        },
      });
      const data = await response.data;
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const fetchWishlistData = async () => {
    try {
      const encodedData = btoa(localStorage.getItem("currentUser"));
      const response = await api.get("/wishlist/get-wishlist-items", {
        headers: {
          Authorization: `Basic ${encodedData}`,
        },
      });
      const data = await response.data;
      setWishlist(data);
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
    return cartItems.some((item) => item["_id"] === productId);
  };

  const isItemInWishlist = (productId) => {
    return wishlist.some((item) => item["_id"] === productId);
  };

  const addToCart = async (productId) => {
    // Check if the user is logged in (you can replace this with your authentication logic)
    if (!localStorage.getItem("currentUser")) {
      // Redirect to the profile page if not logged in
      navigate("/profile");
      return;
    }

    try {
      const response = await api.post("/cart/add-to-cart", {
        user: localStorage.getItem("currentUser"),
        product_id: productId,
      });

      if (response.status === 201) {
        console.log("Item added to the cart");
        fetchCartData(); // Refresh cart data
      } else {
        console.error("Failed to add item to the cart");
      }
    } catch (error) {
      console.error("Error adding item to the cart:", error);
    }
  };

  const addToWishlist = async (productId) => {
    // Check if the user is logged in (you can replace this with your authentication logic)
    if (!localStorage.getItem("currentUser")) {
      // Redirect to the profile page if not logged in
      navigate("/profile");
      return;
    }

    try {
      const response = await api.post("/wishlist/add-to-wishlist", {
        user: localStorage.getItem("currentUser"),
        product_id: productId,
      });

      if (response.status === 200) {
        console.log("Item added to the wishlist");
        fetchWishlistData(); // Refresh wishlist data
      } else {
        console.error("Failed to add item to the wishlist");
      }
    } catch (error) {
      console.error("Error adding item to the wishlist:", error);
    }
  };

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

  return (
    <Layout className="beauty">
      <div className="card-content row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
        {products.map((product) => (
          <div className="col card col-md-4 col-lg-3" key={product.id}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text fw-bold">₹{product.price}</p>
              <p className="card-text text-truncate">{product.description}</p>
            </div>
            <div
              className="button-container text-center"
              style={{ paddingTop: "15px" }}
            >
              {isItemInCart(product["_id"]) ? (
                <button
                  className="btn btn-dark btn-lg"
                  onClick={() => navigate("/cart")}
                >
                  Go to Cart
                </button>
              ) : (
                <button
                  className="btn btn-dark btn-lg"
                  onClick={() => addToCart(product["_id"])}
                >
                  Add to Cart
                </button>
              )}
              <button
                className="btn btn-outline-dark btn-lg"
                style={{ marginLeft: "10px", color: isItemInWishlist(product["_id"]) ? 'red' : 'black' }}
                onClick={() => addToWishlist(product["_id"])}
                onDoubleClick={()=>deleteFromWishlist(product["_id"])}

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
