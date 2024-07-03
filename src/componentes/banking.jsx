import React from 'react';
import './style/banking.css';

function BankingPage() {
  return (
    <div className="banking-container"> 
      <section className="banking-section">
        <h2 className="section-title">Recursos y Herramientas</h2>
        <ul>
          <li>Calculadora Financiera</li>
          <li>Tutoriales y Guías</li>
          <li>Noticias</li>
        </ul>
      </section>

      <section className="banking-section">
        <h2 className="section-title">Beneficios</h2>
        <ul>
          <li>Inversiones</li>
          <li>Préstamos</li>
          <li>Servicios</li>
          <li>Contactos</li>
          <li>Cuentas</li>
        </ul>
      </section>

      <section className="banking-section">
        <h2 className="section-title">Tarjetas</h2>
        <ul>
          <li>Tarjetas de Débito</li>
          <li>Tarjetas de Crédito</li>
        </ul>
      </section>
    </div>
  );
}

export default BankingPage;