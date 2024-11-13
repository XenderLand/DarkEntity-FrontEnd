import React from "react";
import "../CSS/Home.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="box-container">
        <div className="box">
          <h3>Quick Links</h3>
          <Link to="index.html">Home</Link>
          <Link to="shop.html">Shop </Link>
          <Link to="contact.html">Contact</Link>
          <Link to="about.html">About</Link>
        </div>
        <div className="box">
          <h3>Follow Us</h3>
          <Link to="www.facebook.com">Facebook</Link>
          <Link to="www.x.com">Twitter</Link>
          <Link to="www.whatsapp.com">Whatsapp</Link>
          <Link to="www.instagram.com">Instagram</Link>
        </div>
        <div className="credit">
          &copy; 2024 by <span>DarkEntity. </span> All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
