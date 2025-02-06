import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ProvinciasYCiudades = ({ 
  selectedProvincia, 
  setSelectedProvincia, 
  selectedPueblo, 
  setSelectedPueblo 
}) => {

  const { t } = useTranslation();
  const [provincias, setProvincias] = useState([]);
  const [pueblos, setPueblos] = useState([]);

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
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  // Manejar cambio de provincia
  const handleProvinciaChange = (event) => {
    const provinciaSeleccionada = event.target.value;
    setSelectedProvincia(provinciaSeleccionada);
    console.log("Provincia seleccionada:", provinciaSeleccionada);

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

  // Manejar cambio de pueblo
  const handlePuebloChange = (event) => {
    const puebloSeleccionado = event.target.value;
    setSelectedPueblo(puebloSeleccionado);
    console.log("Pueblo seleccionado:", puebloSeleccionado);
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
