import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './style/navbar.css';
import logo from './logo/logo.png';
import { Link } from 'react-router-dom';

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
          <Link to="/inicio" className="nav-link">Inicio</Link>
        </Nav>
        </Navbar.Brand>
        <Nav>
          <Link to="/crear-cuenta" className="nav-link">Crear Cuenta</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default ElNavbar;

