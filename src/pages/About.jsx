import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import teamMember1 from '../assets/team1.jpg';
import teamMember2 from '../assets/team2.jpg';
import teamMember3 from '../assets/team3.jpg';
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

function About() {
    return (
        <div>
            {/* Company History Section */}
            <section className="py-5 bg-white">
                <Container>
                    <Row className="align-items-center g-4">
                        <Col lg={6} className="order-2 order-lg-1">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInLeft}
                            >
                                <div className="mb-4">
                                    <motion.h2 
                                        className="fw-bold text-secondary-custom display-6"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        Our Journey Since 1998
                                    </motion.h2>
                                    <motion.div 
                                        className="w-25 bg-primary-custom h-1 rounded mb-4"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '25%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                    />
                                </div>
                                <motion.p 
                                    className="lead text-muted mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    Founded in a small garage with two tools and a dream, our company has grown into a trusted name in the industry.
                                    We started by focusing on residential repairs and quickly expanded our expertise to commercial projects.
                                </motion.p>
                                <motion.p 
                                    className="text-muted"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    Our commitment to quality, safety, and customer satisfaction has allowed us to serve over 1,500 happy clients
                                    and complete more than 800 successful projects. We believe that every job, big or small, deserves our full
                                    attention and expertise.
                                </motion.p>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant="outline-secondary"
                                        className="mt-3"
                                        style={{ borderColor: 'var(--secondary-color)', color: 'var(--secondary-color)' }}
                                    >
                                        Read Our Full Story
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </Col>
                        <Col lg={6} className="order-1 order-lg-2">
                            <motion.div
                                className="position-relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <motion.div 
                                    className="bg-light rounded-4 p-3 shadow-sm" 
                                    style={{ position: 'absolute', top: '20px', right: '-20px', width: '80%' }}
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <img src={work1} alt="Office" className="rounded w-100" style={{ objectFit: 'cover', aspectRatio: '16/9' }} />
                                </motion.div>
                                <motion.img
                                    src={teamMember1}
                                    alt="Company History"
                                    className="img-fluid rounded shadow-lg w-100"
                                    style={{ objectFit: 'cover', height: '400px' }}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Meet the Team Section */}
            <section className="py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <motion.h2 
                            className="fw-bold text-secondary-custom"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Meet the Team
                        </motion.h2>
                        <motion.p 
                            className="text-muted"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            The experienced professionals behind our success.
                        </motion.p>
                    </div>

                    <motion.div 
                        className="row g-4"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { name: "John Smith", role: "Founder & CEO", img: teamMember1 },
                            { name: "Sarah Johnson", role: "Project Manager", img: teamMember2 },
                            { name: "Michael Chen", role: "Lead Engineer", img: teamMember3 },
                            { name: "Emily Davis", role: "Customer Success", img: teamMember1 }
                        ].map((member, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <motion.div variants={fadeInUp}>
                                    <Card 
                                        className="h-100 border-0 shadow-sm text-center hover-shadow"
                                        whileHover={{ 
                                            scale: 1.03, 
                                            y: -10,
                                            boxShadow: "0 1rem 2rem rgba(0,0,0,0.15)"
                                        }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="position-relative overflow-hidden rounded-top" style={{ height: '200px' }}>
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    src={member.img}
                                                    className="object-fit-cover w-100 h-100"
                                                />
                                            </motion.div>
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <motion.div 
                                                    className="bg-primary-custom rounded-circle p-2 shadow text-white"
                                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                                >
                                                    <FaUser className="fs-4" />
                                                </motion.div>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="fw-bold text-secondary-custom">{member.name}</Card.Title>
                                            <Card.Subtitle className="mb-3 text-primary-custom fw-medium">{member.role}</Card.Subtitle>
                                            <Card.Text className="text-muted small">
                                                Expert in their field with over 10 years of hands-on experience in the industry.
                                            </Card.Text>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Button variant="outline-secondary" size="sm" className="rounded-pill">
                                                    Contact Profile
                                                </Button>
                                            </motion.div>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </Container>
            </section>

            {/* Past Works Gallery */}
            <section className="py-5 bg-white">
                <Container>
                    <div className="text-center mb-5">
                        <motion.h2 
                            className="fw-bold text-secondary-custom"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Our Masterpieces
                        </motion.h2>
                        <motion.p 
                            className="text-muted"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Showcasing some of our most recent and challenging projects.
                        </motion.p>
                    </div>

                    <div className="row g-4">
                        {[work1, work2, work3].map((img, index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                >
                                    <Card 
                                        className="border-0 shadow-sm h-100 overflow-hidden"
                                        whileHover={{ 
                                            scale: 1.02,
                                            y: -5,
                                            boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"
                                        }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="ratio ratio-16x9 position-relative">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    src={img}
                                                    className="object-fit-cover w-100 h-100"
                                                />
                                            </motion.div>
                                            <div className="position-absolute bottom-0 start-0 w-100 bg-gradient-to-t from-secondary-custom to-transparent p-4 text-white">
                                                <h5 className="fw-bold mb-1">Project #{index + 101}</h5>
                                                <p className="mb-0 small">Commercial Renovation • 2023</p>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-primary-custom text-white">Completed</span>
                                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                    <Button variant="outline-primary" size="sm">
                                                        View Project
                                                    </Button>
                                                </motion.div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </div>
                        ))}
                        {/* Extra card for grid balance */}
                        <div className="col-md-6 col-lg-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Card 
                                    className="border-0 shadow-sm h-100 bg-light d-flex flex-column align-items-center justify-content-center text-center p-5"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <motion.h3 
                                        className="text-secondary-custom fw-bold"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        +250
                                    </motion.h3>
                                    <p className="text-muted">Projects Completed</p>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button variant="outline-secondary" className="mt-3">
                                            See All Portfolio
                                        </Button>
                                    </motion.div>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default About;
