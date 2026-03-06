import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import teamMember1 from '../assets/team1.jpg';
import teamMember2 from '../assets/team2.jpg';
import teamMember3 from '../assets/team3.jpg';
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';

function About() {
    return (
        <div>
            {/* Company History Section */}
            <section className="py-5 bg-white">
                <Container>
                    <Row className="align-items-center g-4">
                        <Col lg={6} className="order-2 order-lg-1">
                            <div className="mb-4">
                                <h2 className="fw-bold text-secondary-custom display-6">Our Journey Since 1998</h2>
                                <div className="w-25 bg-primary-custom h-1 rounded mb-4"></div>
                            </div>
                            <p className="lead text-muted mb-4">
                                Founded in a small garage with two tools and a dream, our company has grown into a trusted name in the industry.
                                We started by focusing on residential repairs and quickly expanded our expertise to commercial projects.
                            </p>
                            <p className="text-muted">
                                Our commitment to quality, safety, and customer satisfaction has allowed us to serve over 1,500 happy clients
                                and complete more than 800 successful projects. We believe that every job, big or small, deserves our full
                                attention and expertise.
                            </p>
                            <Button
                                variant="outline-secondary"
                                className="mt-3"
                                style={{ borderColor: 'var(--secondary-color)', color: 'var(--secondary-color)' }}
                            >
                                Read Our Full Story
                            </Button>
                        </Col>
                        <Col lg={6} className="order-1 order-lg-2">
                            <div className="position-relative">
                                <div className="bg-light rounded-4 p-3 shadow-sm" style={{ position: 'absolute', top: '20px', right: '-20px', width: '80%' }}>
                                    <img src={work1} alt="Office" className="rounded w-100" style={{ objectFit: 'cover', aspectRatio: '16/9' }} />
                                </div>
                                <img
                                    src={teamMember1}
                                    alt="Company History"
                                    className="img-fluid rounded shadow-lg w-100"
                                    style={{ objectFit: 'cover', height: '400px' }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Meet the Team Section */}
            <section className="py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-secondary-custom">Meet the Team</h2>
                        <p className="text-muted">The experienced professionals behind our success.</p>
                    </div>

                    <Row className="g-4">
                        {[
                            { name: "John Smith", role: "Founder & CEO", img: teamMember1 },
                            { name: "Sarah Johnson", role: "Project Manager", img: teamMember2 },
                            { name: "Michael Chen", role: "Lead Engineer", img: teamMember3 },
                            { name: "Emily Davis", role: "Customer Success", img: teamMember1 } // Reusing placeholder
                        ].map((member, index) => (
                            <Col md={6} lg={3} key={index}>
                                <Card className="h-100 border-0 shadow-sm text-center hover-shadow">
                                    <div className="position-relative overflow-hidden rounded-top" style={{ height: '200px' }}>
                                        <Card.Img
                                            variant="top"
                                            src={member.img}
                                            className="object-fit-cover w-100 h-100"
                                        />
                                        <div className="position-absolute top-50 start-50 translate-middle">
                                            <div className="bg-primary-custom rounded-circle p-2 shadow text-white">
                                                <FaUser className="fs-4" />
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="fw-bold text-secondary-custom">{member.name}</Card.Title>
                                        <Card.Subtitle className="mb-3 text-primary-custom fw-medium">{member.role}</Card.Subtitle>
                                        <Card.Text className="text-muted small">
                                            Expert in their field with over 10 years of hands-on experience in the industry.
                                        </Card.Text>
                                        <Button variant="outline-secondary" size="sm" className="rounded-pill">
                                            Contact Profile
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Past Works Gallery */}
            <section className="py-5 bg-white">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-secondary-custom">Our Masterpieces</h2>
                        <p className="text-muted">Showcasing some of our most recent and challenging projects.</p>
                    </div>

                    <Row className="g-4">
                        {[work1, work2, work3].map((img, index) => (
                            <Col md={6} lg={4} key={index}>
                                <Card className="border-0 shadow-sm h-100 overflow-hidden group">
                                    <div className="ratio ratio-16x9 position-relative">
                                        <Card.Img
                                            variant="top"
                                            src={img}
                                            className="object-fit-cover w-100 h-100"
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 bg-gradient-to-t from-secondary-custom to-transparent p-4 text-white">
                                            <h5 className="fw-bold mb-1">Project #{index + 101}</h5>
                                            <p className="mb-0 small">Commercial Renovation • 2023</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="badge bg-primary-custom text-white">Completed</span>
                                            <Button variant="outline-primary" size="sm" className="btn-sm">
                                                View Project
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        {/* Extra card for grid balance */}
                        <Col md={6} lg={4}>
                            <Card className="border-0 shadow-sm h-100 bg-light d-flex flex-column align-items-center justify-content-center text-center p-5">
                                <h3 className="text-secondary-custom fw-bold">+250</h3>
                                <p className="text-muted">Projects Completed</p>
                                <Button variant="outline-secondary" className="mt-3">
                                    See All Portfolio
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default About;
