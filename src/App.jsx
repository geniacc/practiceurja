import { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Careers from "./components/Careers.jsx";
import Leasing from "./components/Leasing.jsx";
import CarbonSavings from "./components/CarbonSavings.jsx";
import Policies from "./components/Policies.jsx";
import InformationSecurity from "./components/InformationSecurity.jsx";
import MediaPolicy from "./components/MediaPolicy.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
// ✅ REMOVED ReturnRefund import
// import ReturnRefund from "./components/ReturnRefund.jsx";
// ✅ ADDED two new imports
import ReturnPolicy from "./components/ReturnPolicy.jsx";
import RefundPolicy from "./components/RefundPolicy.jsx";
import RiskManagement from "./components/RiskManagement.jsx";
import SocialMedia from "./components/SocialMedia.jsx";
// ✅ REMOVED StaffLoan import
// import StaffLoan from "./components/StaffLoan.jsx";
import TermsConditions from "./components/TermsConditions.jsx";
import FranchiseForm from "./components/FranchiseForm.jsx";
import Association from "./components/Association.jsx";
import CarCursor from "./components/CarCursor";
import AnimatedCanvasBackground from "./components/AnimatedCanvasBackground";

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
      <AnimatedCanvasBackground />
      <Navbar />
      
      <div style={{ height: "55px" }} />

      <ScrollToHash />

       <CarCursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/leasing" element={<Leasing />} />
        <Route path="/carbon-savings" element={<CarbonSavings />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/policies/information-security" element={<InformationSecurity />} />
        <Route path="/policies/media" element={<MediaPolicy />} />
        <Route path="/policies/privacy" element={<PrivacyPolicy />} />
        
        {/* ✅ REMOVED old return-refund route */}
        {/* <Route path="/policies/return-refund" element={<ReturnRefund />} /> */}
        {/* ✅ ADDED two new routes */}
        <Route path="/policies/return" element={<ReturnPolicy />} />
        <Route path="/policies/refund" element={<RefundPolicy />} />
        
        <Route path="/policies/risk-management" element={<RiskManagement />} />
        <Route path="/policies/social-media" element={<SocialMedia />} />
        
        {/* ✅ REMOVED old staff-loan route */}
        {/* <Route path="/policies/staff-loan" element={<StaffLoan />} /> */}
        
        <Route path="/policies/terms-conditions" element={<TermsConditions />} />
        <Route path="/franchise-inquiry" element={<FranchiseForm />} />
        <Route path="/association" element={<Association />} />
      </Routes>

      <Footer />
    </Router>
  );
}