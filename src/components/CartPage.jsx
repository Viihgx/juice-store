import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
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
      <h2 className="cart-title">Meu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {cart.map((item) => (
            <Row key={item.id} className="cart-item">
              <Col xs={2}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
              </Col>
              <Col xs={4}>
                <h5>{item.name}</h5>
                <p>${item.price.toFixed(2)}</p>
              </Col>
              <Col xs={3} className="d-flex align-items-center">
                <Button variant="outline-secondary" size="sm" onClick={() => decrementQuantity(item.id)}><FaMinus /></Button>
                <span className="quantity">{item.quantity || 1}</span>
                <Button variant="outline-secondary" size="sm" onClick={() => incrementQuantity(item.id)}><FaPlus /></Button>
              </Col>
              <Col xs={2} className="d-flex align-items-center">
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}><FaTrash /></Button>
              </Col>
            </Row>
          ))}
          <div className="cart-total">
            <h4>Total: ${total.toFixed(2)}</h4>
            <Button variant="primary">Pagar ${total.toFixed(2)}</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
