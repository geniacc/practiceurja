// Hero.jsx
import React, { useEffect, useState } from "react";
import "./Hero.css";
import { HashLink } from "react-router-hash-link";
import { 
  FaBolt, 
  FaLeaf, 
  FaChargingStation, 
  FaArrowDown,
  FaPlay,
  FaRocket,
  FaStar,
  FaGem,
  FaAtom,
  FaFire,
  FaSnowflake,
  FaHeart,
  FaMagic,
  FaSun,
  FaMoon,
  FaCloud,
  FaWind,
  FaWater,
  FaTree,
  FaGlobe
} from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.8
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 100]);

  // Floating icons data with random properties
  const floatingIcons = [
    { icon: FaBolt, x: 10, y: 20, delay: 0, duration: 3, color: "#ff8c00" },
    { icon: FaLeaf, x: 85, y: 15, delay: 1, duration: 4, color: "#00ff88" },
    { icon: FaRocket, x: 15, y: 70, delay: 2, duration: 3.5, color: "#ff4444" },
    { icon: FaStar, x: 80, y: 75, delay: 0.5, duration: 2.5, color: "#ffff00" },
    { icon: FaGem, x: 25, y: 40, delay: 1.5, duration: 4.5, color: "#ff00ff" },
    { icon: FaAtom, x: 70, y: 30, delay: 2.5, duration: 3, color: "#00ffff" },
    { icon: FaFire, x: 5, y: 50, delay: 0.8, duration: 2.8, color: "#ff6600" },
    { icon: FaSnowflake, x: 90, y: 45, delay: 1.8, duration: 4, color: "#88ddff" },
    { icon: FaHeart, x: 35, y: 80, delay: 0.3, duration: 3.2, color: "#ff0066" },
    { icon: FaMagic, x: 65, y: 10, delay: 2.2, duration: 3.8, color: "#9966ff" },
    { icon: FaSun, x: 45, y: 25, delay: 1.2, duration: 5, color: "#ffaa00" },
    { icon: FaMoon, x: 55, y: 65, delay: 0.7, duration: 4.2, color: "#aaccff" },
    { icon: FaCloud, x: 20, y: 10, delay: 1.7, duration: 3.5, color: "#cccccc" },
    { icon: FaWind, x: 75, y: 60, delay: 0.2, duration: 2.7, color: "#66ccff" },
    { icon: FaWater, x: 40, y: 85, delay: 2.8, duration: 3.3, color: "#0088ff" },
    { icon: FaTree, x: 60, y: 40, delay: 1.4, duration: 4.8, color: "#44aa44" },
    { icon: FaGlobe, x: 30, y: 60, delay: 0.9, duration: 3.7, color: "#0066aa" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section 
      className="hero" 
      id="hero"
      style={{ y }}
    >
      {/* Hero Overlay */}
      <motion.div 
        className="hero-overlay"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(255, 140, 0, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(255, 140, 0, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(255, 140, 0, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(255, 140, 0, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Geometric Patterns */}
      <div className="geometric-patterns">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="geometric-shape"
            style={{
              position: 'absolute',
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              width: `${20 + i * 5}px`,
              height: `${20 + i * 5}px`,
              background: `linear-gradient(45deg, rgba(245, 124, 0, 0.6), rgba(255, 183, 77, 0.4))`,
               borderRadius: i % 2 === 0 ? '50%' : '0%',
               border: '2px solid rgba(245, 124, 0, 0.8)',
              zIndex: 1
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + i * 0.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated Mesh Grid */}
      <div className="mesh-grid">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="mesh-line"
            style={{
              position: 'absolute',
              width: '100%',
              height: '2px',
              background: `linear-gradient(90deg, transparent, rgba(245, 124, 0, 0.7), transparent)`,
              top: `${20 + i * 15}%`,
              zIndex: 1
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6,
              delay: i * 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Icons Overlay */}
      <div className="floating-icons-overlay">
        {floatingIcons.map((iconData, index) => {
          const IconComponent = iconData.icon;
          return (
            <motion.div
              key={index}
              className="floating-icon"
              style={{
                position: 'absolute',
                left: `${iconData.x}%`,
                top: `${iconData.y}%`,
                color: iconData.color,
                fontSize: '20px',
                zIndex: 1
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, -10, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 0.8, 1],
                opacity: [0.3, 0.8, 0.3]
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

      {/* Particle Effects */}
      <div className="particle-effects">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '4px',
              height: '4px',
              background: '#ff8c00',
              borderRadius: '50%',
              zIndex: 1
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      {/* Floating Particles */}
      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`particle particle-${i + 1}`}
            variants={floatingVariants}
            animate="animate"
            style={{
              animationDelay: `${i * 0.5}s`
            }}
          >
            {i % 3 === 0 ? <FaBolt /> : i % 3 === 1 ? <FaLeaf /> : <FaPlay />}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Powering a{" "}
          <motion.span 
            className="hero-highlight"
            variants={pulseVariants}
            animate="animate"
          >
            Sustainable Future
          </motion.span>
        </motion.h1>
        
        <motion.p variants={itemVariants}>
          Revolutionizing mobility with clean, efficient, and accessible energy solutions for everyone.
        </motion.p>

        <motion.div 
          className="hero-actions"
          variants={itemVariants}
        >
          <HashLink smooth to="/#products">
            <motion.button 
              className="btn-primary hero-btn glassmorphism-btn"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(255, 140, 0, 0.4)",
                background: "linear-gradient(135deg, rgba(255, 140, 0, 0.9) 0%, rgba(255, 100, 0, 0.9) 100%)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 30px rgba(255, 140, 0, 0.3)",
                  "0 15px 35px rgba(255, 140, 0, 0.4)",
                  "0 10px 30px rgba(255, 140, 0, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ display: 'inline-block', marginRight: '8px' }}
              >
                <FaBolt />
              </motion.span>
              Explore Products
            </motion.button>
          </HashLink>
          <HashLink smooth to="/#about">
            <motion.button 
              className="btn-secondary hero-btn glassmorphism-btn-secondary"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                borderColor: [
                  "rgba(255, 140, 0, 0.5)",
                  "rgba(255, 140, 0, 0.8)",
                  "rgba(255, 140, 0, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ display: 'inline-block', marginRight: '8px' }}
              >
                <FaPlay />
              </motion.span>
              Learn More
            </motion.button>
          </HashLink>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="hero-stats"
          variants={itemVariants}
        >
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <span className="stat-number">500+</span>
            <span className="stat-label">Projects</span>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <span className="stat-number">50M+</span>
            <span className="stat-label">Energy Saved</span>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <span className="stat-number">100+</span>
            <span className="stat-label">Cities</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-arrow"
        >
          <FaArrowDown />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </motion.section>
  );
}
