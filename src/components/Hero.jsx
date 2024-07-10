import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';
import juiceCan from '../assets/images/sucoLaranjaAnuncio.png'; 

function Hero() {
  return (
    <div className="hero" id="hero">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          <Col md={6} className="hero-text">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Refrescante Suco Natural</h1>
              <p>Sua dose diária de refrescancia</p>
              <Button variant="warning" size="lg" className="mr-3">Snack Now</Button>
              <Button variant="outline-warning" size="lg">Comprar Agora</Button>
            </motion.div>
          </Col>
          <Col md={6} className="hero-image">
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
