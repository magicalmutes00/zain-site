import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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
import prod1 from '../assets/product1.jpg';
import prod2 from '../assets/product2.jpg';
import prod3 from '../assets/product3.jpg';

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
      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="fw-bold text-secondary-custom mb-3">Who We Are</h2>
              <p className="text-muted fs-5">
                Since 2015, we have been delivering top-tier services to our community.
                Our ethos is built on a foundation of integrity and hard work. We believe
                in transparent communication and exceeding expectations.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {[
              { icon: FaShieldAlt, title: "Safety First", desc: "Our top priority is ensuring a safe environment for everyone involved." },
              { icon: FaTrophy, title: "Quality Matters", desc: "We adhere to strict quality control standards on every project." },
              { icon: FaClock, title: "On-Time Reliability", desc: "We respect your time and deliver projects within the agreed timeline." }
            ].map((value, index) => (
              <Col key={index} md={4} className="text-center">
                <div
                  className="p-4 rounded shadow-sm"
                  style={{ backgroundColor: '#f8f9fa', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                  <div className="mb-3 text-primary-custom" style={{ fontSize: '3rem' }}>
                    <value.icon />
                  </div>
                  <h4 className="fw-bold text-secondary-custom">{value.title}</h4>
                  <p className="text-muted">{value.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 3. Policies Summary */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold text-secondary-custom">Our Commitment</h2>
              <p className="text-muted">Established policies to guide our operations and ensure customer satisfaction.</p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm hover-shadow">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-3 text-primary-custom fs-1">
                    <FaTrophy />
                  </div>
                  <Card.Title className="fw-bold text-secondary-custom">Quality Policy</Card.Title>
                  <Card.Text className="flex-grow-1">
                    We are dedicated to providing products and services that consistently meet or exceed customer requirements and applicable regulatory standards.
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    className="align-self-start"
                    style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
                  >
                    Read Full Policy
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm hover-shadow">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-3 text-primary-custom fs-1">
                    <FaShieldAlt />
                  </div>
                  <Card.Title className="fw-bold text-secondary-custom">Safety Policy</Card.Title>
                  <Card.Text className="flex-grow-1">
                    We maintain a safe workplace for employees, visitors, and contractors, and we comply with all relevant health and safety regulations.
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    className="align-self-start"
                    style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
                  >
                    Safety Guidelines
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 4. Services Preview */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="fw-bold text-secondary-custom">Our Core Services</h2>
              <p className="text-muted">Comprehensive solutions designed to meet your specific business needs.</p>
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
                <div className="p-4 text-center h-100 rounded bg-white shadow-sm border-top border-primary-custom" style={{ borderTopWidth: '5px' }}>
                  <div className="mb-3 text-primary-custom fs-2 mx-auto" style={{ width: '60px' }}>
                    <service.icon />
                  </div>
                  <h5 className="fw-bold text-secondary-custom">{service.title}</h5>
                  <p className="text-muted">{service.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 5. Featured Products */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="fw-bold text-secondary-custom">Featured Products</h2>
            </Col>
          </Row>

          <Row className="g-4">
            {[
              { img: prod1, title: "Premium Tool Kit", price: "$149.99" },
              { img: prod2, title: "Safety Gear Bundle", price: "$89.50" },
              { img: prod3, title: "Pro Design Plans", price: "$49.00" }
            ].map((product, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 border-0 shadow-lg overflow-hidden">
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={product.img}
                      alt={product.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100"
                      style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}></div>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold text-secondary-custom">{product.title}</Card.Title>
                    <Card.Text className="flex-grow-1 text-muted">
                      High-grade materials ensuring durability and performance in all conditions.
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="fw-bold fs-4 text-primary-custom">{product.price}</span>
                      <Button
                        variant="primary"
                        size="sm"
                        style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}
                      >
                        View Details
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
