import React from 'react';
import i18n from './118n/i18n';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Cambia el idioma
  };

  return (
    <div>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('eu')}>Euskera</button>
      
      <div>
        <ul>
            <li>{t('menu:hasiera')}</li>
            <li>{t('menu:galduta')}</li>
            <li>{t('menu:mapa')}</li>
            <li>{t('menu:adopzio')}</li>
            <li>{t('menu:denda')}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
