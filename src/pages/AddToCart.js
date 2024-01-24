import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/Addtocart.css";

const api = axios.create({
  baseURL: "https://vintage-backend.onrender.com/api",
});

function AddtoCart() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartData = async () => {
    try {
      const response = await api.get("/cart/get-cart-items");
      const data = await response.data;
      setCartItems(data); // Assuming the API response contains cart items
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    // Fetch cart data on component mount
    fetchCartData();
  }, []);

  const updateQuantity = async (productId, itemQuantity) => {
    const newQuantity = Math.max(1, itemQuantity);

    try {
      const response = await api.put("/cart/update-quantity", {
        product_id: productId,
        quantity: newQuantity,
      });

      if (response.status === 200) {
        console.log("Quantity updated successfully");
        await fetchCartData(); // Refresh cart data
      } else {
        console.error("Failed to update quantity");
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const deleteFromCart = async (productId) => {
    try {
      const response = await api.delete("/cart/delete-item-from-cart", {
        data: { product_id: productId },
      });

      if (response.status === 200) {
        console.log("Item deleted from the cart");
        await fetchCartData(); // Refresh cart data
      } else {
        console.error("Failed to delete item from the cart");
      }
    } catch (error) {
      console.error("Error deleting item from the cart:", error);
    }
  };

  return (
    <Layout>
      <div className="addtocart">
        <h2>Your Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items">
            <img
              src={item.image}
              alt={item.title}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
              className="cart-img"
            />
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>

            {/* Quantity update section */}
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="cart-quality">
              <button
                onClick={() => {
                  updateQuantity(item["_id"], item.quantity - 1);
                }}
                className="cart-btn">
                -
              </button>
              <p style={{ margin: "0 10px" }}>{item.quantity}</p>
              <button
                onClick={() => {
                  updateQuantity(item["_id"], item.quantity + 1);
                }}
                className="cart-btn">
                +
              </button>
            </div>

            {/* Delete from cart section */}
            <div
              onClick={() => {
                deleteFromCart(item["_id"]);
              }}
              className="delete-icon-btn">
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default AddtoCart;
