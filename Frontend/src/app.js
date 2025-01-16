import './index.css';
import Index from './pages/index';
import Adopzioa from './pages/adopzio';
import Denda from './pages/denda';
import Galduta from './pages/galduta';
import Mapa from './pages/mapa';
import Saioa_sortu from './pages/saioa_sortu';
import Login from './pages/login';
import Ad_menua from './pages/Ad_menu';
import Ad_notizia_panela from './pages/Ad_notizia_panela';
import Ad_notiziak from './pages/Ad_notiziak';
import Ad_galduta from './pages/Ad_galduta';
import Ad_adoptatu from './pages/Ad_adoptatu';
import Profila from './pages/profila';
import Ad_notiziak_aditatu from './pages/Ad_notiziak_aditatu';
import Ad_erabiltzaileak from './pages/Ad_erabiltzaileak';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  

function App() {
  return (
    <Router>
      <Routes> 
          <Route path="/" element={<Index />} /> 
          <Route path="/adopzio" element={<Adopzioa />} /> 
          <Route path="/denda" element={<Denda />} /> 
          <Route path="/galduta" element={<Galduta />} /> 
          <Route path="/mapa" element={<Mapa />} /> 
          <Route path="/saioa_sortu" element={<Saioa_sortu />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/Ad_menu" element={<Ad_menua />} />
          <Route path="/Ad_notizia_panela" element={<Ad_notizia_panela />} /> 
          <Route path="/Ad_notiziak" element={<Ad_notiziak />} /> 
          <Route path="/Ad_notiziak_aditatu" element={<Ad_notiziak_aditatu/>}/>
          <Route path="/Ad_galduta" element={<Ad_galduta />} /> 
          <Route path="/Ad_adoptatu" element={<Ad_adoptatu />} /> 
          <Route path='/Ad_erabiltzaileak' element={<Ad_erabiltzaileak/>}/>
          <Route path="/Profila" element={<Profila/>}/>
      </Routes>
    </Router>
  );
}

export default App;