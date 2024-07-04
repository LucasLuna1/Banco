import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ElNavbar from './componentes/navbar';
import Footer from './componentes/Footer';
import Principal from './componentes/principal';
import FormularioCuenta from './componentes/FormularioCuenta';
import Banking from './componentes/banking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <ElNavbar />
        <Routes>
          <Route path="inicio" element={
            <>
              <Principal />
              <Banking />
            </>
          } />
          <Route path="/crear-cuenta" element={<FormularioCuenta />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
