import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

// Assuming images are in src/assets/
import batteryImg from "../assets/battery-product.jpg";
import l2Img from "../assets/l2.jpg";
import l3Img from "../assets/l3.jpg";
import l5Img from "../assets/l5.jpg";

const batteryOptions = [
  {
    name: "L2 Battery",
    img: l2Img,
    specs: "45–50 Ah | Lightweight, compact design",
    desc: "Ideal for lightweight two-wheelers, offering a balance of capacity and portability.",
    details: "The L2 battery offers optimal performance for scooters and e-bikes. Compact and lightweight, it’s ideal for urban mobility with minimal maintenance and smart monitoring.",
    brochure: "/brochures/l2-brochure.pdf",
  },
  {
    name: "L3 Battery",
    img: l3Img,
    specs: "100 Ah | High power, robust build",
    desc: "Suited for mid-range vehicles requiring higher power output.",
    details: "The L3 battery delivers extended range and power, suitable for larger scooters or light commercial EVs. Features IoT diagnostics and rugged casing.",
    brochure: "/brochures/l3-brochure.pdf",
  },
  {
    name: "L5 Battery",
    img: l5Img,
    specs: "200 Ah | Maximum performance",
    desc: "Built for heavy-duty applications, delivering top-tier performance.",
    details: "The L5 is designed for power-hungry EVs like loaders and cargo e-rickshaws. It has the longest lifespan, robust thermal management, and real-time insights.",
    brochure: "/brochures/l5-brochure.pdf",
  },
];

export default function Products() {
  const [activeModal, setActiveModal] = useState(null);
  const openModal = (index) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  return (
    <section className="products-section" id="products">
       <div className="aurora-bg">
        <div className="aurora-shape shape-1"></div>
        <div className="aurora-shape shape-2"></div>
        <div className="aurora-shape shape-3"></div>
      </div>
      <div className="products-wrapper">
        <h2>Our Product</h2>
        <img src={batteryImg} alt="Battery" className="battery-banner" />

        <div className="product-intro">
          <h2 className="product-title">Our Product</h2>
          <h3 className="intro-heading">Advanced Battery Solutions for Electric Vehicles</h3>
          <p className="intro-description">
            Experience the next generation of energy storage with our state-of-the-art batteries, engineered for performance,
            reliability, and smart connectivity. Designed to a range of electric vehicles, our batteries deliver exceptional value and peace of mind.
          </p>

          <h4 className="features-heading">Key Features</h4>
          <ul className="feature-list">
            <li><strong>Long Life Cycle:</strong> Up to 2000 charge cycles for extended usage and reliability.</li>
            <li><strong>Comprehensive Warranty:</strong> Enjoy a 3-year warranty for worry-free usage.</li>
            <li><strong>Certified Quality:</strong> AIS 156 quality standard certified and verified for maximum safety and compliance.</li>
            <li><strong>Low Service Cost:</strong> Designed for minimal maintenance and reduced total cost of usage.</li>
            <li><strong>Smart IoT Enabled:</strong> All batteries come with integrated IoT features for real-time monitoring, diagnostics, and enhanced user experience.</li>
          </ul>
        </div>

        <h2>Battery Options for Every Need</h2>

        <div className="products-container">
          {batteryOptions.map((battery, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={battery.img} alt={battery.name} />
                  <h3>{battery.name}</h3>
                  <p>{battery.specs}</p>
                </div>
                <div className="flip-card-back">
                  <h3>{battery.name}</h3>
                  <p>{battery.desc}</p>
                  <div className="button-group">
                    <button className="learn-more" onClick={() => openModal(index)}>Learn More</button>
                    <a
                      href={battery.brochure}
                      download
                      className="download-btn"
                    >
                      Download Brochure
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="leasing-cta">
          <h3>Interested in Leasing?</h3>
          <p>Explore our flexible leasing plans designed for every EV need.</p>
          <Link to="/leasing">
            <button className="leasing-button">Know More About Leasing</button>
          </Link>
        </div>
      </div>

      {activeModal !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{batteryOptions[activeModal].name}</h3>
            <p>{batteryOptions[activeModal].details}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}