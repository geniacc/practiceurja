// src/components/About.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import "./About.css";

export default function About() {
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <section id="about" className="about-section">
      <h2>About Us</h2>
      <p className="intro-text">
        Urja Mobility is transforming electric mobility by making it more affordable and accessible. We specialize in providing battery leasing solutions for 2-wheeler and 3-wheeler electric vehicles.
        Batteries account for nearly 50% of the total cost of an electric vehicle. By choosing Urja Mobility, customers avoid the high upfront investment required to purchase a battery. We offer a flexible leasing model with affordable monthly EMIs, so you can enjoy the benefits of electric mobility without the burden of heavy capital expenditure.
      </p>

      <div className="about-content">
        <div className="about-box">
          <h3>What We Do</h3>
          <ul>
            <li>Offer electric vehicle leasing for individuals and businesses.</li>
            <li>Provide battery swapping and charging infrastructure.</li>
            <li>Enable smart, affordable mobility solutions across urban and rural areas.</li>
            <li>Promote clean energy adoption through accessible EV solutions.</li>
            <li>Encourage carbon footprint reduction through clean, efficient electric mobility.</li>
          </ul>

          {/* ✅ Use navigate instead of window.location.href */}
          <button
            className="carbon-btn"
            onClick={() => navigate("/carbon-savings")}
          >
            Know more about Carbon Saving
          </button>
        </div>

        <div className="about-box">
          <h3>Why Lease with Urja Mobility?</h3>
          <ul>
            <li><strong>Lower Upfront Costs:</strong> Save on the biggest expense in your EV purchase by leasing the battery.</li>
            <li><strong>Flexible Plans:</strong> Choose a lease option that fits your budget and usage needs.</li>
            <li><strong>Reliable Quality:</strong> All our batteries meet strict quality standards and are backed by comprehensive support.</li>
            <li><strong>Risk Management:</strong> We handle insurance and risk assessment, giving you peace of mind.</li>
            <li><strong>Clear Process:</strong> Our straightforward documentation and support make leasing easy for individuals and businesses.</li>
          </ul>
        </div>

        <div className="about-box comparison-box">
          <h3>Leasing vs. Financing</h3>
          <div className="comparison-grid">
            <div className="comparison-card">
              <h4>Leasing</h4>
              <ul>
                <li>Lower upfront costs and predictable payments.</li>
                <li>No ownership; use the vehicle for a set term.</li>
                <li>Flexibility to upgrade to new models.</li>
              </ul>
            </div>
            <div className="comparison-card">
              <h4>Financing</h4>
              <ul>
                <li>Pay towards full ownership of the vehicle.</li>
                <li>Higher initial investment, long-term asset value.</li>
                <li>Ideal for those wanting permanent ownership.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
