import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './Products.css';
import SucoMaca from '../assets/images/sucoMaca.png'; 
import SucoLaranja from '../assets/images/SucoLaranja.png'; 
import SucoLimao from '../assets/images/sucoLimao.png'; 

function Products({ addToCart }) {
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

  const products = [
    { id: 1, name: 'Suco de Maçã', price: 7.00, image: SucoMaca },
    { id: 2, name: 'Suco de Laranja', price: 10.00, image: SucoLaranja },
    { id: 3, name: 'Suco de Limão', price: 7.00, image: SucoLimao }
  ];

  return (
    <Container className="products" id="products" fluid>
      <Col>
        <h2 className="text-center fade-in-up">Compre nossos sucos saborosos</h2>
        <Row className="d-flex justify-content-center">
          {products.map((product) => (
            <Col xs={12} sm={6} lg={3} className="product-col fade-in-up" key={product.id}>
              <Card className="product-card">
                {product.name === 'Suco de Laranja' && <span className="badge-top-right">Mais Vendido</span>}
                <div className="image-container">
                  <Card.Img variant="top" src={product.image} className="product-image" />
                </div>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>${product.price.toFixed(2)}</Card.Text>
                  <Button xs={12} sm={6} lg={3} variant="primary" onClick={() => addToCart(product)}>
                    <FaShoppingCart style={{ marginRight: '10px' }} />
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Container>
  );
}

export default Products;
