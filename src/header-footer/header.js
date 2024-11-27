import React from 'react';
import i18n from './118n/i18n';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './desplegable/lenguageSelector';
import DarkModeToggle from './dark-light/dark'
import User from './user/user'

import Adopzioa  from './desplegable/adopzioa';
import Denda from './desplegable/denda';


const Header = () => {
  const { t, i18n } = useTranslation();

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Cambia el idioma
  };

  return (
    <div className='flex space-x-4 items-center justify-around w-full'>
      <div >
        <img src='/img/logo.png' className='size-32' alt="Logo" />
      </div>
      
      <div className='justify-center flex-center'>
        <ul className='list-none flex space-x-4'>
          <li><a href="#" className="text-black dark:text-white">{t('menu:hasiera')}</a></li>
          <li><a href='#' className="text-black dark:text-white">{t('menu:galduta')}</a></li>
          <li><a href='#' className="text-black dark:text-white">{t('menu:mapa')}</a></li>
          <Adopzioa />
          <Denda />
        </ul>
      </div>

      <div className='flex'>
        {/* Componente LanguageSelector con la función changeLanguage como prop */}
        <LanguageSelector changeLanguage={changeLanguage} />
        <DarkModeToggle />
        <User />
      </div>
      
    </div>
  );
};

export default Header;
