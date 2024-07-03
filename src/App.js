import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ElNavbar from './componentes/navbar';
import Footer from './componentes/Footer';
import Principal from './componentes/principal';
import Banking from './componentes/banking';

function App() {
  return (
    <Router>
      <div className="App">
        <ElNavbar />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/banking" element={<Banking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




