// src/components/Leasing.jsx
import React, { useState } from "react";
import "./Leasing.css";

const pricing = {
  "L2 Battery": { monthly: 1500 },
  "L3 Battery": { monthly: 2500 },
  "L5 Battery": { monthly: 3500 },
};

export default function Leasing() {
  const [selectedProduct, setSelectedProduct] = useState("L2 Battery");
  const [months, setMonths] = useState(1);

  const handleProductChange = (e) => setSelectedProduct(e.target.value);
  const handleMonthChange = (e) => setMonths(e.target.value);

  const estimatedPrice = pricing[selectedProduct]?.monthly * months;

  return (
    <div className="leasing-page">
      <h1>Leasing with <span className="highlight">Urja Mobility</span></h1>
      <p className="description">
        Leasing is a smart, flexible, and affordable way to access high-performance EV batteries 
        without the burden of upfront costs. At Urja Mobility, we offer tailored leasing plans 
        so that you can drive clean, save money, and stay powered up — your way.
      </p>

      <div className="how-it-works">
        <h2>Why Lease?</h2>
        <ul>
          <li>✅ No large upfront investment</li>
          <li>✅ Regular upgrades and replacements</li>
          <li>✅ Hassle-free maintenance</li>
          <li>✅ Ideal for individuals, fleet owners & franchisees</li>
        </ul>

        <h2>How It Works</h2>
        <ol>
          <li>1. Choose your battery (L2, L3, or L5)</li>
          <li>2. Select your leasing duration</li>
          <li>3. Submit your request — we handle the rest</li>
        </ol>
      </div>

      <div className="plans-section">
        <div className="plan-card">
          <h3>L2 Battery</h3>
          <ul>
            <li>Monthly: ₹1,500</li>
            <li>3 Months: ₹4,200</li>
            <li>6 Months: ₹8,000</li>
            <li>12 Months: ₹15,000</li>
          </ul>
        </div>

        <div className="plan-card">
          <h3>L3 Battery</h3>
          <ul>
            <li>Monthly: ₹2,500</li>
            <li>3 Months: ₹7,000</li>
            <li>6 Months: ₹13,500</li>
            <li>12 Months: ₹25,000</li>
          </ul>
        </div>

        <div className="plan-card">
          <h3>L5 Battery</h3>
          <ul>
            <li>Monthly: ₹3,500</li>
            <li>3 Months: ₹9,800</li>
            <li>6 Months: ₹19,000</li>
            <li>12 Months: ₹36,000</li>
          </ul>
        </div>
      </div>

      <div className="calculator">
        <h2>Leasing Calculator</h2>
        <label>
          Choose Product:
          <select value={selectedProduct} onChange={handleProductChange}>
            <option value="L2 Battery">L2 Battery</option>
            <option value="L3 Battery">L3 Battery</option>
            <option value="L5 Battery">L5 Battery</option>
          </select>
        </label>

        <label>
          Number of Months:
          <input
            type="number"
            min="1"
            value={months}
            onChange={handleMonthChange}
          />
        </label>

        <p className="result">
          Estimated Lease Price: ₹{estimatedPrice?.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
