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
//         <nav className="navbar navbar-expand-lg navbar-dark  ">
//           <div className="container-fluid d-flex justify-content-around">
//             <Link className="navbar-brand nav-link active" to="/">
//               <img src={logoImage} alt="Logo" className=" logo" />
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
//                   <Link className="nav-link" aria-current="page" to="/men">
//                     MEN
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/women">
//                     WOMEN
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/kids">
//                     KIDS
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/beauty">
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

//                 <Link to="/favorites">
//                   <FontAwesomeIcon
//                     icon={faHeart}
//                     style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
//                   />
//                 </Link>

//                 <Link to="/shopping-bag">
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
    // Add your search logic here
  };

  return (
    <div className="header">
      <div className="content">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid d-flex justify-content-around">
            <Link className="navbar-brand nav-link active" to="/">
              <img src={logoImage} alt="Logo" className=" logo" />
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
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/men">
                    MEN
                  </Link>
                  <ul className="submenu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/men/clothing">
                      Clothing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/men/accessories">
                      Accessories
                    </Link>
                  </li>
                </ul>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/women">
                  WOMEN
                </Link>
                <ul className="submenu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/women/clothing">
                      Clothing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/women/accessories">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </li>
              
                {/* Add similar dropdowns for other categories if needed */}
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
