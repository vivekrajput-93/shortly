import React, { useState } from "react";
import "../CSS/Nav.css";
import menuOpen from "../images/icon-menu.svg";
import menuClose from "../images/icon-close-menu.svg";
import logo from "../images/logo.svg";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    
    <div className="header">
      <div className="container">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className={click ? "active" : "nav-menu"}>
          <li>
            <a to="/" onClick={handleClick}>
              Features
            </a>
          </li>
          <li>
            <a to="/about" onClick={handleClick}>
              Pricing
            </a>
          </li>
          <li>
            <a to="/coin" onClick={handleClick}>
              Resources
            </a>
          </li>
        </ul>

        <ul className="sign">
          <li>
            <button className="btn-one">Login</button>
          </li>
          <li>
            <button className="btn-two">Sign Up</button>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <img src={menuClose} alt="close" />
          ) : (
            <img src={menuOpen} alt="open" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
