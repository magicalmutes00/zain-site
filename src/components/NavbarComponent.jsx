import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoPlaceholder from '../assets/logo-placeholder.png';
import { motion, AnimatePresence } from 'framer-motion';

function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar 
        variant="dark" 
        expand="lg" 
        sticky="top" 
        className={`shadow-sm transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}
        style={{ 
          backgroundColor: isScrolled ? 'rgba(15, 15, 15, 0.95)' : 'var(--secondary-color)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none'
        }}
      >
        <Container fluid>
          {/* Left Side: Logo and Brand Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <motion.img
                src={logoPlaceholder}
                width="40"
                height="40"
                className="d-inline-block align-top rounded-circle me-2"
                alt="Company Logo"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              />
              <motion.span 
                className="fw-bold" 
                style={{ color: 'var(--primary-color)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                ZAIN <span style={{ color: 'white' }}>TECHNICAL & INTEGRATED SERVICES LLC</span>
              </motion.span>
            </Navbar.Brand>
          </motion.div>

          {/* Hamburger Toggle Button */}
          <Navbar.Toggle 
            aria-controls="navbar-responsive" 
            className="border-0" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              ☰
            </motion.div>
          </Navbar.Toggle>

          {/* Right Side: Nav Links & Action Button */}
          <AnimatePresence>
            {(isOpen || window.innerWidth >= 992) && (
              <motion.div
                key="navbar-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Navbar.Collapse id="navbar-responsive">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="ms-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row align-items-center gap-3"
                  >
                    {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                      <motion.div key={item} variants={navItemVariants}>
                        <Nav.Link 
                          as={Link} 
                          to={index === 0 ? '/' : `/${item.toLowerCase()}`} 
                          className="text-white fw-medium position-relative"
                          onClick={() => setIsOpen(false)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            overflow: 'hidden'
                          }}
                        >
                          {item}
                          <motion.div
                            className="position-absolute bottom-0 left-0 w-100 h-0.5"
                            style={{ backgroundColor: 'var(--primary-color)' }}
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </Nav.Link>
                      </motion.div>
                    ))}
                    
                    {/* Distinct 'Get a Quote' Button */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(255, 193, 7, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button
                        as={Link}
                        to="/contact"
                        variant="primary"
                        className="bg-gradient text-white fw-bold px-4 py-2 border-0 shadow"
                        style={{
                          backgroundColor: 'var(--primary-color)',
                          borderColor: 'var(--primary-color)',
                          borderRadius: '25px'
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.span
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.6 }}
                        >
                          Get a Quote
                        </motion.span>
                      </Button>
                    </motion.div>
                  </motion.div>
                </Navbar.Collapse>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavbarComponent;