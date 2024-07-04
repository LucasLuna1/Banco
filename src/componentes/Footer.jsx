import React from 'react';
import './style/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <ul>
          <li>
            <img src="https://imgs.search.brave.com/YsxhzdvxFhX4goBkMq3V-OTuHwJNiAdU6ICrjNgZuzI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yMTExLzIxMTE0/NjMucG5nP3NlbXQ9/YWlzX2h5YnJpZA"/>
            <a href="https://www.instagram.com/" className='ig' >Instagram</a>
            </li>
          <li> 
            <img src="https://imgs.search.brave.com/z0PUDwUC9MPpS7L-5iKUSnq8GhfFl_u2FuNFnJMSCmQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNDUvMTQ1ODAy/LnBuZz9zZW10PWFp/c19oeWJyaWQ" alt="" />
            <a href="https://www.facebook.com/" className='fb' >Facebook</a>
          </li>
          <li>
            <img className='logox' src="https://imgs.search.brave.com/X7z2CMt-JFEIKAV9twbhM3gvHBiPxZ7GHdkf2MNqvm8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bWFyY2FzLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8x/MS9Ud2l0dGVyLUxv/Z28tNTAweDI4MS5w/bmc" alt="" />
            <a href="https://x.com/" className='x' >Twitter</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
          <lu className="text-center">
            <p>&copy; {new Date().getFullYear()} Banco Royale. Todos los derechos reservados.</p>
          </lu>
      </div>
      <div className="footer-column">
        <ul className='direccion'>
            <li>Dirección: Camino de Perú, 103, Tucumán</li>
            <li>Teléfono: +54 9 381-488-9446</li>
            <li>Email: soporte@bancoroyale.com</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;