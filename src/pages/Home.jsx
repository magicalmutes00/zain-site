import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaTrophy,
  FaClock,
  FaToolbox,
  FaCar,
  FaHome,
  FaCogs
} from 'react-icons/fa';
import heroImage from '../assets/hero-bg.jpg';
import CarouselComponent from '../components/CarouselComponent';
import { AnimatedSection, AnimatedCard, fadeInUp, staggerContainer, cardHover, buttonHover } from '../components/AnimatedComponents';

function Home() {
  const navigate = useNavigate();

  return (
    <>
    
      {/* 1. Hero Section */}
      <section
        className="position-relative d-flex align-items-center text-white py-5"
        style={{
          minHeight: '70vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Container className="text-center text-md-start">
          <Row className="justify-content-center align-items-center">
            <Col lg={8} className="mb-5 mb-lg-0">
              <h1 className="display-3 fw-bold mb-3" style={{ color: 'var(--primary-color)' }}>
                Building Your Vision, <br /> One Project at a Time
              </h1>
              <p className="lead mb-4 fs-5">
                Delivering excellence in construction and design with a commitment to safety,
                quality, and on-time reliability. Trusted by clients across the region.
              </p>
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                <Button
                  variant="primary"
                  className="px-5 py-3 fw-bold rounded-pill"
                  style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}
                  onClick={() => navigate('/services')}
                >
                  View Services
                </Button>
                <Button
                  variant="outline-light"
                  className="px-5 py-3 fw-bold rounded-pill"
                  style={{ color: 'white', borderColor: 'white' }}
                  onClick={() => navigate('/contact')}
                >
                  Contact Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. Overview & Ethos */}
      <AnimatedSection className="py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <motion.h2 
                className="fw-bold text-secondary-custom mb-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Who We Are
              </motion.h2>
              <motion.p 
                className="text-muted fs-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Since 2015, we have been delivering top-tier services to our community.
                Our ethos is built on a foundation of integrity and hard work. We believe
                in transparent communication and exceeding expectations.
              </motion.p>
            </Col>
          </Row>

          <Row className="g-4">
            {[
              { icon: FaShieldAlt, title: "Safety First", desc: "Our top priority is ensuring a safe environment for everyone involved." },
              { icon: FaTrophy, title: "Quality Matters", desc: "We adhere to strict quality control standards on every project." },
              { icon: FaClock, title: "On-Time Reliability", desc: "We respect your time and deliver projects within the agreed timeline." }
            ].map((value, index) => (
              <Col key={index} md={4}>
                <motion.div
                  className="p-4 rounded shadow-sm h-100 text-center"
                  style={{ backgroundColor: '#f8f9fa' }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <motion.div 
                    className="mb-3 text-primary-custom mx-auto" 
                    style={{ fontSize: '3rem', width: 'fit-content' }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon />
                  </motion.div>
                  <h4 className="fw-bold text-secondary-custom">{value.title}</h4>
                  <p className="text-muted mb-0">{value.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </AnimatedSection>

      {/* 3. Policies Summary */}
      <AnimatedSection className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.h2 
                className="fw-bold text-secondary-custom"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Commitment
              </motion.h2>
              <motion.p 
                className="text-muted"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Established policies to guide our operations and ensure customer satisfaction.
              </motion.p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-100 border-0 shadow-sm hover-shadow">
                  <Card.Body className="d-flex flex-column">
                    <motion.div 
                      className="mb-3 text-primary-custom fs-1"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FaTrophy />
                    </motion.div>
                    <Card.Title className="fw-bold text-secondary-custom">Quality Policy</Card.Title>
                    <Card.Text className="flex-grow-1">
                      We are dedicated to providing products and services that consistently meet or exceed customer requirements and applicable regulatory standards.
                    </Card.Text>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline-primary"
                        className="align-self-start"
                        style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
                      >
                        Read Full Policy
                      </Button>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-100 border-0 shadow-sm hover-shadow">
                  <Card.Body className="d-flex flex-column">
                    <motion.div 
                      className="mb-3 text-primary-custom fs-1"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FaShieldAlt />
                    </motion.div>
                    <Card.Title className="fw-bold text-secondary-custom">Safety Policy</Card.Title>
                    <Card.Text className="flex-grow-1">
                      We maintain a safe workplace for employees, visitors, and contractors, and we comply with all relevant health and safety regulations.
                    </Card.Text>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline-primary"
                        className="align-self-start"
                        style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
                      >
                        Safety Guidelines
                      </Button>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </AnimatedSection>

      {/* 4. Services Preview */}
      <AnimatedSection className="py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <motion.h2 
                className="fw-bold text-secondary-custom"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Core Services
              </motion.h2>
              <motion.p 
                className="text-muted"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Comprehensive solutions designed to meet your specific business needs.
              </motion.p>
            </Col>
          </Row>

          <Row className="g-4">
            {[
              { icon: FaToolbox, title: "General Contracting", desc: "Full-service construction management from start to finish." },
              { icon: FaHome, title: "Renovations", desc: "Modernizing and upgrading your existing spaces with minimal disruption." },
              { icon: FaCar, title: "Logistics", desc: "Efficient supply chain and delivery solutions tailored for industry." },
              { icon: FaCogs, title: "Maintenance", desc: "Reliable ongoing support and repair services for all infrastructure." }
            ].map((service, index) => (
              <Col md={6} lg={3} key={index}>
                <motion.div 
                  className="p-4 text-center h-100 rounded bg-white shadow-sm border-top"
                  style={{ borderTopWidth: '5px', borderColor: 'var(--primary-color)' }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 1rem 2rem rgba(0,0,0,0.15)"
                  }}
                >
                  <motion.div 
                    className="mb-3 text-primary-custom mx-auto" 
                    style={{ fontSize: '2rem', width: 'fit-content' }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon />
                  </motion.div>
                  <h5 className="fw-bold text-secondary-custom">{service.title}</h5>
                  <p className="text-muted mb-0">{service.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </AnimatedSection>

      {/* 5. Featured Products Carousel */}
      <CarouselComponent />
    </>
  );
}

export default Home;
