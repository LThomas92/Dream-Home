import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <ul className="footer__content">
          <Link className="footer-text-link" to="/homes">
            <li className="footer__content__text">Homes</li>
          </Link>
          <Link className="footer-text-link" to="/about-us">
            <li className="footer__content__text">About Us</li>
          </Link>
          <Link className="footer-text-link" to="#">
            <li className="footer__content__text">Privacy Policy</li>
          </Link>
        </ul>
        <div className="footer__icon">
          <Link className="nav-links" to="/">
            <img
              src={process.env.PUBLIC_URL + "/img/logo.png"}
              className="footer__icon__image"
              alt="Logo"
            />
          </Link>
        </div>
      </footer>
      <div className="footer-sm-icons-box">
        <ul className="footer-sm-icons-box__list">
          <li>
            <i className="fa fa-instagram sm-links" />
          </li>
          <li>
            <i className="fa fa-twitter sm-links" />
          </li>
          <li>
            <i className="fa fa-facebook sm-links" />
          </li>
        </ul>
        <p>&copy;2019 Copyright Designed by Lawrence Thomas</p>
      </div>
    </div>
  );
};

export default Footer;
