import React from 'react';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import prod1 from '../assets/product1.jpg';
import prod2 from '../assets/product2.jpg';
import prod3 from '../assets/product3.jpg';

const products = [
  { img: prod1, title: "Premium Tool Kit", price: "$149.99", desc: "High-grade materials ensuring durability and performance in all conditions." },
  { img: prod2, title: "Safety Gear Bundle", price: "$89.50", desc: "Professional-grade safety equipment for maximum protection on the job." },
  { img: prod3, title: "Pro Design Plans", price: "$49.00", desc: "Comprehensive blueprints and design schematics for your projects." },
  { img: prod1, title: "Industrial Drill Set", price: "$199.99", desc: "Heavy-duty power tools designed for professional use." },
  { img: prod2, title: "Construction Helmets", price: "$34.99", desc: "Certified safety helmets meeting all industry standards." },
  { img: prod3, title: "Blueprint Organizer", price: "$24.99", desc: "Durable cases to keep your plans organized and protected." }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

function CarouselComponent() {
  // Split products into groups of 3 for each carousel slide
  const chunks = [];
  for (let i = 0; i < products.length; i += 3) {
    chunks.push(products.slice(i, i + 3));
  }

  return (
    <section className="py-5 bg-light">
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
              Featured Products
            </motion.h2>
            <motion.p 
              className="text-muted"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Explore our premium selection of construction and safety products.
            </motion.p>
          </Col>
        </Row>

        <Carousel 
          indicators={true} 
          controls={true}
          interval={5000}
          pause="hover"
          className="product-carousel"
        >
          {chunks.map((chunk, chunkIndex) => (
            <Carousel.Item key={chunkIndex}>
              <Row className="g-4">
                {chunk.map((product, productIndex) => (
                  <Col md={4} key={productIndex}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={cardVariants}
                      custom={productIndex}
                    >
                      <Card 
                        className="h-100 border-0 shadow-lg overflow-hidden"
                        whileHover={{ 
                          scale: 1.03, 
                          y: -10,
                          boxShadow: "0 2rem 3rem rgba(0,0,0,0.2)"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="position-relative overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                          >
                            <Card.Img
                              variant="top"
                              src={product.img}
                              alt={product.title}
                              style={{ height: '200px', objectFit: 'cover' }}
                            />
                          </motion.div>
                          <div className="position-absolute top-0 start-0 w-100 h-100"
                            style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}></div>
                        </div>
                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="fw-bold text-secondary-custom">{product.title}</Card.Title>
                          <Card.Text className="flex-grow-1 text-muted">
                            {product.desc}
                          </Card.Text>
                          <div className="d-flex justify-content-between align-items-center mt-auto">
                            <motion.span 
                              className="fw-bold fs-4 text-primary-custom"
                              whileHover={{ scale: 1.1 }}
                            >
                              {product.price}
                            </motion.span>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                variant="primary"
                                size="sm"
                                style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}
                              >
                                View Details <FaArrowRight className="ms-2" />
                              </Button>
                            </motion.div>
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default CarouselComponent;