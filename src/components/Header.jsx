import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ cartCount }) {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="header">
      <Navbar.Brand as={Link} to="/" className="logo">JuiceShop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/#hero" className="nav-link">Home</Nav.Link>
          <Nav.Link as={Link} to="/#introduction" className="nav-link">Sobre Nós</Nav.Link>
          <Nav.Link as={Link} to="/#benefits" className="nav-link">Benefícios</Nav.Link>
          <Nav.Link as={Link} to="/#products" className="nav-link">Produtos</Nav.Link>
          <Nav.Link as={Link} to="/#contact" className="nav-link">Contato</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/cart" className="nav-icon">
            <FaShoppingCart />
            <Badge pill bg="secondary" className="cart-badge">
              {cartCount}
            </Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
