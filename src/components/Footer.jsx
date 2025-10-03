import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Row, Col, Typography, Space, Button, Divider } from "antd";
import { motion } from "framer-motion";
import "./Footer.css";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaArrowUp,
  FaBolt,
  FaLeaf,
  FaCog,
  FaNewspaper,
  FaBriefcase,
  FaShieldAlt,
  FaHandshake,
  FaRocket,
  FaGlobe,
  FaHeart,
  FaStar,
  FaLightbulb,
  FaGem,
  FaAtom,
  FaFire,
  FaSnowflake,
  FaMagic
} from "react-icons/fa";
import logo from "../assets/logo.png";

const { Title, Text, Paragraph } = Typography;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Random floating icons for footer background
  const footerFloatingIcons = [
    { icon: FaBolt, x: 5, y: 10, delay: 0, duration: 4, color: "#ff8c00", size: 16 },
    { icon: FaLeaf, x: 95, y: 15, delay: 1, duration: 5, color: "#00ff88", size: 14 },
    { icon: FaRocket, x: 10, y: 80, delay: 2, duration: 3.5, color: "#ff4444", size: 18 },
    { icon: FaStar, x: 90, y: 85, delay: 0.5, duration: 4.5, color: "#ffff00", size: 12 },
    { icon: FaGem, x: 20, y: 30, delay: 1.5, duration: 3, color: "#ff00ff", size: 15 },
    { icon: FaAtom, x: 80, y: 40, delay: 2.5, duration: 4.2, color: "#00ffff", size: 17 },
    { icon: FaFire, x: 15, y: 60, delay: 0.8, duration: 3.8, color: "#ff6600", size: 13 },
    { icon: FaSnowflake, x: 85, y: 70, delay: 1.8, duration: 5.2, color: "#88ddff", size: 16 },
    { icon: FaHeart, x: 30, y: 20, delay: 0.3, duration: 4.8, color: "#ff0066", size: 14 },
    { icon: FaMagic, x: 70, y: 90, delay: 2.2, duration: 3.2, color: "#9966ff", size: 15 },
    { icon: FaGlobe, x: 50, y: 50, delay: 1.2, duration: 6, color: "#0066aa", size: 19 },
    { icon: FaLightbulb, x: 40, y: 75, delay: 0.7, duration: 4.5, color: "#ffaa00", size: 13 }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.footer 
      className="footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Footer Floating Icons Background */}
      <div className="footer-floating-icons">
        {footerFloatingIcons.map((iconData, index) => {
          const IconComponent = iconData.icon;
          return (
            <motion.div
              key={index}
              className="footer-floating-icon"
              style={{
                position: 'absolute',
                left: `${iconData.x}%`,
                top: `${iconData.y}%`,
                color: iconData.color,
                fontSize: `${iconData.size}px`,
                zIndex: 1
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, 8, -8, 0],
                rotate: [0, 180, 360],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: iconData.duration,
                delay: iconData.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <IconComponent />
            </motion.div>
          );
        })}
      </div>

      {/* Footer Particle Effects */}
      <div className="footer-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="footer-particle"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '3px',
              height: '3px',
              background: i % 2 === 0 ? '#ff8c00' : '#ffffff',
              borderRadius: '50%',
              zIndex: 1
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 4,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Row gutter={[32, 32]} justify="space-between">
          
          {/* Company Info Section */}
          <Col xs={24} sm={24} md={8} lg={8}>
            <motion.div variants={itemVariants} className="footer-section">
              <motion.img 
                src={logo} 
                alt="Urja Mobility" 
                className="footer-logo"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <Title level={4} className="footer-title">
                <motion.span
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ display: 'inline-block', marginRight: '8px' }}
                >
                  <FaBolt />
                </motion.span>
                Urja Mobility
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  style={{ display: 'inline-block', marginLeft: '8px' }}
                >
                  <FaLeaf />
                </motion.span>
              </Title>
              <Paragraph className="footer-tagline">
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ display: 'inline-block', marginRight: '8px' }}
                >
                  <FaRocket />
                </motion.span>
                Empowering Sustainable Mobility for a Greener Tomorrow. 
                Leading the revolution in electric vehicle solutions.
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ display: 'inline-block', marginLeft: '8px' }}
                >
                  <FaGlobe />
                </motion.span>
              </Paragraph>
              
              <Space direction="vertical" size="small" className="contact-info">
                <Space>
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="contact-icon"
                  >
                    <FaMapMarkerAlt />
                  </motion.span>
                  <Text>Bangalore, Karnataka, India</Text>
                </Space>
                <Space>
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    className="contact-icon"
                  >
                    <FaEnvelope />
                  </motion.span>
                  <a href="mailto:info@urjamobility.in">info@urjamobility.in</a>
                </Space>
                <Space>
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="contact-icon"
                  >
                    <FaPhone />
                  </motion.span>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </Space>
              </Space>
            </motion.div>
          </Col>

          {/* Quick Links Section */}
          <Col xs={24} sm={12} md={5} lg={5}>
            <motion.div variants={itemVariants} className="footer-section">
              <Title level={4} className="footer-section-title">Quick Links</Title>
              <ul className="footer-links">
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link to="/">Home</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <HashLink smooth to="/#products">Products</HashLink>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <HashLink smooth to="/#about">About Us</HashLink>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <HashLink smooth to="/#contact">Contact</HashLink>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link to="/careers">Careers</Link>
                </motion.li>
              </ul>
            </motion.div>
          </Col>

          {/* Services Section */}
          <Col xs={24} sm={12} md={5} lg={5}>
            <motion.div variants={itemVariants} className="footer-section">
              <Title level={4} className="footer-section-title">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ display: 'inline-block', marginRight: '8px' }}
                >
                  <FaCog />
                </motion.span>
                Services
              </Title>
              <ul className="footer-links">
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ display: 'inline-block', marginRight: '8px' }}
                  >
                    <FaBolt />
                  </motion.span>
                  <Link to="/leasing">Battery Leasing</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <motion.span
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    style={{ display: 'inline-block', marginRight: '8px' }}
                  >
                    <FaLightbulb />
                  </motion.span>
                  <Link to="/franchise">Franchise</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <motion.span
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    style={{ display: 'inline-block', marginRight: '8px' }}
                  >
                    <FaBriefcase />
                  </motion.span>
                  <HashLink smooth to="/#media">Media</HashLink>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    style={{ display: 'inline-block', marginRight: '8px' }}
                  >
                    <FaShieldAlt />
                  </motion.span>
                  <Link to="/policies">Policies</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
                    style={{ display: 'inline-block', marginRight: '8px' }}
                  >
                    <FaHandshake />
                  </motion.span>
                  <Link to="/policies/privacy">Privacy Policy</Link>
                </motion.li>
              </ul>
            </motion.div>
          </Col>

          {/* Social & Newsletter Section */}
          <Col xs={24} sm={24} md={6} lg={6}>
            <motion.div variants={itemVariants} className="footer-section">
              <Title level={4} className="footer-section-title">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ display: 'inline-block', marginRight: '8px' }}
                >
                  <FaHeart />
                </motion.span>
                Connect With Us
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ display: 'inline-block', marginLeft: '8px' }}
                >
                  <FaStar />
                </motion.span>
              </Title>
              <Paragraph>Follow us for the latest updates and news</Paragraph>
              
              <Space size="large" className="footer-social">
                <motion.a 
                  href="https://facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="social-link facebook"
                >
                  <FaFacebookF />
                </motion.a>
                <motion.a 
                  href="https://instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="social-link instagram"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="social-link linkedin"
                >
                  <FaLinkedinIn />
                </motion.a>
              </Space>

              <motion.div 
                className="scroll-to-top"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  type="primary" 
                  shape="circle" 
                  icon={<FaArrowUp />}
                  onClick={scrollToTop}
                  className="scroll-top-btn"
                />
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </motion.div>

      <Divider className="footer-divider" />
      
      <motion.div 
        className="footer-bottom"
        variants={itemVariants}
      >
        <Row justify="space-between" align="middle">
          <Col xs={24} sm={12}>
            <Text className="copyright">© 2025 Urja Mobility. All rights reserved.</Text>
          </Col>
          <Col xs={24} sm={12} className="footer-bottom-right">
            <Space split={<span className="separator">|</span>}>
              <Link to="/policies/terms-conditions">Terms & Conditions</Link>
              <Link to="/policies/privacy">Privacy Policy</Link>
              <Link to="/policies/refund">Refund Policy</Link>
            </Space>
          </Col>
        </Row>
      </motion.div>
    </motion.footer>
  );
}