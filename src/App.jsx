// src/App.jsx
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Policies from "./components/Policies";
import InformationSecurity from "./components/InformationSecurity";
import MediaPolicy from "./components/MediaPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ReturnRefund from "./components/ReturnRefund";
import RiskManagement from "./components/RiskManagement";
import SocialMedia from "./components/SocialMedia";
import StaffLoan from "./components/StaffLoan";
import TermsConditions from "./components/TermsConditions";
import FranchiseForm from "./components/FranchiseForm";

// You can keep this if you still want to auto-scroll on BACK/FORWARD navigation
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/policies/information-security" element={<InformationSecurity />} />
        <Route path="/policies/media" element={<MediaPolicy />} />
        <Route path="/policies/privacy" element={<PrivacyPolicy />} />
        <Route path="/policies/return-refund" element={<ReturnRefund />} />
        <Route path="/policies/risk-management" element={<RiskManagement />} />
        <Route path="/policies/social-media" element={<SocialMedia />} />
        <Route path="/policies/staff-loan" element={<StaffLoan />} />
        <Route path="/policies/terms-conditions" element={<TermsConditions />} />
        <Route path="/franchise-inquiry" element={<FranchiseForm />} />
      </Routes>

      <Footer />
    </Router>
  );
}
