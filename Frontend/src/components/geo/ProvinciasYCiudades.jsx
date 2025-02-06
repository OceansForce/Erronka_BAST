import React, { useState, useEffect } from 'react';
import i18n from '../../118n/menu.js';
import { useTranslation } from 'react-i18next';


const ProvinciasYCiudades = () => {

  const { t, i18n } = useTranslation();

  const [provincias, setProvincias] = useState([]);
  const [pueblos, setPueblos] = useState([]);
  const [selectedProvincia, setSelectedProvincia] = useState('');
  const [selectedPueblo, setSelectedPueblo] = useState('');

  useEffect(() => {
    fetch('https://opendata.euskadi.eus/contenidos/ds_recursos_turisticos/pueblos_euskadi_turismo/opendata/pueblos.json')
      .then((response) => response.json())
      .then((data) => {
       
        const provinciasPueblos = {};

        Object.values(data).forEach((pueblo) => {
          const territorio = pueblo.territory.split(' ')[0]; 
          const nombrePueblo = pueblo.documentName;

          
          if (!provinciasPueblos[territorio]) {
            provinciasPueblos[territorio] = [];
          }

          provinciasPueblos[territorio].push(nombrePueblo);
        });

        setProvincias(Object.keys(provinciasPueblos));
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  
  const handleProvinciaChange = (event) => {
    const provinciaSeleccionada = event.target.value;
    setSelectedProvincia(provinciaSeleccionada);

    if (provinciaSeleccionada) {
      fetch('https://opendata.euskadi.eus/contenidos/ds_recursos_turisticos/pueblos_euskadi_turismo/opendata/pueblos.json')
        .then((response) => response.json())
        .then((data) => {
          const pueblosProvincia = Object.values(data)
            .filter((pueblo) => pueblo.territory.split(' ')[0] === provinciaSeleccionada)
            .map((pueblo) => pueblo.documentName);

          setPueblos(pueblosProvincia);
        });
    } else {
      setPueblos([]);
    }
  };


  const handlePuebloChange = (event) => {
    setSelectedPueblo(event.target.value);
  };

  return (
    <div>

      <p className='font-semibold dark:text-white'>{t('createProtektora:Probintzia')}</p>
      <select value={selectedProvincia} onChange={handleProvinciaChange}>
        <option value="">{t('createProtektora:ProbintziaAukeratu')}</option>
        {provincias.map((provincia, index) => (
          <option key={index} value={provincia}>
            {provincia}
          </option>
        ))}
      </select>

     
      {selectedProvincia && (
        <>
        <p className='font-semibold dark:text-white'>{t('createProtektora:Hiria')}</p>
        <select value={selectedPueblo} onChange={handlePuebloChange}>
            <option value="">{t('createProtektora:HiriaAukeratu')}</option>
            {pueblos.map((pueblo, index) => (
              <option key={index} value={pueblo}>
                {pueblo}
              </option>
            ))}
          </select>
        </>
      )}

    </div>
  );
};

export default ProvinciasYCiudades;
