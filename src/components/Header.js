import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import logoImage from "../images/logo.png";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  // State to manage the search query and search results
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("search-item").length?localStorage.getItem("search-item"):"");

  const navigate = useNavigate();

  const handleSearchChange = async (e) => {
    setSearchQuery(e.target.value)
    localStorage.setItem("search-item",e.target.value)
    setTimeout(()=>{
      navigate("/search")

    },1500)

  };

  useEffect(() => {
    // You can add any side effect logic here if needed
  }, []);

  return (
    <div className="header">
      <div className="content">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid d-flex justify-content-around">
            <Link className="navbar-brand nav-link active" to="/">
              <img src={logoImage} alt="Logo" className="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/men" className="nav-link">
                    MEN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/women" className="nav-link">
                    WOMEN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/kids" className="nav-link">
                    KIDS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/beauty" className="nav-link">
                    BEAUTY
                  </Link>
                </li>
              </ul>
              <form className="d-flex ms-auto search-container position-relative">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                  className="form-control me-2 pl-4 search-input"
                  type="search"
                  placeholder="Search for products, brands and more"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  style={{ width: "400px" }}
                />

                
                
              </form>
              <div className="icons-container">
                {!localStorage.getItem("currentUser") && (
                  <Link to="/profile">
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{
                        color: "white",
                        marginLeft: "10px",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                )}

                <Link to="/wishlist">
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{
                      color: "white",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  />
                </Link>

                <Link to="/cart">
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    style={{
                      color: "white",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  />
                </Link>
                {localStorage.getItem("currentUser") && (
                  <button
                    className="mx-3 btn btn-light"
                    onClick={() => {
                      localStorage.removeItem("currentUser");
                      setTimeout(() => {
                        navigate("/profile");
                      }, 2000);
                    }}>
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
