// Hero.jsx
import React from "react";
import "./Hero.css"; // ✅ MAKE SURE THIS IMPORT IS AT THE TOP
import { HashLink } from "react-router-hash-link";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>
          Powering a <span>Sustainable Future</span>
        </h1>
        <p>
          Revolutionizing mobility with clean, efficient, and accessible energy solutions for everyone.
        </p>

        <HashLink smooth to="/#about" className="button-primary">
          Discover More <FaArrowDown />
        </HashLink>
      </div>
    </section>
  );
}
