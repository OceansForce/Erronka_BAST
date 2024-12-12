
import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import { Link } from 'react-router-dom';

function Login() {
    const { t, i18n } = useTranslation();

    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);  // Cambia el idioma
    };

    return (
        <>
          <div  className='container flex  justify-center erdian'>
          <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-96 rounded-lg text-center border-black dark:border-transparent border-2'>
            <div className='w-full flex'>
              <div className='w-1/2'>
                
                <Link to="/">
                  <img className='w-2/4 bg-white px-5 rounded-full' src="/img/icons/arrow-left.svg"></img>
                </Link>
              </div>
              <div className='w-1/2 flex flex-row space-x-4 justify-end'>
                <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                <DarkModeToggle className='w-1/2' />
              </div>
              
            </div>
            <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>{t('menu:login')}</p>
            <form className='flex flex-col text-left'>
              <label className='font-semibold dark:text-white'>{t('saioa_sortu:email')}</label>
              <input className='mb-2 dark:border-primary border-black border-2 rounded-lg' type='text' required/>
              <label className='font-semibold dark:text-white'>{t('saioa_sortu:pasahitza')}</label>
              <input className='mb-2 dark:border-primary border-black border-2 rounded-lg' type='text' required/>
              <input className='bg-black text-white mt-2 p-2 rounded-lg' type='submit' value={t('saioa_sortu:input')}></input>
            </form>
          </div>
        </div>
        </>
    );

}

export default Login;