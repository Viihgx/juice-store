import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
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
    <footer className="footer">
      <div className='container-footer fade-in'>
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center text-center">
            <Col xs={12} md={4} className="footer-item">
              <a href="/terms">Termos & Condições</a>
            </Col>
            <Col xs={12} md={4} className="footer-item">
              <span>© 2024 SucoPuro. Todos os direitos reservados.</span>
            </Col>
            <Col xs={12} md={4} className="footer-item">
              <a href="/privacy-policy">Política de Privacidade</a>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
