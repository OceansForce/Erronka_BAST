import React from 'react';
import IpAPI from '../config/ipAPI';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useEffect } from 'react';
import ProfilAnimals from '../components/profila/profilAnimals.jsx';
import Loading from '../components/loading/loading.jsx';
import BackButtonLittle from '../components/bottons/backButtomLittle';
import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';

const AnimalList = () => {

    const [animaliak, setAnimaliak] = useState(null);
    const { t, i18n } = useTranslation();

    const protektora = localStorage.getItem('protektora');
    console.log("Protektora",protektora);
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);  // Cambia el idioma
      };
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${IpAPI}/api/animals-adopt?limit=25&offset=0&protektora_id=${protektora}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const result = await response.json();
                    setAnimaliak(result); // Guardamos los datos del usuario en el estado
                    console.log("datos Recibidos",result);
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
                alert('Error en la solicitud. Revisa tu conexión.');
            }
        };

        fetchUserData(); // Ejecuta la función al cargar la página
    }, []);





    if (!animaliak) {
        return <Loading />;
    }

    return (
        <div>
            <div className='flex flex-row w-42 space-x-5 mt-10 bg-primary dark:bg-dark p-5 rounded-3xl'>
                <BackButtonLittle to="/" src="/img/icons/arrow-left.svg" />
                
                <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                <DarkModeToggle className='w-1/2' />  
            </div>
            <ProfilAnimals userData={animaliak} />
        </div>
    );
};

export default AnimalList;