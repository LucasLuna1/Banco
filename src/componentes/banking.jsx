import React from 'react';
import './style/banking.css';
import card1 from './foto/cards1.png';
import card2 from './foto/cards2.png';
import card3 from './foto/cards3.png';

function BankingPage() {
  return (
    <div className="banking-container"> 
      <section className="banking-section">
        <img src={card1}/>
      </section>

      <section className="banking-section">
        <img src={card2}/>
      </section>

      <section className="banking-section">
        <img src={card3}/>
      </section>
    </div>
  );
}

export default BankingPage;
