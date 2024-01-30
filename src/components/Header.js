// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logoImage from "../images/logo.png";
// import "../styles/Header.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faHeart,
//   faShoppingBag,
//   faSearch,
// } from "@fortawesome/free-solid-svg-icons";

// function Header() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//     // Add your search logic here, for example, navigating to search results
//     // console.log("Search query:", e.target.value);
//   };

//   return (
//     <div className="header">
//       <div className="content">
//         <nav className="navbar navbar-expand-lg navbar-dark">
//           <div className="container-fluid d-flex justify-content-around">
//             <Link className="navbar-brand nav-link active" to="/">
//               <img src={logoImage} alt="Logo" className="logo" />
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link to="/men" className="nav-link">
//                     MEN
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/women" className="nav-link">
//                     WOMEN
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/kids" className="nav-link">
//                     KIDS
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/beauty" className="nav-link">
//                     BEAUTY
//                   </Link>
//                 </li>
//               </ul>

//               <form className="d-flex ms-auto search-container position-relative">
//                 <FontAwesomeIcon icon={faSearch} className="search-icon" />
//                 <input
//                   className="form-control me-2 pl-4 search-input"
//                   type="search"
//                   placeholder="Search for products, brands and more"
//                   aria-label="Search"
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                   style={{ width: "400px" }}
//                 />
//               </form>
//               <div className="icons-container">
//                 <Link to="/profile">
//                   <FontAwesomeIcon
//                     icon={faUser}
//                     style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
//                   />
//                 </Link>

//                 <Link to="/wishlist">
//                   <FontAwesomeIcon
//                     icon={faHeart}
//                     style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
//                   />
//                 </Link>

//                 <Link to="/cart">
//                   <FontAwesomeIcon
//                     icon={faShoppingBag}
//                     style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Header;





// Import necessary dependencies and components
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faShoppingBag,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import logoImage from "../images/logo.png";
import "../styles/Header.css"; // Import your Header component styles

// Define the Header functional component
function Header() {
  // State to manage the search query and search results
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate()


  // Function to handle changes in the search input
  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    try {
      // Make an API request with the search query
      const response = await axios.get(
        `https://vintage-backend.onrender.com/api/products/search-item?product=${query}`
      );

      // Update the search results in the state
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // Simple useEffect to address the 'useEffect is defined but never used' warning
  useEffect(() => {
    // You can add any side effect logic here if needed
  }, []);

  // Return the JSX for rendering the Header component
  return (
    <div className="header">
      <div className="content">
        {/* Navbar structure with logo, navigation links, and search input */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid d-flex justify-content-around">
            {/* Logo */}
            <Link className="navbar-brand nav-link active" to="/">
              <img src={logoImage} alt="Logo" className="logo" />
            </Link>

            {/* Navbar Toggler for responsive design */}
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

            {/* Navbar links */}
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

              {/* Search form */}
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

                {/* Conditional rendering of search results */}
                {searchResults.length > 0 && (
                  <div className="search-results-container">
                    {searchResults.map((result) => (
                      <Link
                        key={result.id}
                        to={`/product/${result.id}`}
                        className="search-result"
                      >
                        {result.name}
                      </Link>
                    ))}
                  </div>
                )}
              </form>

              {/* Icons container */}
              <div className="icons-container">
              {!localStorage.getItem("currentUser") &&<Link to="/profile">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      color: "white",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  />
                </Link>}

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
                {localStorage.getItem("currentUser") &&<button className="mx-3 btn btn-danger"  onClick={()=>{
                  localStorage.removeItem("currentUser")
                  setTimeout(()=>{
                    navigate("/profile")

                  },2000)
                }}>Logout</button>}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

// Export the Header component
export default Header;
