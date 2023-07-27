import React from "react";
import logo from "../images/logo.svg";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav >
          <ul className="navbar">
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Resources</a></li>
          </ul>
        </nav>

        <ul className="sign">
          <li><button className="btn-one">Login</button></li>
          <li><button className="btn-two">Sign Up</button></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
