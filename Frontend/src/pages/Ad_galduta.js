import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import { Link } from 'react-router-dom';

function Ad_galduta() {
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
            <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>Galdutako animalia gehitu</p>
            <form className='flex flex-col text-left'>

              <div className='flex flex-row'>
                <div className='flex flex-col w-1/2 mr-10'>
                  <label className='font-semibold dark:text-white'>Izena</label>
                  <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='text' required/>
                  
                  <label className='font-semibold dark:text-white mt-2'>Mota</label>
                  <select>
                    <option value="Txakurra">Txakurra</option>
                    <option value="Txakurra PPP">Txakurra PPP</option>
                    <option value="Katua">Katua</option>
                    <option value="Beste bat">Beste bat</option>
                  </select>
                </div>

                <div className='flex flex-col w-1/2'>
                  <label className='font-semibold dark:text-white'>Non</label>
                  <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='text' required/>

                  <label className='mt-2 font-semibold dark:text-white'>Adina</label> 
                  <input type='date' className='mb-2 dark:border-primary rounded-lg' />

                </div>
              </div>
             

              <div className='flex flex-row'>

                <div className=' w-1/2 mr-10'>
                  <label className='font-semibold dark:text-white'>Sexua</label>

                    <div className='ml-3'>
                      <input type='radio' name='Sexua' value='Arra'/><label className='ml-1 dark:text-white fonts_ubutu'>Arra</label>
                    </div>

                    <div className='ml-3'>
                      <input type='radio' name='Sexua' value='Emea'/><label className='ml-1 dark:text-white fonts_ubutu'>Emea</label>
                    </div>
                </div>

                <div className=' w-1/2'>
                  <label className='mt-2 font-semibold dark:text-white'>Esterilizatua</label> 
                  <div className='ml-3'>
                    <input type='radio' name='Esterilizatua' value='Bai'/><label className='ml-1 dark:text-white fonts_ubutu'>Bai</label>
                  </div>

                  <div className='ml-3'>
                    <input type='radio' name='Esterilizatua' value='Ez'/><label className='ml-1 dark:text-white fonts_ubutu'>Ez</label>
                  </div>

                </div>
                     
              </div>

              <div className='flex flex-row mt-2'>

                <div className=' w-1/2 flex flex-col mr-5'>
                  <label className='font-semibold dark:text-white'>Elkarrekin bizitzeko ohitura</label>
                  <textarea  className='dark:border-primary border-black border-2 rounded-lg' rows={6} required></textarea>
                </div>

                <div className=' w-1/2 flex flex-col mr-5'>
                  <label className='font-semibold dark:text-white'>Profil Irudia</label>
                  <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='file' required/>

                  <label className='font-semibold dark:text-white'>Beste irudi batzuk</label>
                  <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='file' />
                  <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='file' />
                  <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='file' />
                </div>
              </div>

              <div className='flex flex-row mt-2'>
                <div className=' w-1/2 flex flex-col mr-5'>
                  <label className='font-semibold dark:text-white'>Behar bereziak</label>
                  <textarea  className='dark:border-primary border-black border-2 rounded-lg' rows={6} required></textarea>
                </div>

                <div className=' w-1/2 flex flex-col'>
                  <label className='font-semibold dark:text-white'>Deskribapena</label>
                  <textarea  className='dark:border-primary border-black border-2 rounded-lg' rows={6} required></textarea>
                </div>
              </div>


              <input className='bg-black text-white mt-2 p-2 rounded-lg' type='submit' value={t('saioa_sortu:input')}></input>
            </form>
          </div>
        </div>
        </>
    );
}

export default Ad_galduta;