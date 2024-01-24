import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import menImage from '../images/men.jpg';
import womenImage from '../images/women.jpg';
import kidImage from '../images/kids.jpg';
import beautyImage from '../images/beauty.jpeg';

function Home() {
  return (
    <Layout>
      <div className="home-page">
        <Link to="/men">
          <div className="image-block">
            <img src={menImage} alt="Men's Fashion" />
          </div>
        </Link>

        <Link to="/women">
          <div className="image-block">
            <img src={womenImage} alt="Women's Fashion" />
          </div>
        </Link>

        <Link to="/kids">
          <div className="image-block">
            <img src={kidImage} alt="Kids's Fashion" />
          </div>
        </Link>

        <Link to="/beauty">
          <div className="image-block">
            <img src={beautyImage} alt="Make Up" />
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export default Home;


