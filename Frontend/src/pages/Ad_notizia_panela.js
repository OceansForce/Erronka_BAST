import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import BackButton from '../components/bottons/backBotom';
import SendButom from '../components/bottons/sendBotton';
import { Link } from 'react-router-dom';
import IpAPI from "./../config/ipAPI";

function Ad_notizia_panela() {

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
                
                <BackButton targetPage="/Ad_menu" width={20}/>
              
                <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                    <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                    <DarkModeToggle className='w-1/2' />
                </div>
              
            </div>
            <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>Notiziak</p>
            <div className='flex flex-col text-left'>
 
                <Link to={"/Ad_notiziak"} className='flex flex-row ml-2 w-44 p-1 mb-5 items-center bg-white rounded-full  transition-all duration-300  hover:scale-110 active:scale-95'>
                        
                    <img src='./img/icons/profil/plus_black.svg' className='size-5 mr-3'/>
                    <p className='font-bold font-ubuntu'>Sortu Iragarki bat</p>
                    
                </Link>

                <div className='flex flex-row dark:bg-primary bg-dark p-2 rounded-3xl justify-between'>
                    <p className='text-white dark:text-black text-left'>Izena X</p>


                    <div className='flex flex-row text-right'>
                        <img src='./img/icons/profil/pen_white.svg' className='size-7 dark:hidden transition-all duration-300  hover:scale-110 active:scale-95 hover:bg-aukeratuta rounded-full'/>
                        <img src='./img/icons/profil/pen_Black.svg' className='size-7 hidden dark:block transition-all duration-300  hover:scale-110 active:scale-95 hover:bg-aukeratuta rounded-full'/>

                        <img src='./img/icons/notizia/trash_white.svg' className='size-7 mr-3 dark:hidden transition-all duration-300  hover:scale-110 active:scale-95 hover:bg-aukeratuta rounded-full'/>
                        <img src='./img/icons/notizia/trash_black.svg' className='size-7 mr-3 hidden dark:block transition-all duration-300  hover:scale-110 active:scale-95 hover:bg-aukeratuta rounded-full'/>
                    </div>
                    
                </div>
              
            </div>
          </div>
        </div>
        </>
    );
}

export default Ad_notizia_panela;