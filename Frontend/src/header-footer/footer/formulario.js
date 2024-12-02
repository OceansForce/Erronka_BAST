import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../118n/menu';

const Formulario = () => {
    const { t, i18n } = useTranslation();

  
  return (
    <div className='flex flex-row justify-around'>
        <div class="p-4 mx-auto max-w-xl font-[sans-serif]">
            <h1 class="text-3xl text-gray-800 font-extrabold text-center dark:text-gray-300">{t('formulario:harremanetan')}</h1>
            <form class="mt-8 space-y-4">
                <input type='text' placeholder={t('formulario:name')}
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 dark:bg-black dark:text-white text-sm outline-blue-500" />
                <input type='email' placeholder={t('formulario:email')}
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 dark:bg-black dark:text-white text-sm outline-blue-500" />
                <input type='text' placeholder={t('formulario:subjetc')}
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 dark:bg-black dark:text-white text-sm outline-blue-500" />
                <textarea placeholder={t('formulario:message')} rows="6"
                    class="w-full rounded-md px-4 text-gray-800 dark:bg-black dark:text-white bg-gray-100  text-sm pt-3 outline-blue-500"></textarea>
                <button type='button'
                    class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">{t('formulario:send')}</button>
            </form>
        </div>  
    </div>
  );
};

export default Formulario;
