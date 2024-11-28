import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../118n/menu';

const Datuak = () => {
  const { t, i18n } = useTranslation();

  
  return (
    <div className='flex flex-col items-center text-center md:text-start md:flex-row justify-around'>
        <div>
          <p className='text-neutral-700 dark:text-gray-400 text-lg mt-6 sm:mt-0'>
          {t('datuak:contact')}
          </p>
          <p className='dark:text-slate-300'>guts@berserk.com</p>
          <p className='dark:text-slate-300'>griffith@berserk.com</p>
          
        </div>
        <div>
          <p className='text-neutral-700 text-lg dark:text-gray-400 mt-6 sm:mt-0'>
          {t('datuak:rrss')}
          </p>
          <a href='#' className='dark:text-slate-300'>Linkedin</a><br/>
          <a href='#' className='dark:text-slate-300'>Instagram</a><br/>
          <a href='#' className='dark:text-slate-300'>X</a>
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
