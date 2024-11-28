import React from 'react';
import i18n from '../118n/menu';
import { useTranslation } from 'react-i18next';
import Profile from './footer/profile-contact/profile';
import Datuak from './footer/datuak';
import Formulario from './footer/formulario';



const Footer = () => {
  const { t, i18n } = useTranslation();


  return (
    <div className='space-x-4 w-full p-16 bg-primary dark:bg-dark md:flex-row'>

        <Datuak />
        <Formulario />

      <div className='flex flex-row justify-between mt-16 text-neutral-700 dark:text-gray-300'>
        <div className='w-1/4 text-center'>
          <p>Typeface by Manex and Julen</p>
          <div className='space-x-4'>
            <a href='#'>© 2024</a>
            <a href='#'>Data Privacy</a>
            <a href='#'>Imprint</a>
          </div>
          
        </div>
        <div className='w-1/4 '>
          <Profile />
        </div>
        <div className='w-1/4'></div>
      </div>
      
    </div>
  );
};

export default Footer;
