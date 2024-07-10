import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './Products.css';
import SucoMaca from '../assets/images/sucoMaca.png'; 
import SucoLaranja from '../assets/images/SucoLaranja.png'; 
import SucoLimao from '../assets/images/sucoLimao.png'; 

function Products() {
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
    <Container className="products" id="products" fluid>
      <Col>
        <h2 className="text-center fade-in-up">Our Best Selling Products</h2>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={6} lg={3} className="product-col fade-in-up">
            <Card className="product-card">
              <div className="image-container">
                <Card.Img variant="top" src={SucoMaca} className="product-image" />
              </div>
              <Card.Body>
                <Card.Title>Suco de Maçã</Card.Title>
                <Card.Text>$7.00</Card.Text>
                <Button variant="primary">
                  <FaShoppingCart style={{ marginRight: '10px' }} />
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="product-col fade-in-up">
            <Card className="product-card">
              <span className="badge-top-right">Mais Vendido</span>
              <div className="image-container">
                <Card.Img variant="top" src={SucoLaranja} className="product-image" />
              </div>
              <Card.Body>
                <Card.Title>Suco de Laranja</Card.Title>
                <Card.Text>$10.00</Card.Text>
                <Button variant="primary">
                  <FaShoppingCart style={{ marginRight: '10px' }} />
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="product-col fade-in-up">
            <Card className="product-card">
              <div className="image-container">
                <Card.Img variant="top" src={SucoLimao} className="product-image" />
              </div>
              <Card.Body>
                <Card.Title>Suco de Limão</Card.Title>
                <Card.Text>$7.00</Card.Text>
                <Button variant="primary">
                  <FaShoppingCart style={{ marginRight: '10px' }} />
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Products;
