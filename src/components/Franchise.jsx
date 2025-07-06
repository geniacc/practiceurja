import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Franchise.css";
import franchiseImage from "../assets/franchise.jpg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Franchise() {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+919999999999";
  };

  const handleInquiry = () => {
    navigate("/franchise-inquiry");
  };

  const sections = [
    {
      title: "Why Partner With Us?",
      content: [
        "✅ Established Brand Recognition: Leverage our trusted reputation and loyal customer base.",
        "✅ Comprehensive Training: Receive in-depth training on operations, marketing, and customer service.",
        "✅ Ongoing Support: Benefit from continuous assistance in marketing, operations, and management.",
        "✅ Proven Business Model: Operate with confidence using our tested systems and processes.",
        "✅ Marketing Assistance: Access national and local marketing campaigns to drive business growth.",
        "✅ Exclusive Territory: Enjoy the advantage of a protected area for your franchise."
      ]
    },
    {
      title: "Ideal Franchisee Profile",
      content: [
        "✅ Entrepreneurial and motivated to succeed",
        "✅ Committed to delivering excellent customer service",
        "✅ Willing to follow a proven system",
        "✅ Financially prepared to invest in a growing business"
      ]
    },
    {
      title: "Steps to Becoming a Franchisee",
      content: [
        "📋 Submit Your Application: Fill out our online franchise inquiry form.",
        "📞 Initial Discussion: Speak with our franchise development team to learn more.",
        "✅ Review & Approval: We’ll review your application and qualifications.",
        "🖊️ Franchise Agreement: Sign the agreement and begin your journey.",
        "🚀 Training & Launch: Complete our training program and open your franchise."
      ]
    }
  ];

  return (
    <section className="franchise-section" id="franchise">
      <div className="franchise-grid">
        <div className="franchise-text">
          <h2>Franchise With Urja Mobility</h2>
          <p>
            Join a thriving brand and unlock your entrepreneurial potential. By franchising with us, you gain access to a proven business model, comprehensive support, and a recognized name in the industry. We are committed to your success and provide the tools and resources you need to grow.
          </p>
          <button className="franchise-btn" onClick={handlePhoneCall}>
            📞 Contact Franchise Team
          </button>
        </div>

        <div className="franchise-media">
          <img src={franchiseImage} alt="Franchise with Urja Mobility" />
        </div>
      </div>

      <div className="franchise-accordion">
        {sections.map((section, index) => (
          <div className="accordion-item" key={index}>
            <h3 onClick={() => toggleSection(index)}>
              {section.title}
              <span>
                {openSection === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </h3>
            <div className={`accordion-content ${openSection === index ? "open" : ""}`}>
              <ul>
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="franchise-cta">
        <h3>Ready to Start?</h3>
        <p>
          Take the first step toward business ownership. Fill out our inquiry form
          or reach out to our franchise team — let’s grow together!
        </p>
        <button className="franchise-btn" onClick={handleInquiry}>
          🚀 Start Your Franchise Inquiry
        </button>
      </div>
    </section>
  );
}
