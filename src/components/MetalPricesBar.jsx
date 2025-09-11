import React, { useState, useEffect } from "react";
import "./MetalPricesBar.css";

const initialMetals = [
  { name: "Gold", apiKey: "gold" },
  { name: "Silver", apiKey: "silver" },
  { name: "Platinum", apiKey: "platinum" },
  { name: "Palladium", apiKey: "palladium" },
  { name: "Copper", apiKey: "copper" },
  { name: "Nickel", apiKey: "nickel" },
];

const MetalPricesBar = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.metals.dev/v1/latest?api_key=HT5TW6MPYM1FCPTKXGRC676TKXGRC&currency=USD&unit=toz"
        );
        const data = await response.json();

        const newPrices = {};
        initialMetals.forEach((metal) => {
          if (data.metals && data.metals[metal.apiKey]) {
            newPrices[metal.name] = data.metals[metal.apiKey];
          }
        });
        setPrices(newPrices);
      } catch (error) {
        console.error("Error fetching metal prices:", error);
      }
    };

    fetchPrices();

    // Auto update prices every 5 minutes (300000 milliseconds)
    const interval = setInterval(fetchPrices, 300000);

    return () => clearInterval(interval);
  }, []);

  // Duplicate metals array for seamless scrolling effect
  const extendedMetals = [...initialMetals, ...initialMetals];

  // Conversion constants
  const perTonInTroyOunce = 32150.7; // 1 metric ton = 32150.7 troy ounces
  const usdToInr = 83; // USD to INR conversion rate

  return (
    <section className="metal-prices-section">
      <div className="ticker-wrapper">
        <div className="ticker">
          {extendedMetals.map((metal, index) => {
            const pricePerToz = prices[metal.name];
            const pricePerTonInInr = pricePerToz
              ? pricePerToz * perTonInTroyOunce * usdToInr
              : null;

            return (
              <div key={index} className="ticker-item">
                <strong>{metal.name}</strong>:{" "}
                <span className="price">
                  ₹
                  {pricePerTonInInr
                    ? pricePerTonInInr.toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                      })
                    : "..."}
                </span>
                <span className="unit"> per ton</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetalPricesBar;
