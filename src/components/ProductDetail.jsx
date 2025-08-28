import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { batteryOptions } from "./Products"; // Must contain features, specs, warrantyInfo, faq
import { leasingData } from "./Leasing";
import "./ProductDetail.css";

const makeId = (name) => name.toLowerCase().replace(/\s+/g, "-");

const SkeletonLoader = () => (
  <div className="product-grid">
    <div className="product-image-column">
      <div className="skeleton skeleton-image" />
    </div>
    <div className="product-info-column">
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text short" />
      <div className="skeleton skeleton-box" />
      <div className="skeleton skeleton-button" />
    </div>
  </div>
);

const AccordionItem = ({ id, title, isOpen, onToggle, children }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <button
        id={`accordion-header-${id}`}
        aria-controls={`accordion-panel-${id}`}
        aria-expanded={isOpen}
        className="accordion-toggle"
        onClick={onToggle}
        type="button"
      >
        {title}
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        className="accordion-content"
        ref={contentRef}
        style={{ maxHeight: height }}
      >
        {children}
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion" role="list">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          id={idx}
          title={item.title}
          isOpen={openIndex === idx}
          onToggle={() => toggleItem(idx)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

const FeatureBadge = ({ label }) => (
  <span className="feature-badge" aria-label={label} title={label}>
    {label}
  </span>
);

const ProductDetail = () => {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [selectedTenure, setSelectedTenure] = useState(null);

  const product = batteryOptions.find((bat) => makeId(bat.name) === productId);
  const plans = leasingData?.[product?.name] || {};
  const selectedPlan = plans[selectedTenure] || {};
  const availableTenures = Object.keys(plans);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (product) {
        setSelectedTenure(Object.keys(plans)[0] || null);
      }
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [productId, product, plans]);

  if (!product && !loading) {
    return (
      <div className="product-not-found" role="alert">
        <h2>Product not found</h2>
        <Link to="/#products" className="back-link">
          ← Go Back to Products
        </Link>
      </div>
    );
  }

  const accordionItems = [
    {
      title: "Features",
      content: product.features ? (
        <ul className="feature-list" aria-label="List of features">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      ) : (
        <p>No feature information available.</p>
      ),
    },
    {
      title: "Warranty Details",
      content: product.warrantyInfo ? (
        <p>{product.warrantyInfo}</p>
      ) : (
        <p>No warranty information available.</p>
      ),
    },
    {
      title: "Frequently Asked Questions",
      content:
        product.faq && product.faq.length ? (
          <dl className="faq-list">
            {product.faq.map(({ question, answer }, i) => (
              <React.Fragment key={i}>
                <dt>{question}</dt>
                <dd>{answer}</dd>
              </React.Fragment>
            ))}
          </dl>
        ) : (
          <p>No FAQs available.</p>
        ),
    },
  ];

  return (
    <div className="product-detail-container">
      <div className="back-link-container">
        <Link to="/#products" className="back-link">
          ← Back to Products
        </Link>
      </div>

      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          <div className="product-grid" role="main">
            <div className="product-image-column">
              <div className="image-card" tabIndex={-1} aria-label={`${product.name} image`}>
                <img src={product.img} alt={product.name} className="product-main-image" loading="lazy" />
              </div>
              <div className="feature-badges-container" aria-label="Key features">
                {product.features?.map((f, i) => (
                  <FeatureBadge key={i} label={f} />
                ))}
              </div>
            </div>

            <div className="product-info-column">
              <h1>{product.name}</h1>
              <p className="product-description">{product.details}</p>

              {product.specifications && (
                <section className="product-specifications" aria-label="Product specifications">
                  <h3>Specifications</h3>
                  <table>
                    <tbody>
                      {Object.entries(product.specifications).map(([label, value]) => (
                        <tr key={label}>
                          <th>{label}</th>
                          <td>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              )}

              {availableTenures.length > 0 && (
                <div className="tenure-section">
                  <h3>Choose Your Leasing Plan</h3>
                  <div className="tenure-selector" role="list">
                    {availableTenures.map((tenure) => (
                      <button
                        key={tenure}
                        className={`tenure-btn ${selectedTenure === tenure ? "active" : ""}`}
                        aria-pressed={selectedTenure === tenure}
                        onClick={() => setSelectedTenure(tenure)}
                      >
                        {tenure} months
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedPlan.emi && (
                <div className="price-display" aria-live="polite">
                  <div className="price-item">
                    <span className="price-label">Monthly EMI</span>
                    <span className="price-value">₹{selectedPlan.emi.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="price-item">
                    <span className="price-label">Loan Amount</span>
                    <span className="price-value">₹{selectedPlan.loan.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="price-item">
                    <span className="price-label">Annual ROI</span>
                    <span className="price-value">{selectedPlan.annualROI}%</span>
                  </div>
                </div>
              )}

              <div className="button-group">
                <a href={product.brochure} download className="download-btn" aria-label={`Download brochure for ${product.name}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Brochure
                </a>
              </div>
            </div>
          </div>

          <div className="product-extra-info">
            <Accordion items={accordionItems} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
