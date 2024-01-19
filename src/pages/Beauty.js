import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const api = axios.create({
  baseURL: 'https://vintage-backend.onrender.com/api',
});

const Beauty = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await api.get("/products/get-category-products?category=beauty");
      const data = await response.data.products;
      setProducts(data.slice(0, 20));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Layout>
      <div className='row row-cols-4 gap-2 justify-content-center'>
        {products.map((product) => (
          <div className="col card" key={product.id}>
            <img
              src={product.thumbnail}
              className="card-img-top"
              style={{ height: "150px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text fw-bold">${product.price}</p>
              <p className="card-text text-truncate">{product.description}</p>
              <Link to="/beauty" className="btn btn-primary">
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Beauty;