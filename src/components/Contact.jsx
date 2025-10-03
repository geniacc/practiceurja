import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 }
  }
};

const contactInfoVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 }
  }
};

export default function Contact() {
  // Animation refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  
  // useInView hooks
  const isSectionInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const isHeadingInView = useInView(headingRef, { once: true, threshold: 0.5 });
  const isGridInView = useInView(gridRef, { once: true, threshold: 0.1 });

  return (
    <motion.section 
      className="contact-section" 
      id="contact"
      ref={sectionRef}
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="aurora-bg">
        <motion.div 
          className="aurora-shape shape-1"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
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
            rotate: [360, 0],
            scale: [1, 1.2, 1],
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
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </motion.div>
      <motion.div 
        className="contact-wrapper"
        variants={containerVariants}
      >
        <motion.div 
          className="section-heading"
          ref={headingRef}
          initial="hidden"
          animate={isHeadingInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
            <motion.h2 variants={itemVariants}>Contact Us</motion.h2>
            <motion.p className="sub-text" variants={itemVariants}>
              We'd love to hear from you! Reach out with any questions, inquiries, or partnership opportunities.
            </motion.p>
        </motion.div>

        <motion.div 
          className="contact-grid"
          ref={gridRef}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* --- Left Side: Contact Details --- */}
          <motion.div 
            className="contact-info"
            variants={contactInfoVariants}
          >
            <motion.h3 variants={itemVariants}>Get in Touch</motion.h3>
            <motion.p className="contact-detail-item" variants={itemVariants}>
              <motion.span
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope className="contact-icon" />
              </motion.span>
              <span>
                <strong>Email</strong>
                <motion.a 
                  href="mailto:info@urjamobility.in"
                  whileHover={{ color: "#00ffff" }}
                >
                  info@urjamobility.in
                </motion.a>
              </span>
            </motion.p>
            <motion.p className="contact-detail-item" variants={itemVariants}>
              <motion.span
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaPhone className="contact-icon" />
              </motion.span>
              <span>
                <strong>Phone</strong>
                <motion.a 
                  href="tel:+919876543210"
                  whileHover={{ color: "#00ffff" }}
                >
                  +91 98765 43210
                </motion.a>
              </span>
            </motion.p>
            <motion.p className="contact-detail-item" variants={itemVariants}>
              <motion.span
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaMapMarkerAlt className="contact-icon" />
              </motion.span>
              <span>
                <strong>Address</strong>
                Urja Mobility HQ, Delhi, India
              </span>
            </motion.p>
          </motion.div>

          {/* --- Right Side: Contact Form --- */}
          <motion.form 
            className="contact-form"
            action="https://formspree.io/f/YOUR_FORM_ID" // Remember to replace this with your Formspree ID
            method="POST"
            variants={formVariants}
          >
            <motion.div className="form-group" variants={itemVariants}>
                <motion.input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  whileFocus={{ scale: 1.02, borderColor: "#00ffff" }}
                />
                <motion.input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  whileFocus={{ scale: 1.02, borderColor: "#00ffff" }}
                />
            </motion.div>
            <motion.textarea 
              name="message" 
              placeholder="How can we help you?" 
              rows="6" 
              required 
              variants={itemVariants}
              whileFocus={{ scale: 1.02, borderColor: "#00ffff" }}
            />
            <motion.button 
              type="submit" 
              className="button-primary"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(0, 255, 255, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <FaPaperPlane />
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}