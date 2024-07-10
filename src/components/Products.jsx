import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Products() {
  return (
    <Container className="products" id="products">
      <h2>Our Best Selling Products</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/juice1.png" />
            <Card.Body>
              <Card.Title>Orange Juice</Card.Title>
              <Card.Text>$4.00</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/juice2.png" />
            <Card.Body>
              <Card.Title>Apple Juice</Card.Title>
              <Card.Text>$4.50</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/juice3.png" />
            <Card.Body>
              <Card.Title>Grape Juice</Card.Title>
              <Card.Text>$5.00</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
