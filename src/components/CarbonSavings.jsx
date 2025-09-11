import React, { useState, useEffect } from "react";
import "./CarbonSavings.css";
import { FaCalculator } from "react-icons/fa";

export default function CarbonSavings() {
  const [distance, setDistance] = useState("");
  const [savings, setSavings] = useState(null);
  const [totalSaved, setTotalSaved] = useState(12345.67);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSaved((prev) => prev + 0.013);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const calculateSavings = () => {
    const emissionFactor = 0.12;
    const result = distance ? (distance * emissionFactor).toFixed(2) : 0;
    setSavings(result);
  };

  return (
    <div className="carbon-savings-page">
      <div className="aurora-bg">
        <div className="aurora-shape shape-1"></div>
        <div className="aurora-shape shape-2"></div>
        <div className="aurora-shape shape-3"></div>
      </div>

      <div className="carbon-savings-wrapper">
        <div className="page-header">
          <h2>Carbon Savings & Footprint</h2>
          <p>
            Learn how electric mobility reduces environmental impact and how much CO₂ you can help save.
          </p>
        </div>

        <div className="live-counter">
          🌱 <strong>Urja Mobility has saved</strong>{" "}
          <span className="highlight">{totalSaved.toFixed(2)} kg</span> of CO₂ emissions so far!
        </div>

        <div className="calculator-box">
          <h3>Calculate Your Personal CO₂ Savings</h3>
          <div className="calculator-controls">
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Enter daily kilometers driven"
            />
            <button className="apply-btn" onClick={calculateSavings}>
              <FaCalculator /> Calculate
            </button>
          </div>
          {savings !== null && (
            <p className="savings-result">
              ✅ By driving {distance} km in an EV, you would avoid approximately{" "}
              <strong>{savings} kg</strong> of CO₂ emissions!
            </p>
          )}
        </div>

        <div className="info-section">
          <h3>🌍 What is a Carbon Footprint?</h3>
          <p>
            Your carbon footprint is the total greenhouse gas emissions caused by your daily activities, including travel, food, and energy usage. It is measured in kilograms or tons of CO₂-equivalent gases.
          </p>

          <h4>⚡ Carbon Emissions from Common Activities:</h4>
          <ul>
            <li>🚗 1 km by petrol car ≈ 0.12 kg CO₂</li>
            <li>✈️ 1 hour of flight ≈ 90–150 kg CO₂</li>
            <li>🍔 1 beef burger ≈ 3–5 kg CO₂</li>
            <li>🔌 Charging a smartphone for a year ≈ 6 kg CO₂</li>
          </ul>

          <h4>💡 How EVs Help Reduce Emissions:</h4>
          <ul>
            <li>EVs produce zero tailpipe emissions.</li>
            <li>EVs use electricity, which can be generated from renewables.</li>
            <li>Battery recycling reduces long-term environmental impact.</li>
            <li>Switching to EVs reduces urban air pollution and noise.</li>
          </ul>

          <h4>✅ How You Can Further Reduce Your Footprint:</h4>
          <ul>
            <li>Drive electric or use public transport.</li>
            <li>Switch to solar or green electricity providers.</li>
            <li>Eat more plant-based meals and waste less food.</li>
            <li>Use energy-efficient appliances at home.</li>
            <li>Support businesses with sustainable practices.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
