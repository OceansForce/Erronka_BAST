import './index.css';
import Index from './pages/index';
import Adopzioa from './pages/adopzio';
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
import Animalia_adoptatu from './pages/animalia_adoptatu';
import Animalia_galduta from './pages/animalia_galduta';
import Create_protektora from './pages/Create_protektora.jsx';
import Animalia_sortu from './pages/Animalia_sortu.js';
import Edit_animal from './pages/Edit_animal.js';

import NewsDetail from './pages/NewsDetail';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation  } from 'react-router-dom';  

import { initGA, logPageView } from './analytics/analytics';


function App() {

  const [address, setAddress] = useState(null);
  const location = useLocation();  // Obtén la ubicación actual
  console.log(location);

  useEffect(() => {
    try {
      initGA();  // Inicializa Google Analytics
      logPageView();  // Registra la vista de la página
    } catch (error) {
      console.error("Error al inicializar GA o registrar la vista de la página:", error);
    }
  }, []);
  

  useEffect(() => {
    // Cada vez que la ubicación (ruta) cambie, registra la vista de la página
    logPageView();
  }, [location]);  

  useEffect(() => {
    // Función de geolocalización
    const getGeolocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            // Reemplaza con tu API Key de OpenCage
            const apiKey = '7e9f7bd5d8c2404686f0cc4e12c4ba86';

            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`)
              .then((response) => response.json())
              .then((data) => {
                if (data.results.length > 0) {
                  const city = data.results[0].components.city || 'Ciudad no encontrada';
                  //console.log(data.results[0].components);
                  const province = data.results[0].components.province || 'Provincia no encontrada';
                  const newAddress = { city, province };
                  setAddress(JSON.stringify(newAddress));
                  localStorage.setItem('address', JSON.stringify(newAddress)); // Guardar en localStorage
                  const address = localStorage.getItem('address');
                  console.log("address: "+address);
                } else {
                  setAddress({ city: 'Ciudad no encontrada', province: 'Provincia no encontrada' });
                  localStorage.setItem('address', null); // Guardar en localStorage
                }
              })
              .catch((error) => {
                console.error('Error al obtener la información de la ubicación:', error);
              });
          },
          (error) => {
            console.error('Error al obtener la geolocalización:', error);
          }
        );
      } else {
        console.log("Geolocalización no soportada en este navegador.");
      }
    };

    getGeolocation(); // Ejecutar la función de geolocalización
  }, []);


  return (
    
    <Routes> 
      <Route path="/" element={<Index />} /> 
      <Route path="/adopzio" element={<Adopzioa />} /> 
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
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path='/Animalia_adoptatu/:id' element={<Animalia_adoptatu/>}/>
      <Route path='/Animalia_galduta/:id' element={<Animalia_galduta/>}/>
      <Route path='/Create_protektora' element={<Create_protektora/>}/>
      <Route path='/Animalia_sortu' element={<Animalia_sortu/>}/>
      <Route path='/Edit_animalia' element={<Edit_animal/>}/>
    </Routes>
    
          
  );
}

export default App;