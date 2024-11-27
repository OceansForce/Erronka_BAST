import React from 'react';
import i18n from '../118n/menu';
import { useTranslation } from 'react-i18next';



const Footer = () => {
  const { t, i18n } = useTranslation();


  return (
    <div className='flex flex-col space-x-4 items-center justify-around w-full p-3 bg-primary dark:bg-dark md:flex-row'>
      
    </div>
  );
};

export default Footer;
