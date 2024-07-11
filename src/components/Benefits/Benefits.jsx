import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf, FaAppleAlt, FaRecycle, FaSmile } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Benefits.css';
import JuiceCup from '../../assets/images/JuiceCupOrange.png';

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Benefits() {
  return (
    <Container className="benefits" id="benefits" fluid>
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
              Por que escolher nossos sucos?
            </motion.h2>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} sm={4} md={5} className="benefit-image-col">
            <motion.img 
              src={JuiceCup} 
              alt="Juice Can" 
              className="benefit-image" 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            />
          </Col>
          <Col xs={12} md={4} className="benefit-list-col">
            <motion.ul 
              className="benefit-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <motion.li className="benefit-item" variants={itemVariants}>
                <FaLeaf className="icon"/> Sem açúcar adicionado, garantindo a doçura natural das frutas.
              </motion.li>
              <motion.li className="benefit-item" variants={itemVariants}>
                <FaAppleAlt className="icon"/> Rico em vitaminas essenciais para uma vida saudável.
              </motion.li>
              <motion.li className="benefit-item" variants={itemVariants}>
                <FaRecycle className="icon"/> Embalagem ecológica feita com materiais recicláveis.
              </motion.li>
              <motion.li className="benefit-item" variants={itemVariants}>
                <FaSmile className="icon"/> Sabor incomparável que agrada a todos os paladares.
              </motion.li>
            </motion.ul>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Benefits;
