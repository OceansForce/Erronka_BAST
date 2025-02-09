import { useEffect } from 'react';
import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import IpAPI from '../config/ipAPI';
import BackButton from '../components/bottons/backBotom';
import SendButom from '../components/bottons/sendBotton';
import { checkProtektora } from '../components/security/security';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Irudiak_input from './../components/notiziak/IrudiakInput.js';
import { document } from 'postcss';
import EditPage from '../components/editLosted/EditPage.jsx';
import LostedEdit from '../components/editLosted/LostedEdit.jsx';
import LostedPage from '../components/editLosted/LostedPage.jsx';

function Edit_animal() {


    const location = useLocation(); 
    const [activeSection, setActiveSection] = useState('Profile');
    
    const { item } = location.state || {};
    const { ruta } = location.state || {};
    

   
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); 
    };
    



    return (
        <> 
            <div className='container flex justify-center'>
                <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-full rounded-lg text-center border-black dark:border-transparent border-2'>
                    <div className='w-full flex'>
                        <BackButton targetPage={ruta} width={20}/>

                        <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                            <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                            <DarkModeToggle className='w-1/2' />
                        </div>
                    </div>

                    <LostedEdit onActiveChange={setActiveSection} />

                    

                    {activeSection === 'Profile' && <EditPage item={item} ruta={ruta} />}
                    {activeSection === 'Contact' && <LostedPage item={item} ruta={ruta} />}

                    

                </div>
            </div>
        </>
    );
  }
  
export default Edit_animal;