import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf, FaHeartbeat } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          el.classList.add('appear');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="contact" id="contact">
      <Container fluid className="contact-container">
        <Row className="banner-row fade-in-up">
          <Col className="banner">
            <Row className="d-flex justify-content-center align-items-center text-center">
              <Col xs={6} md={4} className="banner-item">
                <FaLeaf className="banner-icon" />
                <span className="banner-text">Suco Natural</span>
              </Col>
              <Col xs={6} md={4} className="banner-item">
                <FaHeartbeat className="banner-icon" />
                <span className="banner-text">Sem Calorias</span>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="contact-box fade-in-up">
          <Row className="contact-row">
            <Col xs={12}>
              <h5 className="contact-title">Nossos Contatos:</h5>
            </Col>
          </Row>
          <Row className="contact-row">
            <Col xs={12} md={6} className="contact-info">
              <h6>Escreva para nós</h6>
              <p>
                <a href="mailto:info@sucopuro.com">info@sucopuro.com</a>
              </p>
            </Col>
            <Col xs={12} md={6} className="contact-info">
              <h6>Ligue para nós</h6>
              <p>+85-999-999-999 <br /> +85 3000.3000</p>
              <h6>Nos encontre aqui</h6>
              <p>Rua dos Sabores, 123 <br /> Cidade do Sabor, Brasil</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
