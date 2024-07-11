import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import LogoImage from '../assets/images/LogoJuice.png';

function Header({ cartCount }) {
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="header">
      <Navbar.Brand className="logo" onClick={() => handleNavClick('#hero')}>
        <img src={LogoImage} alt="JuiceShop Logo" className="logo-image" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link onClick={() => handleNavClick('#hero')} className="nav-link">Home</Nav.Link>
          <Nav.Link onClick={() => handleNavClick('#introduction')} className="nav-link">Sobre Nós</Nav.Link>
          <Nav.Link onClick={() => handleNavClick('#benefits')} className="nav-link">Benefícios</Nav.Link>
          <Nav.Link onClick={() => handleNavClick('#products')} className="nav-link">Produtos</Nav.Link>
          <Nav.Link onClick={() => handleNavClick('#contact')} className="nav-link">Contato</Nav.Link>
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
