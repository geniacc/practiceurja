import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Hero.css";
import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="hero-content animate-fade-in">
        <h1>Powering a <span>Sustainable Future</span></h1>
        <p>Revolutionizing mobility with clean, efficient energy solutions.</p>
        <HashLink smooth to="/#about" className="hero-btn">
          Learn More
        </HashLink>
      </div>
    </section>
  );
}
