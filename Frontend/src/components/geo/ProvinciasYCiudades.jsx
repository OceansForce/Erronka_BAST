import React, { useState, useEffect } from 'react';
import i18n from '../../118n/menu.js';
import { useTranslation } from 'react-i18next';


const ProvinciasYCiudades = () => {

  const { t, i18n } = useTranslation();

  const [provincias, setProvincias] = useState([]);
  const [pueblos, setPueblos] = useState([]);
  const [selectedProvincia, setSelectedProvincia] = useState('');
  const [selectedPueblo, setSelectedPueblo] = useState('');

  // Cargar los datos del JSON
  useEffect(() => {
    fetch('https://opendata.euskadi.eus/contenidos/ds_recursos_turisticos/pueblos_euskadi_turismo/opendata/pueblos.json')
      .then((response) => response.json())
      .then((data) => {
        // Creamos un objeto que agrupe los pueblos por provincia
        const provinciasPueblos = {};

        Object.values(data).forEach((pueblo) => {
          const territorio = pueblo.territory.split(' ')[0]; // Tomamos solo el primer valor del territorio
          const nombrePueblo = pueblo.documentName;

          // Si no existe la clave para esta provincia, la creamos
          if (!provinciasPueblos[territorio]) {
            provinciasPueblos[territorio] = [];
          }

          provinciasPueblos[territorio].push(nombrePueblo);
        });

        // Guardamos las provincias en el estado
        setProvincias(Object.keys(provinciasPueblos));
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  // Manejar el cambio de provincia
  const handleProvinciaChange = (event) => {
    const provinciaSeleccionada = event.target.value;
    setSelectedProvincia(provinciaSeleccionada);

    // Filtramos los pueblos correspondientes a la provincia seleccionada
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

  // Manejar el cambio de pueblo
  const handlePuebloChange = (event) => {
    setSelectedPueblo(event.target.value);
  };

  return (
    <div>
      {/* <h2>Selecciona una provincia y pueblo de Euskadi</h2> */}

      {/* Selector de Provincias */}
      <p className='font-semibold dark:text-white'>{t('createProtektora:Probintzia')}</p>
      <select value={selectedProvincia} onChange={handleProvinciaChange}>
        <option value="">{t('createProtektora:ProbintziaAukeratu')}</option>
        {provincias.map((provincia, index) => (
          <option key={index} value={provincia}>
            {provincia}
          </option>
        ))}
      </select>

      {/* Si se ha seleccionado una provincia, mostramos el slider de pueblos */}
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

      {/* Mostrar el pueblo seleccionado
      {selectedPueblo && <p>Has seleccionado: {selectedPueblo}</p>} */}
    </div>
  );
};

export default ProvinciasYCiudades;
