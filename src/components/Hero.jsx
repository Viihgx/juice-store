import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';
import juiceCan from '../assets/images/sucoLaranjaAnuncio.png'; 

function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero" id="hero">
      <Container fluid>
        <Row className="align-items-center justify-content-center text-center text-md-left">
          <Col xs={12} md={5} className="hero-text">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Refrescante Suco Natural</h1>
              <p>Sua dose diária de refrescância</p>
              <Button variant="warning" size="lg" className="mr-3" onClick={scrollToProducts}>
                Comprar Agora
              </Button>
            </motion.div>
          </Col>
          <Col xs={9} md={5} className="hero-image">
            <motion.img
              src={juiceCan}
              alt="Juice Can"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
