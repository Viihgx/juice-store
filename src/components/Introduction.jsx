import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Introduction.css';
import SucoMaca from '../assets/images/sucoMaca.png'; 
import SucoLaranja from '../assets/images/SucoLaranja.png'; 
import SucoLimao from '../assets/images/sucoLimao.png'; 

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Introduction() {
  return (
    <Container className="introduction" id="introduction" fluid>
      <Col>
        <Row>
          <Col>
            <motion.h2 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              Pureza e Sabor em Cada Gole
            </motion.h2>
            <motion.p 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              Oferecemos sucos naturais de alta qualidade com ingredientes frescos e saudáveis. Nossas embalagens ecológicas, feitas de materiais recicláveis, mostram nosso compromisso com a sustentabilidade e o meio ambiente.
            </motion.p>
          </Col>
        </Row>
        <Row className="justify-content-center image-row">
          <Col xs={4} sm={4} md={2} className="image-container">
            <motion.img 
              src={SucoMaca} 
              alt="Suco Maçã" 
              className="juice-image" 
              whileHover={{ scale: 1.1 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            />
          </Col>
          <Col xs={4} sm={4} md={2} className="image-container">
            <motion.img 
              src={SucoLaranja} 
              alt="Suco Laranja" 
              className="juice-image" 
              whileHover={{ scale: 1.1 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            />
          </Col>
          <Col xs={4} sm={4} md={2} className="image-container">
            <motion.img 
              src={SucoLimao} 
              alt="Suco Limão" 
              className="juice-image" 
              whileHover={{ scale: 1.1 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Introduction;
