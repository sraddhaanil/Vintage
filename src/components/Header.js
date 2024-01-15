import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);

    // Add your search logic here, for example, navigating to search results
    // console.log("Search query:", e.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid d-flex justify-content-around">
          <Link className="navbar-brand" to="/">
            Vintage
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
                <Link className="nav-link active" aria-current="page" to="/men">
                  MEN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/women">
                  WOMEN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kids">
                  KIDS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/beauty">
                  BEAUTY
                </Link>
              </li>
            </ul>

            <form className="d-flex ms-auto position-relative">
              <input
                className="form-control me-2 pl-4"
                type="search"
                placeholder="Search for products, brands and more"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ width: "400px" }}
              />
            </form>

            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
            />

            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={faBagShopping}
              style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
