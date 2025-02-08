import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ProvinciasYCiudades = ({ 
  selectedProvincia, 
  setSelectedProvincia, 
  selectedPueblo, 
  setSelectedPueblo,
  disabled // Recibe el estado de deshabilitación
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
    if (disabled) return; // Evita cambios si está deshabilitado
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

  // Manejar cambio de pueblo
  const handlePuebloChange = (event) => {
    if (disabled) return; // Evita cambios si está deshabilitado
    setSelectedPueblo(event.target.value);
  };

  return (
    <div>
      <p className='font-semibold dark:text-white'>{t('createProtektora:Probintzia')}</p>
      <select 
        value={selectedProvincia} 
        onChange={handleProvinciaChange} 
        disabled={disabled} 
        className={`border-2 rounded-lg p-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {selectedProvincia ? (
            <option value={selectedProvincia} key={selectedProvincia}>
                {selectedProvincia}
            </option>
        ) : (
            <option value="" disabled>
                {t('createProtektora:ProbintziaAukeratu')}
            </option>
        )}
        {provincias.map((provincia, index) => (
          <option key={index} value={provincia}>
            {provincia}
          </option>
        ))}
      </select>

      {selectedProvincia && (
        <>
          <p className='font-semibold dark:text-white'>{t('createProtektora:Hiria')}</p>
          <select 
            value={selectedPueblo} 
            onChange={handlePuebloChange} 
            disabled={disabled} 
            className={`border-2 rounded-lg p-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {selectedPueblo ? (
                <option value={selectedPueblo} key={selectedPueblo}>
                    {selectedPueblo}
                </option>
            ) : (
                <option value="" disabled>
                    {t('createProtektora:HiriaAukeratu')}
                </option>
            )}

            {pueblos.map((pueblo, index) => (
                <option key={index} value={pueblo}>
                    {pueblo}
                </option>
            ))}

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
