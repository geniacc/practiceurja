import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, Space, Button, Drawer } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaPhoneAlt, 
  FaBars,
  FaTimes,
  FaFacebookF,
  FaLinkedinIn,
  FaHome,
  FaInfoCircle,
  FaCog,
  FaNewspaper,
  FaEnvelope,
  FaBriefcase,
  FaBolt,
  FaPhone,
  FaGlobe,
  FaRocket
} from "react-icons/fa";

import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      
      // Handle navbar hide/show
      if (currentY > lastScrollY.current + 10) setHidden(true);
      else if (currentY < lastScrollY.current - 10) setHidden(false);
      
      // Handle background change on scroll
      setScrolled(currentY > 50);
      
      lastScrollY.current = currentY;
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))",
      transition: { duration: 0.3 }
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      y: -2,
      rotate: 360,
      boxShadow: "0 5px 15px rgba(0, 255, 255, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  const navLinkVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      color: "#00ffff",
      textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
      transition: { duration: 0.2 }
    }
  };

  const navItems = [
    { to: "/", label: "Home", smooth: true, icon: FaHome },
    { to: "/#products", label: "Products", smooth: true, icon: FaBolt },
    { to: "/#contact", label: "Contact", smooth: true, icon: FaEnvelope },
    { to: "/careers", label: "Careers", smooth: false, icon: FaBriefcase },
    { to: "/leasing", label: "Leasing", smooth: false, icon: FaRocket },
    { to: "/policies", label: "Policies", smooth: false, icon: FaCog },
    { to: "/association", label: "Association", smooth: false, icon: FaGlobe }
  ];

  return (
    <>
      <motion.header 
        className={`navbar ${hidden ? "hidden" : ""} ${scrolled ? "scrolled" : ""}`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <motion.div className="navbar-left" variants={itemVariants}>
          <HashLink smooth to="/">
            <motion.img 
              src={logo} 
              alt="Urja Mobility" 
              className="navbar-logo"
              variants={logoVariants}
              whileHover="hover"
            />
          </HashLink>
        </motion.div>

        <motion.nav className="navbar-center" variants={itemVariants}>
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.to}
                variants={itemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="nav-item"
              >
                {item.smooth ? (
                  <motion.div variants={navLinkVariants}>
                    <HashLink smooth to={item.to} className="nav-link">
                      <motion.span 
                        className="nav-icon"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <IconComponent />
                      </motion.span>
                      {item.label}
                    </HashLink>
                  </motion.div>
                ) : (
                  <motion.div variants={navLinkVariants}>
                    <Link to={item.to} className="nav-link">
                      <motion.span 
                        className="nav-icon"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <IconComponent />
                      </motion.span>
                      {item.label}
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.nav>

        <motion.div className="navbar-right" variants={itemVariants}>
          <div className="social-contact-wrapper">
            <Space className="social-icons" size="middle">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="social-link facebook"
                variants={socialVariants}
                whileHover="hover"
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="social-link instagram"
                variants={socialVariants}
                whileHover="hover"
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="social-link linkedin"
                variants={socialVariants}
                whileHover="hover"
              >
                <FaLinkedin />
              </motion.a>
            </Space>

            <motion.a 
              href="tel:+919876543210" 
              className="navbar-contact"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="phone-icon"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FaPhone />
              </motion.span>
              +91 98765 43210
            </motion.a>
          </div>

          <motion.div 
            className="mobile-menu-toggle"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              type="text"
              icon={<FaBars />}
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-menu-btn"
            />
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <div className="mobile-drawer-header">
            <img src={logo} alt="Urja Mobility" className="mobile-logo" />
            <span>Urja Mobility</span>
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        className="mobile-nav-drawer"
        width={280}
      >
        <div className="mobile-nav-items">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.to}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="mobile-nav-item"
                  >
                    {item.smooth ? (
                      <HashLink 
                        smooth 
                        to={item.to} 
                        className="mobile-nav-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <motion.span 
                          className="mobile-nav-icon"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        >
                          <IconComponent />
                        </motion.span>
                        {item.label}
                      </HashLink>
                    ) : (
                      <Link 
                        to={item.to} 
                        className="mobile-nav-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <motion.span 
                          className="mobile-nav-icon"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        >
                          <IconComponent />
                        </motion.span>
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
          
          <div className="mobile-contact-section">
            <Space className="mobile-social-icons" size="large">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </Space>
            
            <a href="tel:+919876543210" className="mobile-contact-link">
              <FaPhoneAlt /> +91 98765 43210
            </a>
          </div>
        </div>
      </Drawer>
    </>
  );
}
