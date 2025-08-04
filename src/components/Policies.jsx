import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaBullhorn, FaLock, FaUndo, FaExclamationTriangle, FaHashtag, FaFileContract, FaMoneyBillWave } from "react-icons/fa";
import "./Policies.css";

export default function Policies() {
  return (
    <div className="policies-page">
      <div className="policies-container">
        <h1>Our Company Policies</h1>
        <p>Select a policy to view detailed information.</p>

        <div className="policies-grid">
          <Link to="/policies/information-security" className="policy-card">
            <FaShieldAlt className="policy-icon" /> Information Security Policy
          </Link>

          <Link to="/policies/media" className="policy-card">
            <FaBullhorn className="policy-icon" /> Media Policy
          </Link>

          <Link to="/policies/privacy" className="policy-card">
            <FaLock className="policy-icon" /> Privacy Policy
          </Link>

          {/* ✅ SEPARATED THE POLICIES */}
          <Link to="/policies/return" className="policy-card">
            <FaUndo className="policy-icon" /> Return Policy
          </Link>
          
          <Link to="/policies/refund" className="policy-card">
            <FaMoneyBillWave className="policy-icon" /> Refund Policy
          </Link>

          <Link to="/policies/risk-management" className="policy-card">
            <FaExclamationTriangle className="policy-icon" /> Risk Management Policy
          </Link>

          <Link to="/policies/social-media" className="policy-card">
            <FaHashtag className="policy-icon" /> Social Media Policy
          </Link>

          {/* ✅ REMOVED THE STAFF LOAN POLICY */}

          <Link to="/policies/terms-conditions" className="policy-card">
            <FaFileContract className="policy-icon" /> Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}