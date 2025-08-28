import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Franchise.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Franchise() {
  const [openSection, setOpenSection] = useState(0); // First section open by default
  const navigate = useNavigate();

  // ✅ Play Store Badge - inline so self-contained
  const PlayStoreBadge = () => (
    <svg
      width="135"
      height="40"
      viewBox="0 0 135 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="135" height="40" rx="6" fill="white" />
      <path d="M13.81 20L5.33 11.52V28.48L13.81 20Z" fill="#99A93A" />
      <path
        d="M16.48 17.33L13.81 20L16.48 22.67L26.33 12.82L16.48 17.33Z"
        fill="#FBC02D"
      />
      <path
        d="M26.33 27.18L16.48 22.67L13.81 20L5.33 28.48C6.55 29.7 8.32 30.13 10.05 29.4L26.33 27.18Z"
        fill="#EA4335"
      />
      <path
        d="M26.33 12.82L10.05 10.6C8.32 9.87 6.55 10.3 5.33 11.52L13.81 20L26.33 12.82Z"
        fill="#4285F4"
      />
      <g fill="black">
        <text
          x="37"
          y="19"
          fontFamily="Arial, sans-serif"
          fontSize="6"
          fontWeight="bold"
        >
          GET IT ON
        </text>
        <text
          x="37"
          y="30"
          fontFamily="Arial, sans-serif"
          fontSize="11"
          fontWeight="bold"
        >
          Google Play
        </text>
      </g>
    </svg>
  );

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
        "Established Brand Recognition: Leverage our trusted reputation and loyal customer base.",
        "Comprehensive Training: Receive in-depth training on operations, marketing, and customer service.",
        "Ongoing Support: Benefit from continuous assistance in marketing, operations, and management.",
        "Proven Business Model: Operate with confidence using our tested systems and processes.",
        "Marketing Assistance: Access national and local marketing campaigns to drive business growth.",
        "Exclusive Territory: Enjoy the advantage of a protected area for your franchise."
      ]
    },
    {
      title: "Ideal Franchisee Profile",
      content: [
        "Entrepreneurial and motivated to succeed",
        "Committed to delivering excellent customer service",
        "Willing to follow a proven system",
        "Financially prepared to invest in a growing business"
      ]
    },
    {
      title: "Steps to Becoming a Franchisee",
      content: [
        "Submit Your Application: Fill out our online franchise inquiry form.",
        "Initial Discussion: Speak with our franchise development team to learn more.",
        "Review & Approval: We’ll review your application and qualifications.",
        "Franchise Agreement: Sign the agreement and begin your journey.",
        "Training & Launch: Complete our training program and open your franchise."
      ]
    }
  ];

  return (
    <section className="franchise-section" id="franchise">
      <div className="aurora-bg">
        <div className="aurora-shape shape-1"></div>
        <div className="aurora-shape shape-2"></div>
      </div>

      <div className="franchise-wrapper">
        <div className="franchise-intro">
          <h2>Franchise With Urja Mobility</h2>
          <p>
            Join a thriving brand and unlock your entrepreneurial potential. By franchising with us, you gain access to a proven business model, comprehensive support, and a recognized name in the industry. We are committed to your success and provide the tools and resources you need to grow.
          </p>
          <button className="cta-btn" onClick={handlePhoneCall}>
            📞 Contact Franchise Team
          </button>
        </div>

        <div className="franchise-accordion">
          {sections.map((section, index) => (
            <div className="accordion-item" key={index}>
              <h3
                className="accordion-header"
                onClick={() => toggleSection(index)}
              >
                {section.title}
                <span>
                  {openSection === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </h3>
              <div
                className={`accordion-content ${
                  openSection === index ? "open" : ""
                }`}
              >
                <div className="accordion-content-inner">
                  <ul>
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Final CTA with Play Store below button */}
        <div className="franchise-cta">
          <h3>Ready to Start?</h3>
          <p>
            Take the first step toward business ownership. Fill out our inquiry
            form or reach out to our franchise team — let’s grow together!
          </p>
          <button className="cta-btn" onClick={handleInquiry}>
            🚀 Start Your Franchise Inquiry
          </button>

          {/* Play Store Badge BELOW button */}
          <div className="franchise-cta-badge">
            <a
              className="playstore-link"
              href="https://play.google.com/store/apps/details?id=com.urjaMobilityPartners"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayStoreBadge />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
