import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function FooterComponent() {
  const socialLinks = [
    { icon: FaFacebook, url: "https://facebook.com", color: "#1877f2" },
    { icon: FaTwitter, url: "https://twitter.com", color: "#1da1f2" },
    { icon: FaLinkedin, url: "https://linkedin.com", color: "#0077b5" },
    { icon: FaInstagram, url: "https://instagram.com", color: "#e4405f" }
  ];

  const contactItems = [
    { icon: FaEnvelope, text: "info@zaintechoman.com", delay: 0.1 },
    { icon: FaPhone, text: "+968 -  92144367, +968 -  71744429", delay: 0.2 },
    { icon: FaMapMarkerAlt, text: "Barka, Sumuhan,South Al Batinah,\n                  Sultanate of Oman,(near ROP Barka)\n                  PO Box NO : 124,Postal Code : 122.", delay: 0.3 }
  ];

  const quickLinks = [
    { text: "Home", delay: 0.1 },
    { text: "About Us", delay: 0.2 },
    { text: "Services", delay: 0.3 },
    { text: "Contact", delay: 0.4 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    },
    hover: { 
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.6 }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.footer 
      className="py-5 mt-5" 
      style={{ 
        backgroundColor: 'var(--secondary-color)', 
        color: 'white' 
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row>
            {/* Quick Links Column */}
            <Col lg={4} md={6} className="mb-4 mb-md-0">
              <motion.h5 
                className="fw-bold mb-3 text-warning" 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Quick Links
              </motion.h5>
              <Nav className="flex-column">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.text}
                    variants={itemVariants}
                    whileHover={{ x: 10, color: "#ffc107" }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Nav.Link 
                      href={index === 0 ? "/" : `/${link.text.toLowerCase().replace(" ", "")}`} 
                      className="text-light text-decoration-none mb-2 d-flex align-items-center"
                      style={{ position: "relative", overflow: "hidden" }}
                    >
                      <motion.span
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        className="position-absolute bottom-0 left-0 h-0.5 bg-warning"
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span
                        initial={{ x: -20, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {link.text}
                      </motion.span>
                    </Nav.Link>
                  </motion.div>
                ))}
              </Nav>
            </Col>

            {/* Contact Info Column */}
            <Col lg={4} md={6} className="mb-4 mb-md-0">
              <motion.h5 
                className="fw-bold mb-3 text-warning" 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Contact Info
              </motion.h5>
              <ul className="list-unstyled">
                {contactItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="mb-3 d-flex align-items-start"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        color: "#ffc107",
                        rotate: [0, -10, 10, -10, 0]
                      }}
                      transition={{ duration: 0.6 }}
                      className="mt-1 me-3"
                    >
                      <item.icon />
                    </motion.div>
                    <motion.span
                      whileHover={{ color: "#ffc107" }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.text.split('\n').map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex < item.text.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </Col>

            {/* Social Media Column */}
            <Col lg={4} md={12}>
              <motion.h5 
                className="fw-bold mb-3 text-warning" 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Follow Us
              </motion.h5>
              <div className="d-flex gap-3 mb-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-light fs-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      textDecoration: "none"
                    }}
                    variants={socialVariants}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                variants={itemVariants}
                whileHover={pulseAnimation}
                className="p-3 rounded"
                style={{
                  backgroundColor: "rgba(255, 193, 7, 0.1)",
                  border: "1px solid rgba(255, 193, 7, 0.2)"
                }}
              >
                <motion.p 
                  className="text-light-50 small mb-0"
                  whileHover={{ color: "#ffc107" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    animate={{ 
                      color: ["#ffc107", "#fff", "#ffc107"],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    📢
                  </motion.span>{' '}
                  Stay connected with us for the latest updates and offers.
                </motion.p>
              </motion.div>
            </Col>
          </Row>

          {/* Copyright Section */}
          <Row className="mt-5 pt-3 border-top border-secondary">
            <Col className="text-center text-light small">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                &copy; {new Date().getFullYear()} ZAIN TECHNICAL & INTEGRATED SERVICES LLC. All Rights Reserved. 
                <motion.span 
                  className="ms-2"
                  whileHover={{ scale: 1.1, color: "#ffc107" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Designed with Decoders.
                </motion.span>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </motion.footer>
  );
}

export default FooterComponent;