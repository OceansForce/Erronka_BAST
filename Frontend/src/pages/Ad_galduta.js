import { useEffect } from 'react';
import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import BackButton from '../components/bottons/backBotom';
import SendButom from '../components/bottons/sendBotton';

import { checkProtektora } from '../components/security/security';
import { useNavigate } from 'react-router-dom';

function Ad_galduta() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    useEffect(() => {
      // Llamar a checkProtektora dentro del useEffect
      checkProtektora(navigate);
    }, [navigate]);

    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);  // Cambia el idioma
    };

    return(
        <>
           <div  className='container flex  justify-center erdian'>
          <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-full rounded-lg text-center border-black dark:border-transparent border-2'>
            <div className='w-full flex'>
                
              <BackButton targetPage="/Ad_menu" />

              
              <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                  <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                  <DarkModeToggle className='w-1/2' />
              </div>
              
            </div>
            <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>{t('ad_galduta:Titulo')}</p>
            <form className='flex flex-col text-left'>

              <div className='flex flex-row'>
                <div className='flex flex-col w-1/2 mr-10'>
                  <label className='font-semibold dark:text-white'>{t('ad_galduta:Izena')}</label>
                  <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='text' required/>
                  
                  <label className='font-semibold dark:text-white mt-2'>{t('ad_galduta:Mota')}</label>
                  <select>
                    <option value="Txakurra">{t("ad_galduta:Txakurra")}</option>
                    <option value="Txakurra PPP">{t('ad_galduta:Txakurra')} PPP</option>
                    <option value="Katua">{t('ad_galduta:Katua')}</option>
                    <option value="Beste bat">{t('ad_galduta:Beste_bat')}</option>
                  </select>
                </div>

                <div className='flex flex-col w-1/2'>
                  <label className='font-semibold dark:text-white'>{t('ad_galduta:Non')}</label>
                  <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='text' required/>

                  <label className='mt-2 font-semibold dark:text-white'>{t('ad_galduta:Adina')}</label> 
                  <input type='date' className='mb-2 dark:border-primary rounded-lg' />

                </div>
              </div>
             

              <div className='flex flex-row '>

                <div className=' w-1/2 mr-10'>
                  <label className='font-semibold dark:text-white'>{t('ad_galduta:Sexua')}</label>

                    <div className='ml-3'>
                      <input type='radio' name='Sexua' value='Arra'/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Arra')}</label>
                    </div>

                    <div className='ml-3'>
                      <input type='radio' name='Sexua' value='Emea'/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Emea')}</label>
                    </div>
                </div>

                <div className=' w-1/2'>
                  <label className='mt-2 font-semibold dark:text-white'>{t("ad_galduta:Esterilizatua")}</label> 
                  <div className='ml-3'>
                    <input type='radio' name='Esterilizatua' value='Bai'/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Bai')}</label>
                  </div>

                  <div className='ml-3'>
                    <input type='radio' name='Esterilizatua' value='Ez'/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Ez')}</label>
                  </div>

                </div>
                     
              </div>

              <div className='flex flex-row mt-2'>

                <div className=' w-1/2 flex flex-col mr-10'>
                  <label className='font-semibold dark:text-white'>{t('ad_galduta:Elkarrekin')}</label>
                  <textarea  className='dark:border-primary border-black border-2 rounded-lg' rows={6} required></textarea>
                </div>

                <div className=' w-1/2 flex flex-col mr-5'>
                  <label className='font-semibold dark:text-white'>{t('ad_galduta:Profil')}</label>
                  <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='file' required/>

                  <label className='font-semibold dark:text-white'>{t('ad_galduta:Beste')}</label>
                  <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='file' />
                  <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='file' />
                  <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='file' />
                </div>
              </div>

              <div className='flex flex-row mt-2'>
                <div className=' w-1/2 flex flex-col mr-5'>
                  <label className='font-semibold dark:text-white'>{t('ad_galduta:Beharrak')}</label>
                  <textarea  className='dark:border-primary border-black border-2 rounded-lg' rows={6} required></textarea>
                </div>

                <div className=' w-1/2 flex flex-col'>
                  <label className='font-semibold dark:text-white'>{t('ad_galduta:Deskribapena')}</label>
                  <textarea  className='dark:border-primary border-black border-2 rounded-lg' rows={6} required></textarea>
                </div>
              </div>


              <SendButom value={t('saioa_sortu:input')} />
            </form>
          </div>
        </div>
        </>
    );
}

export default Ad_galduta;