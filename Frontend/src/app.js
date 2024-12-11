import './index.css';
import Index from './pages/index';
import Adopzioa from './pages/adopzio';
import Denda from './pages/denda';
import Galduta from './pages/galduta';
import Mapa from './pages/mapa';
import Login from './pages/login';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Cambié Switch por Routes

function App() {
  return (
    <Router>
      <Routes> {/* Usa Routes en lugar de Switch */}
          <Route path="/" element={<Index />} /> {/* Usa el prop 'element' en lugar de 'component' */}
          <Route path="/adopzio" element={<Adopzioa />} /> {/* Lo mismo aquí */}
          <Route path="/denda" element={<Denda />} /> {/* Lo mismo aquí */}
          <Route path="/galduta" element={<Galduta />} /> {/* Lo mismo aquí */}
          <Route path="/mapa" element={<Mapa />} /> {/* Lo mismo aquí */}
          <Route path="/login" element={<Login />} /> {/* Lo mismo aquí */}

          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
