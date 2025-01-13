import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import { Link } from 'react-router-dom';
import AdminPanelButtom from '../components/bottons/adminPanel';
import { useEffect } from 'react';

import BackButtonLittle from '../components/bottons/backButtomLittle';

import { checkProtektora } from '../components/security/security';
import { useNavigate } from 'react-router-dom';


function Ad_menua() {
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
            <div className='flex flex-row w-42 space-x-5 mt-10 bg-primary dark:bg-dark p-5 rounded-3xl'>
                <BackButtonLittle to="/" src="/img/icons/arrow-left.svg" />
                
                <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                <DarkModeToggle className='w-1/2' />  
            </div>
            <div className="w-full flex flex-row flex-wrap bg-red erdian text-center space-x-14">
                <AdminPanelButtom 
                    to="/Ad_notizia_panela" 
                    imageSrc="./img/newspaper-svgrepo-com.svg" 
                    text={t('ad_menua:notiziak')} 
                />
                
                <AdminPanelButtom 
                    to="/Ad_galduta" 
                    imageSrc="./img/animal-domestic-lost-svgrepo-com.svg" 
                    text={t('ad_menua:galduta')} 
                />

                <AdminPanelButtom 
                    to="/Ad_adoptatu" 
                    imageSrc="./img/animal-approve-cat-svgrepo-com.svg" 
                    text={t('ad_menua:adoptatu')} 
                />

                <AdminPanelButtom 
                    to="/Ad_erabiltzaileak" 
                    imageSrc="./img/icons/admin/user-circle-1-svgrepo-com.svg" 
                    text={t('ad_menua:Erabiltzaileak')} 
                />

            </div>
        </>
    );    
}

export default Ad_menua;