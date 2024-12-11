import React from 'react';
import i18n from '../118n/menu';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './header/desplegable/lenguageSelector';
import DarkModeToggle from './header/dark-light/dark';
import User from './header/user/user';
import { Link } from 'react-router-dom';  // Asegúrate de importar Link


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
        <a href='#'>
          <img src='/img/logo.png' className='size-20' alt="Logo" />
        </a>
        
      </div>
      
      <div className='justify-center flex-center p-3 capitalize'>
        <ul className='list-none flex flex-col sm:flex-row sm:space-x-4 text-center sm:text-left'>
          <li><Link to="/" className="text-black dark:text-white font-semibold text-xl">{t('menu:hasiera')}</Link></li>
          <li><Link to="/galduta" className="text-black dark:text-white font-semibold text-xl">{t('menu:galduta')}</Link></li>
          <li><Link to="/mapa" className="text-black dark:text-white font-semibold text-xl">{t('menu:mapa')}</Link></li>
          <Adopzioa />
          <Denda />
        </ul>
      </div>

      <div className='flex items-center space-x-6'>
        {/* Componente LanguageSelector con la función changeLanguage como prop */}
        <LanguageSelector changeLanguage={changeLanguage} />
        <DarkModeToggle />
        <User />
        <button class="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-dark duration-300 p-2 rounded-md">
        <Link to="/login" className="hover:text-white text-black dark:text-white font-semibold text-xl">Login</Link>
        </button>
      </div>
      
    </div>
  );
};

export default Header;
