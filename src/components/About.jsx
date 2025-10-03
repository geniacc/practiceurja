import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt, FaEye, FaStar, FaLeaf, FaShieldAlt, FaThumbsUp, FaRocket, FaGem, FaAtom, FaLightbulb, FaCog, FaWifi } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./About.css";

// Floating icons for About section
const aboutFloatingIcons = [
  { icon: FaBolt, x: 8, y: 12, delay: 0, duration: 5, color: '#ff8c00', size: 26 },
  { icon: FaRocket, x: 88, y: 18, delay: 0.8, duration: 6, color: '#ff0088', size: 30 },
  { icon: FaGem, x: 12, y: 75, delay: 1.6, duration: 4.5, color: '#8800ff', size: 24 },
  { icon: FaAtom, x: 92, y: 80, delay: 2.4, duration: 7, color: '#00ffff', size: 28 },
  { icon: FaLightbulb, x: 5, y: 50, delay: 3.2, duration: 5.5, color: '#ffaa00', size: 22 },
  { icon: FaCog, x: 95, y: 45, delay: 4, duration: 6.5, color: '#ff4400', size: 25 },
  { icon: FaWifi, x: 25, y: 8, delay: 4.8, duration: 4, color: '#0066ff', size: 20 },
  { icon: FaStar, x: 75, y: 90, delay: 5.6, duration: 5, color: '#ffff00', size: 18 },
  { icon: FaLeaf, x: 50, y: 5, delay: 6.4, duration: 8, color: '#88ff00', size: 32 },
  { icon: FaShieldAlt, x: 15, y: 85, delay: 7.2, duration: 6, color: '#0088ff', size: 27 }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.6
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    rotateX: -15
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 200,
      delay: 0.2
    }
  }
};

export default function About() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-50px" });
  
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-50px" });
  
  const comparisonRef = useRef(null);
  const comparisonInView = useInView(comparisonRef, { once: true, margin: "-50px" });

  return (
    <motion.section 
      id="about" 
      className="about-section"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* About Floating Icons Background */}
      <div className="about-floating-icons">
        {aboutFloatingIcons.map((iconData, index) => {
          const IconComponent = iconData.icon;
          return (
            <motion.div
              key={index}
              className="about-floating-icon"
              style={{
                position: 'absolute',
                left: `${iconData.x}%`,
                top: `${iconData.y}%`,
                color: iconData.color,
                fontSize: `${iconData.size}px`,
                zIndex: 1
              }}
              animate={{
                y: [0, -25, 0],
                x: [0, 12, -12, 0],
                rotate: [0, 180, 360],
                scale: [0.7, 1.4, 0.7],
                opacity: [0.2, 0.7, 0.2]
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

      {/* About Particle Effects */}
      <div className="about-particles">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="about-particle"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '3px',
              height: '3px',
              background: i % 4 === 0 ? '#ff8c00' : i % 4 === 1 ? '#00ff88' : i % 4 === 2 ? '#0088ff' : '#ff0088',
              borderRadius: '50%',
              zIndex: 1
            }}
            animate={{
              y: [0, -70, 0],
              opacity: [0, 0.9, 0],
              scale: [0, 2.5, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              delay: Math.random() * 6,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      <div className="aurora-bg">
        <motion.div 
          className="aurora-shape shape-1"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="aurora-shape shape-2"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="aurora-shape shape-3"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="about-wrapper">
        <motion.div 
          className="intro-container"
          variants={itemVariants}
        >
          <motion.div 
            className="intro-badge"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Urja Mobility
          </motion.div>
          <motion.h1 variants={itemVariants}>
            Powering India's EV Revolution, One Battery at a Time.
          </motion.h1>
          <motion.p 
            className="intro-text"
            variants={itemVariants}
          >
            We're breaking down the barriers to electric mobility. Our innovative battery leasing model makes EVs affordable, accessible, and hassle-free for everyone.
          </motion.p>
        </motion.div>

        <motion.div 
          className="features-grid"
          ref={featuresRef}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="info-card featured-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: "0 20px 40px rgba(245, 124, 0, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="icon-wrapper"
              variants={iconVariants}
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <FaStar />
            </motion.div>
            <div className="card-text-content">
              <motion.h3 variants={itemVariants}>Why Lease with Us?</motion.h3>
              <motion.p variants={itemVariants}>
                Eliminate high upfront costs, enjoy flexible plans, and forget about maintenance. We handle the risks so you can enjoy the ride.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="info-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: "0 15px 30px rgba(245, 124, 0, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="icon-wrapper"
              variants={iconVariants}
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <FaBolt />
            </motion.div>
            <motion.h3 variants={itemVariants}>What We Do</motion.h3>
            <motion.p variants={itemVariants}>
              Affordable battery leasing and a robust swapping network to keep you moving.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="info-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: "0 15px 30px rgba(245, 124, 0, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="icon-wrapper"
              variants={iconVariants}
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <FaLeaf />
            </motion.div>
            <motion.h3 variants={itemVariants}>Drive Green</motion.h3>
            <motion.p variants={itemVariants}>
              A smart financial decision and a powerful choice for the planet.
            </motion.p>
            <motion.button 
              className="cta-button" 
              onClick={() => navigate("/carbon-savings")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Calculate Your Savings
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mission-vision-container"
          ref={missionRef}
          initial="hidden"
          animate={missionInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="mission-vision-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              boxShadow: "0 15px 30px rgba(245, 124, 0, 0.2)"
            }}
          >
            <motion.div 
              className="icon-wrapper secondary"
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              <FaEye />
            </motion.div>
            <motion.h3 variants={itemVariants}>Our Vision</motion.h3>
            <motion.p variants={itemVariants}>
              To become India's most trusted electric mobility enabler, creating a future where sustainable transport is accessible to all.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="mission-vision-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              boxShadow: "0 15px 30px rgba(245, 124, 0, 0.2)"
            }}
          >
            <motion.div 
              className="icon-wrapper secondary"
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              <FaShieldAlt />
            </motion.div>
            <motion.h3 variants={itemVariants}>Our Mission</motion.h3>
            <motion.p variants={itemVariants}>
              To accelerate the transition to sustainable mobility by removing financial and infrastructural barriers through innovative, people-first energy solutions.
            </motion.p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="comparison-container"
          ref={comparisonRef}
          initial="hidden"
          animate={comparisonInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>
            Leasing vs. Buying: The Smart Choice
          </motion.h2>
          <motion.div 
            className="comparison-grid"
            variants={containerVariants}
          >
            <motion.div 
              className="comparison-card featured"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(245, 124, 0, 0.3)"
              }}
            >
              <motion.h4 variants={itemVariants}>Lease with Urja</motion.h4>
              <motion.ul variants={containerVariants}>
                <motion.li variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaThumbsUp className="check-icon"/>
                  </motion.div>
                  Minimal Upfront Cost
                </motion.li>
                <motion.li variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaThumbsUp className="check-icon"/>
                  </motion.div>
                  Zero Maintenance Liability
                </motion.li>
                <motion.li variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaThumbsUp className="check-icon"/>
                  </motion.div>
                  Always the Latest Tech
                </motion.li>
                <motion.li variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaThumbsUp className="check-icon"/>
                  </motion.div>
                  Flexible Upgrade Options
                </motion.li>
                <motion.li variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaThumbsUp className="check-icon"/>
                  </motion.div>
                  Full Insurance & Support
                </motion.li>
              </motion.ul>
            </motion.div>
            
            <motion.div 
              className="comparison-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.h4 variants={itemVariants}>Buy Outright</motion.h4>
              <motion.ul variants={containerVariants}>
                <motion.li variants={itemVariants}>High Initial Investment</motion.li>
                <motion.li variants={itemVariants}>Full Maintenance Responsibility</motion.li>
                <motion.li variants={itemVariants}>Technology Becomes Outdated</motion.li>
                <motion.li variants={itemVariants}>Resale Value Depreciates</motion.li>
                <motion.li variants={itemVariants}>No Included Support</motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}