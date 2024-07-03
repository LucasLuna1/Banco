// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormularioCuenta from './componentes/FormularioCuenta';
import reportWebVitals from '../src/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormularioCuenta />
  </React.StrictMode>
);
reportWebVitals();
