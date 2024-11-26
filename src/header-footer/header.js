import React from 'react';
import i18n from './118n/i18n';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './desplegable/lenguageSelector';  // Importamos el componente LanguageSelector

const Header = () => {
  const { t, i18n } = useTranslation();

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Cambia el idioma
  };

  return (
    <div className='flex space-x-4 items-center'>
      <img src='/img/logo.png' className='size-32' alt="Logo" />
      
      <div>
        <ul className='list-none flex space-x-4'>
          <li><a href='#'>{t('menu:hasiera')}</a></li>
          <li><a href='#'>{t('menu:galduta')}</a></li>
          <li><a href='#'>{t('menu:mapa')}</a></li>
          <li><a href='#'>{t('menu:adopzio')}</a></li>
          <li><a href='#'>{t('menu:denda')}</a></li>
        </ul>
      </div>

      {/* Componente LanguageSelector con la función changeLanguage como prop */}
      <LanguageSelector changeLanguage={changeLanguage} />
    </div>
  );
};

export default Header;
