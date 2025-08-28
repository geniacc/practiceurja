import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

// Assuming images are in src/assets/
import batteryImg from "../assets/battery-product.jpg";
import l2Img from "../assets/l2.jpg";
import l3Img from "../assets/l3.jpg";
import l5Img from "../assets/l5.jpg";

// Product data has been simplified for public view.
export const batteryOptions = [
  {
    name: "L2 Battery",
    img: l2Img,
    specs: "51.2V | 100Ah | 5.12kWh",
    desc: "Compact, lightweight, and ideal for urban e-mobility—reliable power with modern safety and smart monitoring features.",
    details:
      "An optimal 5.12kWh power pack for urban e-mobility, built with safe LFP chemistry and a rugged IP67-rated enclosure for reliable performance.",
    brochure: "/brochures/l2-brochure.pdf",
    specifications: {
      "Total Capacity": "5.12 kWh",
      Chemistry: "LFP (LiFePO4)",
      "IP Rating": "IP67",
      Weight: "Approx. 52 kg",
      "Dimensions (L x W x H)": "452 x 322 x 288 mm",
      Application: "E-Scooters, E-Bikes",
    },
    features: [
      "High Power in a Compact Form Factor",
      "Lightweight & Durable Body",
      "CAN-Based Communication Enabled",
      "LFP Chemistry for Extended Life",
      "IP67 Dust & Water Protection",
      "Smart BMS Safety Protections",
      "Integrated SOC Display Option",
    ],
    warrantyInfo:
      "Supplied with a 2-year manufacturer warranty covering performance and defects.",
    faq: [
      {
        question: "What vehicles is the L2 Battery suited for?",
        answer:
          "The L2 is designed for small e-scooters and e-bikes where a balance of weight and power is important.",
      },
      {
        question: "Is the L2 battery waterproof?",
        answer: "Yes, its IP67 rating ensures high resistance to dust and water.",
      },
    ],
  },
  {
    name: "L3 Battery",
    img: l3Img,
    specs: "51.2V | 150Ah | 7.7kWh",
    desc: "High-capacity, robust battery for mid/high-range electric vehicles—designed for higher loads with CAN communication and industrial ruggedness.",
    details:
      "A high-capacity 7.7kWh battery for commercial EVs, featuring robust LFP cells and an industrial-grade IP67 enclosure to handle higher loads.",
    brochure: "/brochures/l3-brochure.pdf",
    specifications: {
      "Total Capacity": "7.7 kWh",
      Chemistry: "LFP (LiFePO4)",
      "IP Rating": "IP67",
      Weight: "Approx. 65 kg",
      "Dimensions (L x W x H)": "610 x 370 x 340 mm",
      Application: "E-Rickshaws, Commercial EVs",
    },
    features: [
      "High Capacity for Commercial Use",
      "Integrated CAN Bus Communication",
      "IP67 Rated Rugged Enclosure",
      "High-Current Power Capability",
      "Comprehensive BMS Protection",
      "Durable Powder-Coated Finish",
      "Multiple Mounting Points",
    ],
    warrantyInfo:
      "A 3-year comprehensive warranty is provided, covering manufacturing and electrical defects.",
    faq: [
      {
        question: "Is the L3 model suitable for three-wheelers?",
        answer:
          "Yes, the L3 is perfectly suited for e-rickshaws, small loaders, and other commercial EVs.",
      },
      {
        question: "Does it support fast charging?",
        answer: "Yes, it is designed to support fast charging to reduce vehicle downtime.",
      },
    ],
  },
  {
    name: "L5 Battery",
    img: l5Img,
    specs: "51.2V | 200Ah | 10.24kWh",
    desc: "Our flagship battery for loaders and heavy-duty e-rickshaws, built for maximum performance and reliability in severe usage.",
    details:
      "Our flagship 10.24kWh battery for heavy-duty applications, engineered with advanced safety features and a rugged IP67 design for maximum power.",
    brochure: "/brochures/l5-brochure.pdf",
    specifications: {
      "Total Capacity": "10.24 kWh",
      Chemistry: "LFP (LiFePO4)",
      "IP Rating": "IP67",
      Weight: "Approx. 100 kg",
      "Dimensions (L x W x H)": "614 x 507.5 x 275 mm",
      Application: "Cargo Loaders, Mini-Trucks",
    },
    features: [
      "Very High Energy Storage (10+ kWh)",
      "Designed for Heavy Load Applications",
      "Rugged IP67 MS Enclosure",
      "Integrated Fuse Protection",
      "Advanced CAN Diagnostics",
      "Emergency Pressure Vent",
      "Versatile Mounting Options",
    ],
    warrantyInfo:
      "Comes with a 3-year warranty covering all manufacturing defects and major electrical failures.",
    faq: [
      {
        question: "Is the L5 the best choice for cargo loaders?",
        answer:
          "Absolutely. It is designed for high-load cargo e-rickshaws, loaders, and mini-trucks that demand the highest energy storage.",
      },
      {
        question: "How is the L5 protected against faults?",
        answer:
          "It has a multi-layer safety system, including an advanced BMS, a rugged enclosure, and an integrated high-capacity fuse.",
      },
    ],
  },
];


// Helper to convert product name to URL-safe id string, e.g. "L2 Battery" -> "l2-battery"
const makeId = (name) => name.toLowerCase().replace(/\s+/g, "-");

export default function Products() {
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
          <h3 className="intro-heading">
            Advanced Battery Solutions for Electric Vehicles
          </h3>
          <p className="intro-description">
            Experience the next generation of energy storage with our
            state-of-the-art batteries, engineered for performance,
            reliability, and smart connectivity. Designed to a range of
            electric vehicles, our batteries deliver exceptional value and
            peace of mind.
          </p>

          <h4 className="features-heading">Key Features</h4>
          <ul className="feature-list">
            <li>
              <strong>Long Life Cycle:</strong> Up to 2000 charge cycles for
              extended usage and reliability.
            </li>
            <li>
              <strong>Comprehensive Warranty:</strong> Enjoy a 3-year warranty
              for worry-free usage.
            </li>
            <li>
              <strong>Certified Quality:</strong> AIS 156 quality standard
              certified and verified for maximum safety and compliance.
            </li>
            <li>
              <strong>Low Service Cost:</strong> Designed for minimal
              maintenance and reduced total cost of usage.
            </li>
            <li>
              <strong>Smart IoT Enabled:</strong> All batteries come with
              integrated IoT features for real-time monitoring, diagnostics,
              and enhanced user experience.
            </li>
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

                  <div className="flip-prompt">
                    <span className="flip-icon">↻</span>
                    Hover for Details
                  </div>
                </div>
                
                <div className="flip-card-back">
                  <h3>{battery.name}</h3>
                  <p>{battery.desc}</p>
                  <div className="button-group">
                    <Link to={`/products/${makeId(battery.name)}`}>
                      <button className="btn btn-primary">
                        See More <span className="btn-icon">→</span>
                      </button>
                    </Link>
                    <a
                      href={battery.brochure}
                      download
                      className="btn btn-secondary"
                      rel="noopener noreferrer"
                    >
                      Download <span className="btn-icon">↓</span>
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
    </section>
  );
}