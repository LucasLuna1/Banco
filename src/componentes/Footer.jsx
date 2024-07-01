import React from 'react';
import logo from './logo/logo.png';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Columna 1</h4>
        <ul>
          <li><a href="#!">Enlace 1</a></li>
          <li><a href="#!">Enlace 2</a></li>
          <li><a href="#!">Enlace 3</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Columna 2</h4>
        <ul>
          <li><a href="#">Enlace 1</a></li>
          <li><a href="#">Enlace 2</a></li>
          <li><a href="#">Enlace 3</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Columna 3</h4>
        <ul>
          <li><a href="#">Enlace 1</a></li>
          <li><a href="#">Enlace 2</a></li>
          <li><a href="#">Enlace 3</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
