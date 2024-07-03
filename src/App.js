import React from 'react';
import './App.css';
import ElNavbar from './componentes/navbar';
import Footer from './componentes/Footer';
import Principal from './componentes/principal';
import Banking from './componentes/banking';

function App() {
  return (
    <div className="App">
      <ElNavbar />
      <Principal />
      <Banking />
      <Footer />
    </div>
  );
}

export default App;



