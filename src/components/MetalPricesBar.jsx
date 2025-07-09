import React from "react";
import "./MetalPricesBar.css";

const metals = [
  { name: "Iron", price: 110.5 },
  { name: "Copper", price: 8500.75 },
  { name: "Lithium", price: 67350.0 },
  { name: "Cobalt", price: 31950.0 },
  { name: "Nickel", price: 18500.0 },
];

const MetalPricesBar = () => {
  return (
    <section className="metal-prices-section">
      <div className="ticker">
        {metals.map((metal, index) => (
          <div key={index} className="ticker-item">
            <strong>{metal.name}</strong>: ₹{(metal.price * 83).toLocaleString("en-IN")}
            <span className="unit"> per ton</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetalPricesBar;
