import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaBullhorn, FaLock, FaUndo, FaExclamationTriangle, FaHashtag, FaUserTie, FaFileContract } from "react-icons/fa";
import "./Policies.css";

export default function Policies() {
  return (
    <div className="policies-container">
      <h1>Our Company Policies</h1>
      <p>Select a policy to view detailed information:</p>

      <div className="policies-grid">
        <Link to="/policies/information-security" className="policy-btn">
          <FaShieldAlt className="policy-icon" /> Information Security Policy
        </Link>

        <Link to="/policies/media" className="policy-btn">
          <FaBullhorn className="policy-icon" /> Media Policy
        </Link>

        <Link to="/policies/privacy" className="policy-btn">
          <FaLock className="policy-icon" /> Privacy Policy
        </Link>

        <Link to="/policies/return-refund" className="policy-btn">
          <FaUndo className="policy-icon" /> Return & Refund Policy
        </Link>

        <Link to="/policies/risk-management" className="policy-btn">
          <FaExclamationTriangle className="policy-icon" /> Risk Management Policy
        </Link>

        <Link to="/policies/social-media" className="policy-btn">
          <FaHashtag className="policy-icon" /> Social Media Policy
        </Link>

        <Link to="/policies/staff-loan" className="policy-btn">
          <FaUserTie className="policy-icon" /> Staff Loan & Salary Advance
        </Link>

        <Link to="/policies/terms-conditions" className="policy-btn">
          <FaFileContract className="policy-icon" /> Terms & Conditions
        </Link>
      </div>
    </div>
  );
}
