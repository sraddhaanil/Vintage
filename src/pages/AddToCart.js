import React, { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://vintage-backend.onrender.com/api",
});

const AddToCartButton = ({ productId }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const addToCart = async () => {
    try {
      setIsAddingToCart(true);

      const response = await api.post("/cart/add-to-cart", {
        product_id: productId,
      });

      console.log("Item added to cart:", response.data);

      // Handle additional logic if needed (e.g., show a success message)
    } catch (error) {
      console.error("Error adding item to cart:", error);

      // Handle errors (e.g., show an error message)
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <button onClick={addToCart} disabled={isAddingToCart}>
      {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
