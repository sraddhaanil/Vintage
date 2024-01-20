import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import"../styles/Card.css"

const api = axios.create({
  baseURL: "https://vintage-backend.onrender.com/api",
});

const Men = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await api.get(
        "/products/get-category-products?category=men"
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

  return (
    <Layout className="beauty">
    <div className="beauty-content row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
        {products.map((product) => (
          <div className="col card col-md-4 col-lg-3" key={product.id}>
            <img
              src={product.image}
              className="card-img-top"
              // style={{ height: "200px", width:"150px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text fw-bold">${product.price}</p>
              <p className="card-text text-truncate">{product.description}</p>
              </div>
              <div className="button-container text-center"style={{ paddingTop: "15px" }}>
              <Link to="/beauty" className="btn btn-dark btn-lg">
                Add to Cart
              </Link>
          </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Men;
