import React from 'react';
import { Container, Row, Col, Card, Button, Tabs, Tab } from 'react-bootstrap';
import {
    FaFireExtinguisher,
    FaPlug,
    FaWater,
    FaHome,
    FaTools,
    FaChartLine,
    FaCheckCircle,
    FaClock,
    FaHandshake
} from 'react-icons/fa';

function Services() {
    return (
        <div>
            {/* Header Section */}
            <section className="py-5 bg-secondary-custom text-white text-center">
                <Container>
                    <h1 className="fw-bold display-5 mb-3">Our Professional Services</h1>
                    <p className="fs-5 opacity-75">
                        Comprehensive solutions tailored to your specific needs. Quality you can trust, guaranteed.
                    </p>
                </Container>
            </section>

            {/* Filterable/Categorized List Section */}
            <section className="py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-secondary-custom">Service Categories</h2>
                        <p className="text-muted">Select a category to explore our specialized offerings.</p>
                    </div>

                    <Tabs defaultActiveKey="fire-safety" id="uncontrolled-tab-example" className="mb-4 justify-content-center">
                        <Tab eventKey="fire-safety" title="Fire Safety">
                            <Row className="g-4">
                                <Col md={6} lg={4}>
                                    <Card className="h-100 border-0 shadow-sm">
                                        <Card.Body>
                                            <div className="bg-primary-custom rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                                <FaFireExtinguisher className="text-white fs-2" />
                                            </div>
                                            <Card.Title className="fw-bold text-secondary-custom">Fire Safety Installation</Card.Title>
                                            <Card.Text className="text-muted">
                                                Complete installation of fire alarms, suppression systems, and emergency exits to ensure compliance and safety.
                                            </Card.Text>
                                            <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={4}>
                                    <Card className="h-100 border-0 shadow-sm">
                                        <Card.Body>
                                            <div className="bg-primary-custom rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                                <FaChartLine className="text-white fs-2" />
                                            </div>
                                            <Card.Title className="fw-bold text-secondary-custom">Safety Inspections</Card.Title>
                                            <Card.Text className="text-muted">
                                                Regular audits and inspections to identify potential hazards and ensure regulatory compliance.
                                            </Card.Text>
                                            <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="plumbing" title="Plumbing">
                            <Row className="g-4">
                                <Col md={6} lg={4}>
                                    <Card className="h-100 border-0 shadow-sm">
                                        <Card.Body>
                                            <div className="bg-primary-custom rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                                <FaWater className="text-white fs-2" />
                                            </div>
                                            <Card.Title className="fw-bold text-secondary-custom">Installation & Repair</Card.Title>
                                            <Card.Text className="text-muted">
                                                Expert plumbing services for residential and commercial properties, from leaks to complete system overhauls.
                                            </Card.Text>
                                            <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={4}>
                                    <Card className="h-100 border-0 shadow-sm">
                                        <Card.Body>
                                            <div className="bg-primary-custom rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                                <FaPlug className="text-white fs-2" />
                                            </div>
                                            <Card.Title className="fw-bold text-secondary-custom">Emergency Services</Card.Title>
                                            <Card.Text className="text-muted">
                                                24/7 emergency response for burst pipes, severe leaks, or water heater failures.
                                            </Card.Text>
                                            <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="general" title="General Contracting">
                            <Row className="g-4">
                                <Col md={6} lg={4}>
                                    <Card className="h-100 border-0 shadow-sm">
                                        <Card.Body>
                                            <div className="bg-primary-custom rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                                <FaTools className="text-white fs-2" />
                                            </div>
                                            <Card.Title className="fw-bold text-secondary-custom">Renovations</Card.Title>
                                            <Card.Text className="text-muted">
                                                Transform your space with our expert renovation services, including kitchens, bathrooms, and offices.
                                            </Card.Text>
                                            <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} lg={4}>
                                    <Card className="h-100 border-0 shadow-sm">
                                        <Card.Body>
                                            <div className="bg-primary-custom rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                                <FaHome className="text-white fs-2" />
                                            </div>
                                            <Card.Title className="fw-bold text-secondary-custom">Home Automation</Card.Title>
                                            <Card.Text className="text-muted">
                                                Smart home integration for security, lighting, and climate control systems.
                                            </Card.Text>
                                            <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Container>
            </section>

            {/* Our Process Section */}
            <section className="py-5 bg-white position-relative">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <div className="text-center mb-5">
                                <h2 className="fw-bold text-secondary-custom">How We Get It Done</h2>
                                <p className="text-muted">Our proven 3-step process ensures quality and efficiency.</p>
                            </div>

                            <div className="d-flex flex-column position-relative">
                                {/* Vertical connector line */}
                                <div className="position-absolute top-0 start-50 translate-middle-x bg-secondary-custom" style={{ width: '2px', height: '100%', zIndex: 0 }}></div>

                                {[
                                    {
                                        icon: FaHandshake,
                                        title: "Consultation",
                                        desc: "We start with a thorough consultation to understand your needs, budget, and timeline.",
                                        color: "var(--secondary-color)"
                                    },
                                    {
                                        icon: FaCheckCircle,
                                        title: "Planning & Strategy",
                                        desc: "Our experts create a detailed roadmap, including permits, materials, and project milestones.",
                                        color: "var(--primary-color)"
                                    },
                                    {
                                        icon: FaClock,
                                        title: "Execution",
                                        desc: "Our team executes the plan with precision, maintaining clear communication throughout.",
                                        color: "var(--secondary-color)"
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="d-flex align-items-center mb-4 position-relative" style={{ zIndex: 1 }}>
                                        {/* Step Circle on Left */}
                                        <div className="d-flex align-items-center justify-content-center rounded-circle text-white shadow-lg"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: step.color,
                                                marginRight: '20px',
                                                fontSize: '1.5rem'
                                            }}>
                                            <step.icon />
                                        </div>

                                        <div className="flex-grow-1 p-4 bg-light rounded border shadow-sm">
                                            <h4 className="fw-bold text-secondary-custom mb-2">Step {index + 1}: {step.title}</h4>
                                            <p className="text-muted mb-0">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-5">
                                <Button
                                    variant="primary"
                                    className="px-5 py-3"
                                    style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}
                                >
                                    Start Your Project Today
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Services;
