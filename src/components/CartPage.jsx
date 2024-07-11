import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPlus, FaMinus, FaTrash, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ cart, setCart }) => {
  const incrementQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <Container className="cart-page">
      <Row className="cart-header">
        <Col xs={2} className="text-left">
          <Link to="/" className="back-button">
            <FaArrowLeft /> Voltar
          </Link>
        </Col>
        <Col xs={8} className="text-center">
          <h2 className="cart-title">Meu Carrinho</h2>
        </Col>
        <Col xs={2}></Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <div className="cart-items-container">
            {cart.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              cart.map((item) => (
                <Row key={item.id} className="cart-item">
                  <Col xs={4} sm={3} md={2}>
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </Col>
                  <Col xs={8} sm={5} md={4}>
                    <h5 className="cart-item-name">{item.name}</h5>
                    <p>${item.price.toFixed(2)}</p>
                  </Col>
                  <Col xs={8} sm={3} md={3} className="d-flex align-items-center">
                    <Button variant="outline-secondary" size="sm" onClick={() => decrementQuantity(item.id)}><FaMinus /></Button>
                    <span className="quantity">{item.quantity || 1}</span>
                    <Button variant="outline-secondary" size="sm" onClick={() => incrementQuantity(item.id)}><FaPlus /></Button>
                  </Col>
                  <Col xs={4} sm={1} md={2} className="d-flex align-items-center justify-content-end">
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}><FaTrash /></Button>
                  </Col>
                </Row>
              ))
            )}
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="cart-total">
            <h4>Total: ${total.toFixed(2)}</h4>
            <Button variant="primary">Pagar ${total.toFixed(2)}</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
