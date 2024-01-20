import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../images/logo.png";
import "../styles/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faShoppingBag,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Add your search logic here, for example, navigating to search results
    // console.log("Search query:", e.target.value);
  };

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
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMen"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    MEN
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMen">
                    <li className="dropdown-item">
                      <Link to="/men/clothing">Clothing</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/men/accessories">Accessories</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownWomen"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    WOMEN
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownWomen">
                    <li className="dropdown-item">
                      <Link to="/women/clothing">Clothing</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/women/accessories">Accessories</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownKids"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    KIDS
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownKids">
                    <li className="dropdown-item">
                      <Link to="/kids/clothing">Clothing</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kids/toys">Toys</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownBeauty"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    BEAUTY
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownBeauty">
                    <li className="dropdown-item">
                      <Link to="/beauty/skincare">Skincare</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/beauty/makeup">Makeup</Link>
                    </li>
                  </ul>
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
                <Link to="/profile">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
                  />
                </Link>

                <Link to="/favorites">
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
                  />
                </Link>

                <Link to="/shopping-bag">
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

