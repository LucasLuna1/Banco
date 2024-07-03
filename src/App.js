import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ElNavbar from './componentes/navbar';
import Footer from './componentes/Footer';
import Principal from './componentes/principal';
import Banking from './componentes/banking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

reportWebVitals();
