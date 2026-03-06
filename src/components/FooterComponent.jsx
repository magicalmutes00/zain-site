import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function FooterComponent() {
  return (
    <footer 
      className="py-5 mt-5" 
      style={{ 
        backgroundColor: 'var(--secondary-color)', 
        color: 'white' 
      }}
    >
      <Container>
        <Row>
          {/* Quick Links Column */}
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3 text-warning">Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-light text-decoration-none mb-2">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-light text-decoration-none mb-2">
                About Us
              </Nav.Link>
              <Nav.Link href="/services" className="text-light text-decoration-none mb-2">
                Services
              </Nav.Link>
              <Nav.Link href="/contact" className="text-light text-decoration-none mb-2">
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contact Info Column */}
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3 text-warning">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <FaEnvelope className="mt-1 me-3 text-warning" />
                <span>info@zaintechoman.com</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <FaPhone className="mt-1 me-3 text-warning" />
                <span>+968 -  92144367, +968 -  71744429</span>
              </li>
              <li className="d-flex align-items-start">
                <FaMapMarkerAlt className="mt-1 me-3 text-warning" />
                <span>Barka, Sumuhan,South Al Batinah,
                  <br />Sultanate of Oman,(near ROP Barka)
                  <br />PO Box NO : 124,Postal Code : 122.</span>
              </li>
            </ul>
          </Col>

          {/* Social Media Column */}
          <Col lg={4} md={12}>
            <h5 className="fw-bold mb-3 text-warning">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light fs-4">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light fs-4">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light fs-4">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light fs-4">
                <FaInstagram />
              </a>
            </div>
            <p className="mt-4 text-light-50 small">
              Stay connected with us for the latest updates and offers.
            </p>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-5 pt-3 border-top border-secondary">
          <Col className="text-center text-light small">
            &copy; {new Date().getFullYear()} ZAIN TECHNICAL & INTEGRATED SERVICES LLC. All Rights Reserved. 
            Designed with Decoders.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
