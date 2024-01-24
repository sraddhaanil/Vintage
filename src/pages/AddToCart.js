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

  const handleBuyNow = async () => {
    try {
      const response = await api.post("/cart/buy-now");

      if (response.status === 200) {
        console.log("Purchase successful");
        // You may want to redirect the user to a confirmation page or perform other actions
      } else {
        console.error("Failed to complete the purchase");
      }
    } catch (error) {
      console.error("Error during purchase:", error);
    }
  };

  const moveToWishlist = async (productId) => {
    try {
      const response = await api.post("/wishlist/add-to-wishlist", {
        product_id: productId,
      });

      if (response.status === 200) {
        console.log("Item moved to wishlist successfully");
        await fetchCartData(); // Refresh cart data
      } else {
        console.error("Failed to move item to wishlist");
      }
    } catch (error) {
      console.error("Error moving item to wishlist:", error);
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
            <p>Price: ${item.price * item.quantity}</p>

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

            {/* Buy Now and Move to Wishlist buttons */}
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => {
                  // Add logic to handle "Buy Now" for this item
                  console.log("Buy Now clicked for item:", item);
                }}
                className="buy-now-btn">
                Buy Now
              </button>
              <button
                onClick={() => {
                  moveToWishlist(item["_id"]);
                }}
                className="wishlist-btn">
                Move to Wishlist
              </button>
            </div>
          </div>
        ))}
        
        {/* Total Price */}
        <p className="total-price">Total Price: ${totalPrice}</p>

        {/* Buy Now button */}
        <button onClick={handleBuyNow} className="buy-now-btn">
          Buy Now
        </button>
      </div>
    </Layout>
  );
}

export default AddtoCart;
