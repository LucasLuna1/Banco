import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './style/navbar.css';
import logo from './logo/logo.png';

const ElNavbar = () => {
  return (
     <Navbar className="navbar">
      <Container className="navbar-container">
        <Navbar.Brand href="#" className="navbar-brand">
          <img
            src={logo}
            className="logo"
          />
        <Nav className="nav-izq">
          <Nav.Link href="#" className="nav-link">Atención al Cliente</Nav.Link>
          <Nav.Link href="#" className="nav-link">Servicios</Nav.Link>
        </Nav>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#" className="nav-link">Iniciar Sesión</Nav.Link>
          <Nav.Link href="#crear-cuenta" className="nav-link">Crear Cuenta</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default ElNavbar;

