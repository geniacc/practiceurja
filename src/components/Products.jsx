import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaBolt, FaBatteryFull, FaLeaf, FaShieldAlt, FaCog, FaRocket, FaStar, FaGem, FaAtom, FaLightbulb, FaWifi, FaCloud } from "react-icons/fa";
import "./Products.css";

// Assuming images are in src/assets/
import batteryImg from "../assets/battery-product.jpg";
import l1Img from "../assets/l1.jpg";
import l2Img from "../assets/l2.jpg";
import l3Img from "../assets/l3.jpg";
import l4Img from "../assets/l4.jpg";
import l5Img from "../assets/l5.jpg";

// The full product data array
export const batteryOptions = [
  {
    name: "L1 Battery",
    img: l1Img,
    specs: "48V | 60Ah | 2.88kWh",
    desc: "Ultra-lightweight and compact, perfect for personal e-bikes and scooters needing agility and efficiency.",
    details:
      "The ideal power solution for personal mobility, offering 2.88kWh in a lightweight frame with LFP safety and an IP67 rating.",
    brochure: "/brochures/l1-brochure.pdf",
    specifications: {
      "Total Capacity": "2.88 kWh",
      Chemistry: "LFP (LiFePO4)",
      "IP Rating": "IP67",
      Weight: "Approx. 28 kg",
      "Dimensions (L x W x H)": "350 x 280 x 250 mm",
      Application: "E-Bikes, Personal Scooters",
    },
    features: [
      "Extremely Lightweight Design",
      "Compact Form Factor",
      "CAN-Based Communication",
      "Safe LFP Chemistry",
      "IP67 Protection",
      "Smart BMS Safety Features",
    ],
    warrantyInfo:
      "Supplied with a 2-year manufacturer warranty covering performance and defects.",
    faq: [
      {
        question: "Is the L1 easy to carry?",
        answer:
          "Yes, at approximately 28 kg, it is one of our lightest batteries, designed for portability and easy handling.",
      },
      {
        question: "What is the primary use case for the L1?",
        answer: "It is designed for personal e-bikes and city scooters where weight and size are critical.",
      },
    ],
  },
  {
    name: "L2 Battery",
    img: l2Img,
    specs: "51.2V | 100Ah | 5.12kWh",
    desc: "Compact, lightweight, and ideal for urban e-mobility—reliable power with modern safety and smart monitoring features.",
    details:
      "An optimal 5.12kWh power pack for urban e-mobility, built with safe LFP chemistry and a rugged IP67-rated enclosure for reliable performance.",
    brochure: "/brochures/l2-brochure.pdf",
    specifications: {
      "Total Capacity": "5.12 kWh",
      Chemistry: "LFP (LiFePO4)",
      "IP Rating": "IP67",
      Weight: "Approx. 52 kg",
      "Dimensions (L x W x H)": "452 x 322 x 288 mm",
      Application: "E-Scooters, E-Bikes",
    },
    features: [
      "High Power in a Compact Form Factor",
      "Lightweight & Durable Body",
      "CAN-Based Communication Enabled",
      "LFP Chemistry for Extended Life",
      "IP67 Dust & Water Protection",
      "Smart BMS Safety Protections",
      "Integrated SOC Display Option",
    ],
    warrantyInfo:
      "Supplied with a 2-year manufacturer warranty covering performance and defects.",
    faq: [
      {
        question: "What vehicles is the L2 Battery suited for?",
        answer:
          "The L2 is designed for small e-scooters and e-bikes where a balance of weight and power is important.",
      },
      {
        question: "Is the L2 battery waterproof?",
        answer: "Yes, its IP67 rating ensures high resistance to dust and water.",
      },
    ],
  },
  {
    name: "L3 Battery",
    img: l3Img,
    specs: "51.2V | 150Ah | 7.7kWh",
    desc: "High-capacity, robust battery for mid/high-range electric vehicles—designed for higher loads with CAN communication and industrial ruggedness.",
    details:
      "A high-capacity 7.7kWh battery for commercial EVs, featuring robust LFP cells and an industrial-grade IP67 enclosure to handle higher loads.",
    brochure: "/brochures/l3-brochure.pdf",
    specifications: {
      "Total Capacity": "7.7 kWh",
      Chemistry: "LFP (LiFePO4)",
      "IP Rating": "IP67",
      Weight: "Approx. 65 kg",
      "Dimensions (L x W x H)": "610 x 370 x 340 mm",
      Application: "E-Rickshaws, Commercial EVs",
    },
    features: [
      "High Capacity for Commercial Use",
      "Integrated CAN Bus Communication",
      "IP67 Rated Rugged Enclosure",
      "High-Current Power Capability",
      "Comprehensive BMS Protection",
      "Durable Powder-Coated Finish",
      "Multiple Mounting Points",
    ],
    warrantyInfo:
      "A 3-year comprehensive warranty is provided, covering manufacturing and electrical defects.",
    faq: [
      {
        question: "Is the L3 model suitable for three-wheelers?",
        answer:
          "Yes, the L3 is perfectly suited for e-rickshaws, small loaders, and other commercial EVs.",
      },
      {
        question: "Does it support fast charging?",
        answer: "Yes, it is designed to support fast charging to reduce vehicle downtime.",
      },
    ],
  },
  {
    name: "L4 Battery",
    img: l4Img,
    specs: "51.2V | 180Ah | 9.2kWh",
    desc: "A premium solution for high-performance e-rickshaws, providing extended range and durability for demanding routes.",
    details:
      "Engineered for high-endurance commercial use, this 9.2kWh battery offers a blend of high capacity and rugged construction.",
    brochure: "/brochures/l4-brochure.pdf",
    specifications: {
      "Total Capacity": "9.2 kWh",
      Chemistry: "LFP (LiFePO4)",
      "IP Rating": "IP67",
      Weight: "Approx. 85 kg",
      "Dimensions (L x W x H)": "610 x 450 x 275 mm",
      Application: "Premium E-Rickshaws, Passenger EVs",
    },
    features: [
      "Extended Range Capability",
      "Robust for Daily Commercial Use",
      "Advanced Thermal Management",
      "CAN Diagnostics",
      "High-Cycle LFP Cells",
      "Reinforced MS Enclosure",
    ],
    warrantyInfo:
      "Comes with a 3-year warranty covering all manufacturing defects and major electrical failures.",
    faq: [
      {
        question: "What makes the L4 a 'premium' choice?",
        answer:
          "The L4 uses higher-density cells for extended range and includes advanced thermal management, making it ideal for continuous, heavy-duty operation.",
      },
      {
        question: "Can it be used in passenger e-rickshaws?",
        answer: "Yes, it is an excellent choice for passenger vehicles that require longer range and reliability.",
      },
    ],
  },
  {
    name: "L5 Battery",
    img: l5Img,
    specs: "51.2V | 200Ah | 10.24kWh",
    desc: "Our flagship battery for loaders and heavy-duty e-rickshaws, built for maximum performance and reliability in severe usage.",
    details:
      "Our flagship 10.24kWh battery for heavy-duty applications, engineered with advanced safety features and a rugged IP67 design for maximum power.",
    brochure: "/brochures/l5-brochure.pdf",
    specifications: {
      "Total Capacity": "10.24 kWh",
      Chemistry: "LFP (LiFePO4)",
      "IP Rating": "IP67",
      Weight: "Approx. 100 kg",
      "Dimensions (L x W x H)": "614 x 507.5 x 275 mm",
      Application: "Cargo Loaders, Mini-Trucks",
    },
    features: [
      "Very High Energy Storage (10+ kWh)",
      "Designed for Heavy Load Applications",
      "Rugged IP67 MS Enclosure",
      "Integrated Fuse Protection",
      "Advanced CAN Diagnostics",
      "Emergency Pressure Vent",
      "Versatile Mounting Options",
    ],
    warrantyInfo:
      "Comes with a 3-year warranty covering all manufacturing defects and major electrical failures.",
    faq: [
      {
        question: "Is the L5 the best choice for cargo loaders?",
        answer:
          "Absolutely. It is designed for high-load cargo e-rickshaws, loaders, and mini-trucks that demand the highest energy storage.",
      },
      {
        question: "How is the L5 protected against faults?",
        answer:
          "It has a multi-layer safety system, including an advanced BMS, a rugged enclosure, and an integrated high-capacity fuse.",
      },
    ],
  },
];

const makeId = (name) => name.toLowerCase().replace(/\s+/g, "-");

// Floating icons for Products section
const productsFloatingIcons = [
  { icon: FaBolt, x: 10, y: 15, delay: 0, duration: 4, color: '#ff8c00', size: 24 },
  { icon: FaBatteryFull, x: 85, y: 20, delay: 0.5, duration: 5, color: '#00ff88', size: 28 },
  { icon: FaLeaf, x: 15, y: 70, delay: 1, duration: 6, color: '#88ff00', size: 22 },
  { icon: FaShieldAlt, x: 90, y: 75, delay: 1.5, duration: 4.5, color: '#0088ff', size: 26 },
  { icon: FaCog, x: 5, y: 45, delay: 2, duration: 7, color: '#ff4400', size: 20 },
  { icon: FaRocket, x: 95, y: 50, delay: 2.5, duration: 5.5, color: '#ff0088', size: 30 },
  { icon: FaStar, x: 25, y: 10, delay: 3, duration: 4, color: '#ffff00', size: 18 },
  { icon: FaGem, x: 75, y: 85, delay: 3.5, duration: 6, color: '#8800ff', size: 24 },
  { icon: FaAtom, x: 50, y: 5, delay: 4, duration: 8, color: '#00ffff', size: 32 },
  { icon: FaLightbulb, x: 8, y: 85, delay: 4.5, duration: 5, color: '#ffaa00', size: 26 },
  { icon: FaWifi, x: 92, y: 15, delay: 5, duration: 6, color: '#0066ff', size: 22 },
  { icon: FaCloud, x: 45, y: 90, delay: 5.5, duration: 7, color: '#ff6600', size: 28 }
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // CONFIG: Number of items to show at once on desktop.
  const visibleItems = 3;

  // Animation refs and states
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const sliderRef = useRef(null);
  const ctaRef = useRef(null);
  
  const sectionInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const introInView = useInView(introRef, { once: true, threshold: 0.2 });
  const sliderInView = useInView(sliderRef, { once: true, threshold: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, threshold: 0.3 });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    })
  };

  // UPDATED LOGIC: Stops the slider at the beginning.
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // UPDATED LOGIC: Stops the slider at the end.
  const goToNext = () => {
    const maxIndex = batteryOptions.length - visibleItems;
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  // ADDED: Logic to determine if buttons should be disabled.
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < batteryOptions.length - visibleItems;

  return (
    <motion.section 
      className="products-section" 
      id="products"
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Products Floating Icons Background */}
      <div className="products-floating-icons">
        {productsFloatingIcons.map((iconData, index) => {
          const IconComponent = iconData.icon;
          return (
            <motion.div
              key={index}
              className="products-floating-icon"
              style={{
                position: 'absolute',
                left: `${iconData.x}%`,
                top: `${iconData.y}%`,
                color: iconData.color,
                fontSize: `${iconData.size}px`,
                zIndex: 1
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, -10, 0],
                rotate: [0, 360],
                scale: [0.8, 1.3, 0.8],
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

      {/* Products Particle Effects */}
      <div className="products-particles">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="products-particle"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '4px',
              height: '4px',
              background: i % 3 === 0 ? '#ff8c00' : i % 3 === 1 ? '#00ff88' : '#0088ff',
              borderRadius: '50%',
              zIndex: 1
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 1, 0],
              scale: [0, 2, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              delay: Math.random() * 5,
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
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="aurora-shape shape-2"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="aurora-shape shape-3"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>
      
      <motion.div className="products-wrapper" variants={containerVariants}>
        <motion.h2 variants={itemVariants}>Our Product</motion.h2>
        <motion.img 
          src={batteryImg} 
          alt="Battery" 
          className="battery-banner"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            filter: "brightness(1.1)"
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div 
          className="product-intro"
          ref={introRef}
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="product-title" variants={itemVariants}>
            Our Product
          </motion.h2>
          <motion.h3 className="intro-heading" variants={itemVariants}>
            Advanced Battery Solutions for Electric Vehicles
          </motion.h3>
          <motion.p className="intro-description" variants={itemVariants}>
            Experience the next generation of energy storage with our
            state-of-the-art batteries, engineered for performance,
            reliability, and smart connectivity. Designed to a range of
            electric vehicles, our batteries deliver exceptional value and
            peace of mind.
          </motion.p>

          <motion.h4 className="features-heading" variants={itemVariants}>
            Key Features
          </motion.h4>
          <motion.ul className="feature-list" variants={containerVariants}>
            <motion.li variants={itemVariants}>
              <strong>Long Life Cycle:</strong> Up to 2000 charge cycles for
              extended usage and reliability.
            </motion.li>
            <motion.li variants={itemVariants}>
              <strong>Comprehensive Warranty:</strong> Enjoy a 3-year warranty
              for worry-free usage.
            </motion.li>
            <motion.li variants={itemVariants}>
              <strong>Certified Quality:</strong> AIS 156 quality standard
              certified and verified for maximum safety and compliance.
            </motion.li>
            <motion.li variants={itemVariants}>
              <strong>Low Service Cost:</strong> Designed for minimal
              maintenance and reduced total cost of usage.
            </motion.li>
            <motion.li variants={itemVariants}>
              <strong>Smart IoT Enabled:</strong> All batteries come with
              integrated IoT features for real-time monitoring, diagnostics,
              and enhanced user experience.
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.h2 variants={itemVariants}>
          Battery Options for Every Need
        </motion.h2>

        <motion.div 
          className="product-slider-container"
          ref={sliderRef}
          initial="hidden"
          animate={sliderInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.button
            onClick={goToPrevious}
            className="slider-arrow left-arrow"
            disabled={!canGoPrev}
            variants={itemVariants}
            whileHover={{ 
              scale: canGoPrev ? 1.1 : 1,
              backgroundColor: canGoPrev ? "rgba(245, 124, 0, 0.8)" : undefined
            }}
            whileTap={{ scale: canGoPrev ? 0.95 : 1 }}
          >
            &#10094;
          </motion.button>

          <motion.div className="slider-viewport" variants={itemVariants}>
            <motion.div
              className="slider-track"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleItems)
                }%)`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {batteryOptions.map((battery, index) => (
                <motion.div
                  key={battery.name}
                  className={`slide-item ${
                    index >= currentIndex && index < currentIndex + visibleItems
                      ? "active"
                      : ""
                  }`}
                  custom={index}
                  variants={slideVariants}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="flip-card"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(245, 124, 0, 0.2)"
                    }}
                  >
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <motion.img 
                          src={battery.img} 
                          alt={battery.name}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {battery.name}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {battery.specs}
                        </motion.p>
                        <motion.div 
                          className="flip-prompt"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <motion.span 
                            className="flip-icon"
                            animate={{ rotate: [0, 360] }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          >
                            ↻
                          </motion.span>
                          Hover for Details
                        </motion.div>
                      </div>

                      <div className="flip-card-back">
                        <motion.h3
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {battery.name}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {battery.desc}
                        </motion.p>
                        <motion.div 
                          className="button-group"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Link to={`/products/${makeId(battery.name)}`}>
                            <motion.button 
                              className="btn btn-primary"
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 10px 20px rgba(245, 124, 0, 0.3)"
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              See More <span className="btn-icon">→</span>
                            </motion.button>
                          </Link>
                          <motion.a
                            href={battery.brochure}
                            download
                            className="btn btn-secondary"
                            rel="noopener noreferrer"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(245, 124, 0, 0.1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Download <span className="btn-icon">↓</span>
                          </motion.a>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.button
            onClick={goToNext}
            className="slider-arrow right-arrow"
            disabled={!canGoNext}
            variants={itemVariants}
            whileHover={{ 
              scale: canGoNext ? 1.1 : 1,
              backgroundColor: canGoNext ? "rgba(245, 124, 0, 0.8)" : undefined
            }}
            whileTap={{ scale: canGoNext ? 0.95 : 1 }}
          >
            &#10095;
          </motion.button>
        </motion.div>

        <motion.div 
          className="leasing-cta"
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3 variants={itemVariants}>Interested in Leasing?</motion.h3>
          <motion.p variants={itemVariants}>
            Explore our flexible leasing plans for every EV need.
          </motion.p>
          <Link to="/leasing">
            <motion.button 
              className="leasing-button"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(245, 124, 0, 0.4)",
                background: "linear-gradient(135deg, #f57c00 0%, #ff9800 100%)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Know More About Leasing
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}