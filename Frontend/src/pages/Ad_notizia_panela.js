import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import React, { useState, useEffect } from "react";
import BackButton from '../components/bottons/backBotom';
import { Link } from 'react-router-dom';
import IpAPI from "./../config/ipAPI"
import Trash from '../components/admin/trash';

function Ad_notizia_panela() {
    const { t, i18n } = useTranslation();
    
    const [kantitatea, setKantitatea] = useState(5);
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [hasMoreNews, setHasMoreNews] = useState(true); // Nuevo estado para controlar la visibilidad del botón

    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    // Función para cargar noticias desde la API
    const fetchNews = async (count, offset) => {
        try {
            const response = await fetch(`${IpAPI}/api/latest-news?count=${count}&offset=${offset}`);
            const data = await response.json();

            const keysToFetch = data.map(item => item.text).concat(data.map(item => item.title));
            await i18n.loadMissingTranslations(i18n.language, keysToFetch);

            return data.map(item => ({
                id: item.id,
                title: t(item.title),
                date: new Date(item.created_at).toLocaleDateString(),

            }));
        } catch (error) {
            console.error("Error fetching news:", error);
            return [];
        }
    };

    // Función para cargar noticias iniciales
    const loadInitialNews = async () => {
        const initialNews = await fetchNews(kantitatea, 0);
        setNews(initialNews);
        setHasMoreNews(initialNews.length === kantitatea); // Si obtenemos menos noticias de las solicitadas, no hay más
        setLoading(false);
    };

    // Función para cargar más noticias
    const loadMoreNews = async () => {
        const newNews = await fetchNews(kantitatea, news.length);
        setNews([...news, ...newNews]);
        setHasMoreNews(newNews.length === kantitatea); // Actualizar si hay más noticias disponibles
    };

    useEffect(() => {
        loadInitialNews();
    }, [i18n.language]);


    const handleDelete = (id) => {
        setNews(news.filter(item => item.id !== id));  // Esto elimina la noticia de la lista localmente
    };

    return (
        <>
            <div className='w-full container flex justify-center'>
                <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-full rounded-lg items-center text-center justify-center border-black dark:border-transparent border-2'>
                    <div className='w-full flex'>
                        <BackButton targetPage="/Ad_menu" width={20} />
                        <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                            <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                            <DarkModeToggle className='w-1/2' />
                        </div>
                    </div>
                    <p className='w-full font-semibold text-2xl my-5 dark:text-white uppercase'>Notiziak</p>
                    <div className='w-full flex flex-col text-left' id='notiziak'>
                        <Link to={"/Ad_notiziak"} className='flex flex-row ml-2 w-44 p-1 mb-5 items-center bg-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95'>
                            <img src='./img/icons/profil/plus_black.svg' className='size-5 mr-3' />
                            <p className='font-bold font-ubuntu'>Sortu Iragarki bat</p>
                        </Link>

                        {/* <div  className='flex flex-row dark:bg-primary bg-dark p-2 mb-5 rounded-3xl justify-between'>
                            <p className='text-white dark:text-black text-left'>Izena</p>
                            <div className='flex flex-row text-right'>
                                <Link  to="/Ad_notiziak_aditatu" state={{id: 1, title: "izena"}}>
                                    <img src='./img/icons/profil/pen_white.svg' className='size-7 dark:hidden transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-green-500 rounded-full' />
                                    <img src='./img/icons/profil/pen_Black.svg' className='size-7 hidden dark:block transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-green-500 rounded-full' />
                                </Link>
                                <img src='./img/icons/notizia/trash_white.svg' className='size-7 mr-3 dark:hidden transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-red-500 rounded-full' />
                                <img src='./img/icons/notizia/trash_black.svg' className='size-7 mr-3 hidden dark:block transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-red-500 rounded-full' />
                            </div>
                        </div> */}

                        {news.map((item) => (
                            <div key={item.id} className='flex flex-row dark:bg-primary bg-dark p-2 mb-5 rounded-3xl justify-between'>
                                <p className='text-white dark:text-black text-left'>{item.title} ---- {item.date}</p>
                                <div className='flex flex-row text-right'>
                                    <Link to="/Ad_notiziak_aditatu" state={{id: item.id, title: item.title}}>
                                        <img src='./img/icons/profil/pen_white.svg' className='size-7 dark:hidden transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-green-500 rounded-full' />
                                        <img src='./img/icons/profil/pen_Black.svg' className='size-7 hidden dark:block transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-green-500 rounded-full' />
                                    </Link>
                                    <Trash id={item.id} onDelete={handleDelete} />

                                </div>
                            </div>
                        ))}
                    </div>
                    {hasMoreNews && (
                        <input 
                            className='w-1/12 bg-black text-white mt-2 p-2 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 active:scale-95 active:bg-gray-600' 
                            type='submit' 
                            value='Mas' 
                            onClick={loadMoreNews} 
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default Ad_notizia_panela;
