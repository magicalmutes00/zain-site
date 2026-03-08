import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Badge, Modal } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Emergency Banner Click State
  const [showHotlineModal, setShowHotlineModal] = useState(false);

  // Validation Logic
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message';
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', service: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pb-5">
      {/* 1. Emergency Hotline Banner */}
      <div 
        className="text-center py-3 text-white shadow-lg"
        style={{ backgroundColor: 'var(--primary-color)' }}
      >
        <Container>
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
            <FaPhoneAlt className="fs-3 animate-pulse" />
            <div>
              <h4 className="fw-bold mb-0">24/7 Emergency Hotline</h4>
              <p className="mb-0 opacity-90 fw-medium">Immediate assistance for urgent service requests</p>
            </div>
            <Button 
              variant="light" 
              className="fw-bold shadow-sm"
              onClick={() => setShowHotlineModal(true)}
            >
              Call Now: +968 - 92144367
            </Button>
          </div>
        </Container>
      </div>

      {/* Success Message Toast/Alert */}
      {showSuccess && (
        <Alert variant="success" className="mt-4 text-center shadow-sm">
          <strong>Thank you!</strong> Your message has been sent successfully. We will contact you shortly.
        </Alert>
      )}

      <Container className="mt-5">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h1 className="fw-bold text-secondary-custom">Get In Touch</h1>
            <p className="lead text-muted">Have a project in mind? Fill out the form or contact us directly.</p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Left: Contact Form */}
          <Col lg={6}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-4 p-md-5">
                <h3 className="fw-bold text-secondary-custom mb-4">Send us a Message</h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4" controlId="name">
                    <Form.Label className="text-secondary-custom fw-bold">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Decoders Inc."
                      isInvalid={!!errors.name}
                      className="shadow-sm"
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="email">
                    <Form.Label className="text-secondary-custom fw-bold">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="decoders@example.com"
                      isInvalid={!!errors.email}
                      className="shadow-sm"
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="service">
                    <Form.Label className="text-secondary-custom fw-bold">Interested Service</Form.Label>
                    <Form.Select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      isInvalid={!!errors.service}
                      className="shadow-sm"
                    >
                      <option value="">Select a service...</option>
                      <option value="fire-safety">Fire Safety Installation</option>
                      <option value="plumbing">Plumbing & Water Systems</option>
                      <option value="general">General Contracting</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="other">Other</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please select a service</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="message">
                    <Form.Label className="text-secondary-custom fw-bold">Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      isInvalid={!!errors.message}
                      className="shadow-sm resize-none"
                    />
                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button 
                      variant="primary" 
                      type="submit"
                      disabled={isSubmitting}
                      style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}
                      className="fw-bold py-2"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Right: Contact Details & Map */}
          <Col lg={6}>
            <Row className="g-4">
              
              {/* Contact Info Cards */}
              <Col md={6}>
                <Card className="h-100 border-0 shadow-sm text-center p-4 bg-light">
                  <div className="bg-primary-custom rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <FaPhoneAlt className="text-white fs-3" />
                  </div>
                  <h5 className="fw-bold text-secondary-custom mb-2">Phone</h5>
                  <p className="mb-0 text-muted">Main Line:</p>
                  <a href="tel:5551234567" className="text-decoration-none fw-bold text-primary-custom">
                    +968 - 92144367
                  </a>
                  <br />
                  <a href="tel:5559876543" className="text-decoration-none text-muted small">
                    +968 -71744429
                  </a>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="h-100 border-0 shadow-sm text-center p-4 bg-light">
                  <div className="bg-primary-custom rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <FaEnvelope className="text-white fs-3" />
                  </div>
                  <h5 className="fw-bold text-secondary-custom mb-2">Email</h5>
                  <a href="mailto:contact@myapp.com" className="text-decoration-none text-muted">
                    info@zaintechoman.com
                  </a>
                  <br />
                  <a href="mailto:support@myapp.com" className="text-decoration-none text-muted small">
                    zainprojectsoman@gmail.com
                    zaintechnicaloman@gmail.com
                  </a>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="h-100 border-0 shadow-sm text-center p-4 bg-light">
                  <div className="bg-primary-custom rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <FaMapMarkerAlt className="text-white fs-3" />
                  </div>
                  <h5 className="fw-bold text-secondary-custom mb-2">Address</h5>
                  <p className="mb-0 text-muted">
                    Barka,,South Al Batinah,<br />
                    Sultanate of Oman (near ROP Barka)<br />
                    PO Box NO : 124,Postal Code : 122.
                  </p>
                  <Button variant="outline-primary" size="sm" className="mt-2 rounded-pill" onClick={() => window.open('https://maps.google.com', '_blank')}>
                    Get Directions
                  </Button>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="h-100 border-0 shadow-sm text-center p-4 bg-light">
                  <div className="bg-primary-custom rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <FaClock className="text-white fs-3" />
                  </div>
                  <h5 className="fw-bold text-secondary-custom mb-2">Working Hours</h5>
                  <div className="text-muted">
                    <p className="mb-1 fw-bold">Mon - Fri:</p>
                    <span className="text-secondary-custom fw-medium">8:00 AM - 6:00 PM</span>
                    <br />
                    <p className="mb-1 fw-bold">Sat:</p>
                    <span className="text-secondary-custom fw-medium">9:00 AM - 2:00 PM</span>
                    <br />
                    <Badge bg="danger" className="mt-1">Sun: Closed</Badge>
                  </div>
                </Card>
              </Col>
            </Row>

            {/* Google Map Placeholder */}
            <Card className="mt-4 border-0 shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="bg-secondary-custom text-white p-3 d-flex align-items-center justify-content-between">
                <span className="fw-bold">Our Location</span>
                <Button size="sm" variant="outline-light" onClick={() => window.open('https://maps.google.com', '_blank')}>
                  Open Full Map
                </Button>
              </div>
              
              {/* Mock Google Map Visual */}
              <div 
                className="w-100 h-100 d-flex align-items-center justify-content-center bg-secondary"
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="text-center bg-white p-4 rounded shadow-lg position-relative" style={{ maxWidth: '300px' }}>
                  <div className="position-absolute top-0 start-50 translate-middle" style={{ top: '-20px' }}>
                    <div className="bg-primary-custom text-white p-2 rounded-circle shadow">
                      <FaMapMarkerAlt />
                    </div>
                  </div>
                  <h5 className="fw-bold text-secondary-custom mt-3">Our Headquarters</h5>
                  <p className="text-muted mb-3">We are easily accessible by public transport and have ample parking available.</p>
                  <Button variant="primary" className="rounded-pill px-4">
                    View Location Details
                  </Button>
                </div>
              </div>
            </Card>

          </Col>
        </Row>
      </Container>

      {/* Emergency Hotline Modal */}
      <Modal show={showHotlineModal} onHide={() => setShowHotlineModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-secondary-custom">Emergency Hotline</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <FaPhoneAlt className="text-primary-custom fs-1 mb-3" />
          <p className="lead">Please call our 24/7 emergency line for immediate assistance:</p>
          <h2 className="fw-bold text-secondary-custom mb-4">(555) 123-4567</h2>
          <p>For non-emergency inquiries, please use the contact form on this page.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHotlineModal(false)}>
            Close
          </Button>
          <Button 
            variant="primary" 
            className="bg-gradient fw-bold"
            style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}
            onClick={() => window.location.href = 'tel:5551234567'}
          >
            Call Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contact;
