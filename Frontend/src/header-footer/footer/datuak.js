import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../118n/menu';

const Datuak = () => {
  const { t, i18n } = useTranslation();

  
  return (
    <div className='flex flex-col  text-center md:text-start md:flex-row justify-around'>
        <div>
          <p className='text-neutral-700 dark:text-gray-400 text-lg mt-6 sm:mt-0'>
          {t('datuak:contact')}
          </p>
          <p className='dark:text-slate-300'>maranzadieg23wg@ikzubirimanteo.com</p>
          <p className='dark:text-slate-300'>jgarciama23wg@ikzubirimanteo.com</p>
          
        </div>
        <div className=''>
          <p className='text-neutral-700 text-lg dark:text-gray-400 mt-6 sm:mt-0'>
          {t('datuak:rrss')}
          </p>
          <div className='flex row justify-center items-center pt-2'><img src="/img/facebook-color-svgrepo-com.svg" style={{width: "35px"}} /><a href='#' className='dark:text-slate-300 pl-2'>Facebook</a></div><br/>
          <div className='flex row justify-center items-center'><img src="/img/linkedin-icon-svgrepo-com.svg" style={{width: "35px"}}/><a href='#' className='dark:text-slate-300 pl-2'>Linkedin</a></div><br/>
          <div className='flex row justify-center items-center'><img src="/img/instagram-1-svgrepo-com.svg" style={{width: "40px"}}/><a href='#' className='dark:text-slate-300 pl-2'>Instagram</a></div><br/>
          <div className='flex row justify-center items-center'><img src="/img/icons8-x.svg" style={{width: "40px"}}/><a href='#' className='dark:text-slate-300 pl-2'>X</a></div>
        </div>
        <div>
          <p className='text-neutral-700 text-lg dark:text-gray-400 mt-6 sm:mt-0'>
          {t('datuak:oficinas')}
          </p>
          <p className='dark:text-slate-300'>IES Xabier Zubiri Manteo BHI</p>
          <p className='dark:text-slate-300'>C. Jose Miguel Barandiaran, 10-12</p>
          <p className='dark:text-slate-300'>20001 Donostia, Euskal Herria</p>
        </div>
        <div>
          <p className='text-neutral-700 text-lg dark:text-gray-400 mt-6 sm:mt-0'>
          {t('datuak:horarios')}
          </p>
          <p className='dark:text-slate-300'>{t('datuak:hora')}</p>
          <p className='dark:text-slate-300'>{t('datuak:hora2')}</p>
          
        </div>
      </div>
  );
};

export default Datuak;
