import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <div className="contact" id="contact">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: info@juiceshop.com</p>
            <p>Phone: +1234567890</p>
          </Col>
          <Col md={6}>
            <h5>Find Us</h5>
            <p>123 Juice Street, Flavor Town</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
