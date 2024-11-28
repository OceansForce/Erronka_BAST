import React from 'react';
import i18n from '../118n/menu';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './header/desplegable/lenguageSelector';
import DarkModeToggle from './header/dark-light/dark'
import User from './header/user/user'

import Adopzioa  from './header/desplegable/adopzioa';
import Denda from './header/desplegable/denda';


const Header = () => {
  const { t, i18n } = useTranslation();

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Cambia el idioma
  };


  return (
    
    <div className='flex flex-col space-x-4 items-center justify-around w-full p-3 bg-primary dark:bg-dark md:flex-row'>
      <div >
        <img src='/img/logo.png' className='size-20' alt="Logo" />
      </div>
      
      <div className='justify-center flex-center p-3 capitalize'>
        <ul className='list-none flex flex-col sm:flex-row sm:space-x-4 text-center sm:text-left'>
          <li><a href="#" className="text-black dark:text-white font-semibold text-xl">{t('menu:hasiera')}</a></li>
          <li><a href='#' className="text-black dark:text-white font-semibold text-xl">{t('menu:galduta')}</a></li>
          <li><a href='#' className="text-black dark:text-white font-semibold text-xl">{t('menu:mapa')}</a></li>
          <Adopzioa />
          <Denda />
        </ul>
      </div>

      <div className='flex items-center space-x-6'>
        {/* Componente LanguageSelector con la función changeLanguage como prop */}
        <LanguageSelector changeLanguage={changeLanguage} />
        <DarkModeToggle />
        <User />
      </div>
      
    </div>
  );
};

export default Header;
