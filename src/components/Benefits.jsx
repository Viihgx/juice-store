import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf, FaAppleAlt, FaRecycle, FaSmile } from 'react-icons/fa';
import './Benefits.css';
import JuiceImage from '../assets/images/sucoLaranjaAnuncio.png';

function Benefits() {
  return (
    <Container className="benefits" id="benefits">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={JuiceImage} alt="Juice Can" className="benefit-image"/>
        </Col>
        <Col md={6}>
          <h2>Por que escolher nossos sucos?</h2>
          <ul className="benefit-list">
            <li><FaLeaf className="icon"/> Sem açúcar adicionado</li>
            <li><FaAppleAlt className="icon"/> Rico em vitaminas</li>
            <li><FaRecycle className="icon"/> Embalagem ecológica</li>
            <li><FaSmile className="icon"/> Sabor incomparável</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Benefits;
