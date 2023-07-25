import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div>
          <h1>Shortly</h1>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <div className="btn-group">
            <button>Login</button>
            <button>Sign up</button>
          </div>
          <div className="ham"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
