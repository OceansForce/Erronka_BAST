import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de usar la versión correcta de react-dom para React 18
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';

// Usando React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);
