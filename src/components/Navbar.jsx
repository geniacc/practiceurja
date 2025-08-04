import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa"; // ✅ updated import

import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current + 10) setHidden(true);
      else if (currentY < lastScrollY.current - 10) setHidden(false);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${hidden ? " hidden" : ""}`}>
      <div className="navbar-left">
        <HashLink smooth to="/">
          <img src={logo} alt="Urja Mobility" className="navbar-logo" />
        </HashLink>
      </div>

      <nav className="navbar-center">
        <HashLink smooth to="/">Home</HashLink>
        <HashLink smooth to="/#products">Products</HashLink>
        <HashLink smooth to="/#contact">Contact</HashLink>
        <Link to="/careers">Careers</Link>
        <Link to="/leasing">Leasing</Link>
        <Link to="/policies">Policies</Link>
        <Link to="/association">Association</Link> {/* ✅ New Link */}
      </nav>

     <div className="navbar-right">
  <div className="social-contact-wrapper">
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
    </div>

    <a href="tel:+919876543210" className="navbar-contact">
      <FaPhoneAlt className="phone-icon" /> +91 98765 43210
    </a>
  </div>
</div>

      
    </header>
  );
}
