import React from "react";
import "./MetalPricesBar.css"; // ✅ MAKE SURE THIS IMPORT IS AT THE TOP

const metals = [
  { name: "Iron", price: 110.5 },
  { name: "Copper", price: 8500.75 },
  { name: "Lithium", price: 67350.0 },
  { name: "Cobalt", price: 31950.0 },
  { name: "Nickel", price: 18500.0 },
];

const MetalPricesBar = () => {
  // ✅ The 'metals' array is duplicated to create a seamless, infinite scroll effect.
  const extendedMetals = [...metals, ...metals];

  return (
    <section className="metal-prices-section">
      <div className="ticker-wrapper">
        <div className="ticker">
          {extendedMetals.map((metal, index) => (
            <div key={index} className="ticker-item">
              <strong>{metal.name}</strong>: <span className="price">₹{(metal.price * 83).toLocaleString("en-IN")}</span>
              <span className="unit"> per ton</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetalPricesBar;