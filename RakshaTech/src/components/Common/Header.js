import React, { useState, useEffect, useRef, useContext } from "react";
import "./Header.css";
import "./DropdownOptions.css";
import DDitem from "./DDitem";
import { CgEditUnmask } from "react-icons/cg";
import { FaSlack } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";

import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
        <header className="header">
          {/** bgcol, pad, zind */}
          <div className="header-container">
            {/** flex, spac-btn, al-it-cent, mar 0 auto */}
            <a href="/" className="logoLink">
              <div className="logo">
                <FaSpinner className="rotate-infinite" />
                &nbsp;MyApp
              </div>
            </a>
            <div
              className={`nav-menu ${isMenuOpen ? "mobileOpen" : ""}`}
              ref={menuRef}
            >
              <ul className="nave_ListItem">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/RDashboard">Dashboard</a>
                </li>
                <li>
                  <a href="/Rchart">Chart</a>
                </li>

                <li>
                  {" "}
                  <DDitem />
                </li>
              </ul>
            </div>
            <div className="hamburger">
              {isMenuOpen ? (
                <>
                  <span
                    className="closeHamburger"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    X
                  </span>
                </>
              ) : (
                <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              )}
            </div>
          </div>
        </header>
    </div>
  );
};

export default Header;
