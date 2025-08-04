import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt, FaEye, FaStar, FaLeaf, FaShieldAlt, FaThumbsUp } from "react-icons/fa";
import "./About.css";

export default function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="about-section">
      <div className="aurora-bg">
    <div className="aurora-shape shape-1"></div>
    <div className="aurora-shape shape-2"></div>
    <div className="aurora-shape shape-3"></div>
</div>
      <div className="about-wrapper">

        <div className="intro-container">
          <div className="intro-badge">About Urja Mobility</div>
          <h1>Powering India's EV Revolution, One Battery at a Time.</h1>
          <p className="intro-text">
            We're breaking down the barriers to electric mobility. Our innovative battery leasing model makes EVs affordable, accessible, and hassle-free for everyone.
          </p>
        </div>

        <div className="features-grid">
          <div className="info-card featured-card">
            <div className="icon-wrapper"><FaStar /></div>
            <div className="card-text-content">
              <h3>Why Lease with Us?</h3>
              <p>Eliminate high upfront costs, enjoy flexible plans, and forget about maintenance. We handle the risks so you can enjoy the ride.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-wrapper"><FaBolt /></div>
            <h3>What We Do</h3>
            <p>Affordable battery leasing and a robust swapping network to keep you moving.</p>
          </div>
          <div className="info-card">
            <div className="icon-wrapper"><FaLeaf /></div>
            <h3>Drive Green</h3>
            <p>A smart financial decision and a powerful choice for the planet.</p>
            <button className="cta-button" onClick={() => navigate("/carbon-savings")}>
              Calculate Your Savings
            </button>
          </div>
        </div>

        <div className="mission-vision-container">
          <div className="mission-vision-card">
            <div className="icon-wrapper secondary"><FaEye /></div>
            <h3>Our Vision</h3>
            <p>To become India’s most trusted electric mobility enabler, creating a future where sustainable transport is accessible to all.</p>
          </div>
          <div className="mission-vision-card">
            <div className="icon-wrapper secondary"><FaShieldAlt /></div>
            <h3>Our Mission</h3>
            <p>To accelerate the transition to sustainable mobility by removing financial and infrastructural barriers through innovative, people-first energy solutions.</p>
          </div>
        </div>
        
        <div className="comparison-container">
          <h2>Leasing vs. Buying: The Smart Choice</h2>
          <div className="comparison-grid">
            <div className="comparison-card featured">
              <h4>Lease with Urja</h4>
              <ul>
                <li><FaThumbsUp className="check-icon"/> Minimal Upfront Cost</li>
                <li><FaThumbsUp className="check-icon"/> Zero Maintenance Liability</li>
                <li><FaThumbsUp className="check-icon"/> Always the Latest Tech</li>
                <li><FaThumbsUp className="check-icon"/> Flexible Upgrade Options</li>
                <li><FaThumbsUp className="check-icon"/> Full Insurance & Support</li>
              </ul>
            </div>
            <div className="comparison-card">
              <h4>Buy Outright</h4>
              <ul>
                <li>High Initial Investment</li>
                <li>Full Maintenance Responsibility</li>
                <li>Technology Becomes Outdated</li>
                <li>Resale Value Depreciates</li>
                <li>No Included Support</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}