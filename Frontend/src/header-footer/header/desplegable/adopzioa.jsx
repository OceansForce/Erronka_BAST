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
          <img className='size-3.5 dark:hidden' src='/img/icons/menu/gezia.svg'/>
          <img className='size-3.5 hidden dark:block' src='/img/icons/menu/gezia_dark.svg'/>
        </div>
      </li>


      {isOpen && (
        <div className="absolute left-0 pt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md z-10">
          <ul className="list-none p-2">
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#" className="flex items-center">
                <img className="size-11 rounded-full" src="/img/icons/animals/adopta_perro.gif" />
                <h4 className="ml-3">{t('adopzio:txakurra')}</h4>
              </a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#" className="flex items-center">
                <img className="size-11 rounded-full" src="/img/icons/animals/adopta_ppp.gif" />
                <h4 className="ml-3">{t('adopzio:ppp')}</h4>
              </a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#" className="flex items-center">
                <img className="size-11 rounded-full" src="/img/icons/animals/adopta_gato-1.gif" />
                <h4 className="ml-3">{t('adopzio:katua')}</h4>
              </a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#" className="flex items-center">
                <img className="size-11 rounded-full" src="/img/icons/animals/adopta_otros.gif" />
                <h4 className="ml-3">{t('adopzio:Besteak')}</h4>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Adopzioa;
