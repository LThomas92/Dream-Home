import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Navigation = () => {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            alt="Lawrence Thomas Logo"
            className="logo"
          />
        </Link>
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <ul className="nav-items">
              <li>
                <Link to="/homes">Homes</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <GoogleAuth />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navigation;
