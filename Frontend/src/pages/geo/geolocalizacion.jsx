import React, { useState, useEffect } from 'react';

const Geolocalizacion = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '7e9f7bd5d8c2404686f0cc4e12c4ba86'; // Reemplaza esto con tu clave API de OpenCage

  useEffect(() => {
    // Verificamos si hay datos guardados en localStorage
    const savedAddress = localStorage.getItem('address');
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));  // Recuperamos y parseamos la dirección guardada
    }

    // Verificamos si el navegador soporta la API de geolocalización
    if ("geolocation" in navigator) {
      // Obtener la ubicación
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // Realizamos la solicitud de geocodificación inversa con OpenCage
          fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
              // Verificamos si la respuesta contiene resultados
              if (data.results.length > 0) {
                // Extraemos la ciudad y provincia
                const city = data.results[0].components.city || 'Ciudad no encontrada';
                const province = data.results[0].components.state || 'Provincia no encontrada';
                const newAddress = { city, province };

                setAddress(newAddress);
                // Guardamos la ciudad y provincia en localStorage
                localStorage.setItem('address', JSON.stringify(newAddress));
              } else {
                setAddress({ city: 'Ciudad no encontrada', province: 'Provincia no encontrada' });
              }
            })
            .catch((error) => {
              setError('Error al obtener la información de la ubicación');
            });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocalización no soportada en este navegador.");
    }
  }, []); // El efecto solo se ejecuta una vez al montar el componente

  return (
    <div>
      <h2>Geolocalización en React</h2>
      {location ? (
        <div>
          <p>Latitud: {location.latitude}</p>
          <p>Longitud: {location.longitude}</p>
          {address ? (
            <div>
              <p>Ciudad: {address.city}</p>
              <p>Provincia: {address.province}</p>
            </div>
          ) : (
            <p>Cargando dirección...</p>
          )}
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Cargando ubicación...</p>
      )}
    </div>
  );
};

export default Geolocalizacion;
