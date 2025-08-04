import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ✅ Import HashLink
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  // ✅ The complex location and isHome logic is no longer needed.

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <img src={logo} alt="Urja Mobility" className="footer-logo" />
          <p className="footer-tagline">Empowering Sustainable Mobility.</p>
        </div>

        <div className="footer-center">
          <h4>Quick Links</h4>
          {/* ✅ Simplified list using HashLink for smooth scrolling */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><HashLink smooth to="/#products">Products</HashLink></li>
            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
            <li><Link to="/policies/privacy">Privacy Policy</Link></li>
            <li><Link to="/policies">Policies</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Contact Us</h4>
          <p><a href="mailto:info@urjamobility.in">info@urjamobility.in</a></p>
          <p><a href="tel:+919876543210">+91 98765 43210</a></p>
          <div className="footer-social">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Urja Mobility. All rights reserved.</p>
      </div>
    </footer>
  );
}