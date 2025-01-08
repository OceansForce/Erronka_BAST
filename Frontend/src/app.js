import './index.css';
import Index from './pages/index';
import Adopzioa from './pages/adopzio';
import Denda from './pages/denda';
import Galduta from './pages/galduta';
import Mapa from './pages/mapa';
import Saioa_sortu from './pages/saioa_sortu';
import Login from './pages/login';
import Ad_menua from './pages/Ad_menu';
import Ad_notiziak from './pages/Ad_notiziak';
import Ad_galduta from './pages/Ad_galduta';
import Ad_adoptatu from './pages/Ad_adoptatu';
import Profila from './pages/profila';

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
          <Route path="/saioa_sortu" element={<Saioa_sortu />} /> {/* Lo mismo aquí */}
          <Route path="/login" element={<Login />} /> {/* Lo mismo aquí */}
          <Route path="/Ad_menu" element={<Ad_menua />} /> {/* Lo mismo aquí */}
          <Route path="/Ad_notiziak" element={<Ad_notiziak />} /> {/* Lo mismo aquí */}
          <Route path="/Ad_galduta" element={<Ad_galduta />} /> {/* Lo mismo aquí */}
          <Route path="/Ad_adoptatu" element={<Ad_adoptatu />} /> {/* Lo mismo aquí */}
          <Route path="/Profila" element={<Profila/>}/>
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
