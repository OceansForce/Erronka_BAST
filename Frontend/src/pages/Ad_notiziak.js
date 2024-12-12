import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import { Link } from 'react-router-dom';

function Ad_notiziak() {
    const { t, i18n } = useTranslation();

    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);  // Cambia el idioma
    };

    return(
        <>
           <div  className='container flex  justify-center erdian'>
          <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-full rounded-lg text-center border-black dark:border-transparent border-2'>
            <div className='w-full flex'>
                
                <Link to="/Ad_menu">
                  <img className='w-28 bg-white px-5 rounded-full' src="/img/icons/arrow-left.svg"></img>
                </Link>
              
                <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                    <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                    <DarkModeToggle className='w-1/2' />
                </div>
              
            </div>
            <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>{t('menu:Saioa_sortu')}</p>
            <form className='flex flex-col text-left'>
              <label className='font-semibold dark:text-white'>Titulo</label>
              <input className='mb-2 dark:border-primary border-black border-2 rounded-lg' type='text' required/>
              <label className='font-semibold dark:text-white'>Fecha</label>
              <input className='mb-2 dark:border-primary border-black border-2 rounded-lg' type='date' required/>
              <label className='font-semibold dark:text-white'>Irudia</label>
              <input className='mb-2 dark:border-primary border-black border-2 rounded-lg' type='file' maxLength={9} required/>

              <div className='flex flex-row w-auto'>
                <div className='flex flex-col w-1/2 mr-5'>
                    <label className='font-semibold dark:text-white'>ES-Parrafo 1</label>
                    <textarea  className='mb-2 dark:border-primary border-black border-2 rounded-lg' rows={6} required></textarea>
                    <label className='font-semibold dark:text-white'>ES-Parrafo 2</label>
                    <textarea  className='mb-2 dark:border-primary border-black border-2 rounded-lg' rows={6} required></textarea>
                </div>
                
                <div className='flex flex-col w-1/2'>
                <label className='font-semibold dark:text-white'>EUS-Parrafo 1</label>
                    <textarea  className='mb-2 dark:border-primary border-black border-2 rounded-lg' rows={6} required></textarea>
                    <label className='font-semibold dark:text-white'>EUS-Parrafo 2</label>
                    <textarea  className='mb-2 dark:border-primary border-black border-2 rounded-lg' rows={6} required></textarea>
                </div>
                
              </div>
              
              
              <input className='bg-black text-white mt-2 p-2 rounded-lg' type='submit' value={t('saioa_sortu:input')}></input>
            </form>
          </div>
        </div>
        </>
    );
}

export default Ad_notiziak;