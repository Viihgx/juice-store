import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Introduction.css';
import SucoMaca from '../assets/images/sucoMaca.png'; 
import SucoLaranja from '../assets/images/SucoLaranja.png'; 
import SucoLimao from '../assets/images/sucoLimao.png'; 

function Introduction() {
  return (
    <Container className="introduction" id="introduction" fluid>
        <Col>
      <Row>
        <Col>
          <h2>Descubra seu suco favorito</h2>
          <p>Nossos sucos são feitos com as melhores frutas e oferecem uma experiência refrescante.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={2} className="image-container">
          <img src={SucoMaca} alt="Suco Maçã" className="juice-image" />
        </Col>
        <Col md={2} className="image-container">
          <img src={SucoLaranja} alt="Suco Laranja" className="juice-image" />
        </Col>
        <Col md={2} className="image-container">
          <img src={SucoLimao} alt="Suco Limão" className="juice-image" />
        </Col>
      </Row>
      </Col>
    </Container>
  );
}

export default Introduction;
