import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Leasing.css";

// ✅ Exported so other files (like ProductDetail) can import it
export const leasingData = {
  "L2 Battery": {
    12: { loan: 42000, emi: 6499.0, annualROI: 133.16 },
    18: { loan: 42000, emi: 4499.0, annualROI: 96.677 },
    24: { loan: 42000, emi: 3799.0, annualROI: 89.0771 },
  },
  "L3 Battery": {
    12: { loan: 65000, emi: 6499.0, annualROI: 35.043 },
    18: { loan: 65000, emi: 4499.0, annualROI: 29.09 },
    24: { loan: 65000, emi: 3799.0, annualROI: 34.862 },
  },
  "L5 Battery": {
    12: { loan: 70000, emi: 8984.11, annualROI: 50.0 },
    18: { loan: 85000, emi: 6447.24, annualROI: 45.0 },
    24: { loan: 100000, emi: 5845.93, annualROI: 40.0 },
  },
};

const tenureOptions = [12, 18, 24];

// Number animation helper stays the same
const AnimatedNumber = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const prevValueRef = useRef(0);

  useEffect(() => {
    const animationDuration = 500;
    let startTime;
    const startValue = prevValueRef.current;
    const endValue = value;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / animationDuration, 1);
      const animatedValue = startValue + (endValue - startValue) * progress;
      setCurrentValue(animatedValue);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        prevValueRef.current = endValue;
      }
    };
    requestAnimationFrame(animate);

    return () => (prevValueRef.current = value);
  }, [value]);

  return (
    <span>
      {currentValue.toLocaleString("en-IN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}
    </span>
  );
};

export default function Leasing() {
  const [selectedProduct, setSelectedProduct] = useState("L2 Battery");
  const [selectedTenure, setSelectedTenure] = useState(24);
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState([]);

  const planDetails =
    leasingData[selectedProduct]?.[selectedTenure] || {
      loan: 0,
      emi: 0,
      annualROI: 0,
    };

  useEffect(() => {
    if (!planDetails || planDetails.loan === 0) {
      setSchedule([]);
      return;
    }
    const newSchedule = [];
    let balance = planDetails.loan;
    const monthlyRate = planDetails.annualROI / 100 / 12;
    for (let i = 1; i <= selectedTenure; i++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = planDetails.emi - interestPayment;
      balance -= principalPayment;
      newSchedule.push({
        paymentNumber: i,
        installment: planDetails.emi,
        balance: balance > 0 ? balance : 0,
      });
    }
    setSchedule(newSchedule);
  }, [selectedProduct, selectedTenure, planDetails]);

  const handleProductChange = (e) => setSelectedProduct(e.target.value);
  const handleTenureSliderChange = (e) => {
    const index = parseInt(e.target.value, 10);
    setSelectedTenure(tenureOptions[index]);
  };

  return (
    <div className="leasing-page interactive-leasing">
      <div className="leasing-intro-text">
        <h1>Leasing Calculator</h1>
        <p className="description">
          An interactive tool to explore our flexible and affordable leasing
          plans. Select a product and adjust the tenure to see your fixed
          monthly payment and schedule.
        </p>
      </div>

      <div className="leasing-ui-wrapper">
        <div className="leasing-calculator professional-card">
          <h2>Plan Details</h2>
          <div className="calculator-box">
            <div className="input-group">
              <label>1. Select Battery Type</label>
              <select value={selectedProduct} onChange={handleProductChange}>
                {Object.keys(leasingData).map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>2. Select Tenure</label>
              <input
                type="range"
                min="0"
                max={tenureOptions.length - 1}
                step="1"
                value={tenureOptions.indexOf(selectedTenure)}
                onChange={handleTenureSliderChange}
                className="tenure-slider"
              />
              <div className="slider-labels">
                {tenureOptions.map((t) => (
                  <span key={t}>{t}m</span>
                ))}
              </div>
            </div>

            <div className="output-grid">
              <div className="output-item">
                <span>Loan Amount</span>
                <div className="result-value">
                  ₹ <AnimatedNumber value={planDetails.loan} />
                </div>
              </div>
              <div className="output-item">
                <span>Monthly EMI</span>
                <div className="result-value primary">
                  ₹ <AnimatedNumber value={planDetails.emi} />
                </div>
              </div>
            </div>
            <button
              className="cta-button"
              onClick={() => navigate("/#contact")}
            >
              Contact Us for a Quote
            </button>
          </div>
        </div>

        {schedule.length > 0 && (
          <div className="amortization-section professional-card">
            <h2>Payment Schedule</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Payment</th>
                    <th>Installment</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row) => (
                    <tr key={row.paymentNumber}>
                      <td>{row.paymentNumber}</td>
                      <td>
                        ₹
                        {row.installment.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td>
                        ₹
                        {row.balance.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
