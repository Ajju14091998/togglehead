// import React from 'react';
// import { FaSearch, FaChevronDown } from 'react-icons/fa';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">LOGO</div>
//       <nav className="nav-links">
//         <a href="#">
//           Qualifications <FaChevronDown />
//         </a>
//         <a href="#">
//           Organizations <FaChevronDown/>
//         </a>
//         <a href="#">
//           Research & Analysis <FaChevronDown/>
//         </a>
//         <a href="#">
//           Lorem Ipsum <FaChevronDown/>
//         </a>
//         <a href="#">
//           Lorem Ipsum <FaChevronDown/>
//         </a>
//         <div className="search-icon">
//           <FaSearch />
//         </div>
//         <button className="enroll-button">Enrolment</button>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">LOGO</div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* Close button inside nav menu */}
          <div className="close-icon" onClick={closeMenu}>
            <FaTimes />
          </div>

          <a href="#" onClick={closeMenu}>
            Qualifications <FaChevronDown />
          </a>
          <a href="#" onClick={closeMenu}>
            Organizations <FaChevronDown />
          </a>
          <a href="#" onClick={closeMenu}>
            Research & Analysis <FaChevronDown />
          </a>
          <a href="#" onClick={closeMenu}>
            Lorem Ipsum <FaChevronDown />
          </a>
          <a href="#" onClick={closeMenu}>
            Lorem Ipsum <FaChevronDown />
          </a>

          {/* Search icon now properly inside menu */}
          <div className="search-icon" onClick={closeMenu}>
            <FaSearch />
          </div>

          <button className="enroll-button" onClick={closeMenu}>
            Enrolment
          </button>
        </nav>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
