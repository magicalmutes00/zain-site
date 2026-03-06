import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoPlaceholder from '../assets/logo-placeholder.png';

function NavbarComponent() {
  return (
    <Navbar variant="dark" expand="lg" sticky="top" className="shadow-sm" style={{ backgroundColor: 'var(--secondary-color)' }}>
      <Container fluid>
        {/* Left Side: Logo and Brand Name */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logoPlaceholder}
            width="40"
            height="40"
            className="d-inline-block align-top rounded-circle me-2"
            alt="Company Logo"
          />
          <span className="fw-bold" style={{ color: 'var(--primary-color)' }}>
            ZAIN  <span style={{ color: 'white' }}>TECHNICAL & INTEGRATED SERVICES LLC</span>
          </span>
        </Navbar.Brand>

        {/* Hamburger Toggle Button */}
        <Navbar.Toggle aria-controls="navbar-responsive" className="border-0" />

        {/* Right Side: Nav Links & Action Button */}
        <Navbar.Collapse id="navbar-responsive">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/" className="text-white fw-medium">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white fw-medium">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-white fw-medium">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white fw-medium">
              Contact
            </Nav.Link>
          </Nav>

          {/* Distinct 'Get a Quote' Button */}
          <Button
            as={Link}
            to="/contact"
            variant="primary"
            className="bg-gradient text-white fw-bold px-4 py-2 border-0 shadow"
            style={{
              backgroundColor: 'var(--primary-color)',
              borderColor: 'var(--primary-color)'
            }}
          >
            Get a Quote
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

