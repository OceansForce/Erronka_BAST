import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';  // Asegúrate de importar Link


const Adopzioa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  // Alterna la visibilidad del menú cuando el ratón entra o sale
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className="relative language-selector z-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <li className='flex items-center justify-center z-10'>
        <div className='flex items-center font-semibold text-xl text-center'>
          <Link to="/adopzio" className="text-black dark:text-white">
            {t('menu:adopzio')}
          </Link>
        </div>
      </li>


      
    </div>
  );
};

export default Adopzioa;
