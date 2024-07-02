import React from 'react';
import logo from './logo/logo.png';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <ul>
          <li><a href="#!">Instagram</a></li>
          <li><a href="#!">Facebook</a></li>
          <li><a href="#!">Twitter</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li>Copyrigth</li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li>Informacion</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;