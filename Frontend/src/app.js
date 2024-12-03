import './index.css';
import Index from './pages/index';
import Adopzioa from './pages/adopzio';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Cambié Switch por Routes

function App() {
  return (
    <Router>
      <Routes> {/* Usa Routes en lugar de Switch */}
          <Route path="/" element={<Index />} /> {/* Usa el prop 'element' en lugar de 'component' */}
          <Route path="/adopzio" element={<Adopzioa />} /> {/* Lo mismo aquí */}

          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
