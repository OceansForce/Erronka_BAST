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

function Ad_notiziak() {

    const { t, i18 } = useTranslation();
    
    const [newsData, setNewsData] = useState();

    const location = useLocation();
    const { id } = location.state || {}; //Link etiketatik id-a lortzeko

    useEffect(() => {
        

        const fetchSingleNews = async (newsId) => {
            let par_ES;
            let par_EUS;
            try {
                const response = await fetch(`${IpAPI}/api/new-obtein/${newsId}`, {
                    method:'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`Error fetching news with id ${newsId}`);
                }else{
                    const data = await response.json();
                    
                    par_ES= data.text_translations[0].value.split("|||");
                    par_EUS= data.text_translations[1].value.split("|||");


                    console.log("parrafoak_Array");

                    // Inicializar formData con los datos recibidos
                    setFormData({
                        titleES: data.title_translations[0].value,
                        titleEU: data.title_translations[1].value,
                        paragraphES1: par_ES[0] || '',
                        paragraphES2: par_ES[1] || '',
                        paragraphEU1: par_EUS[0] || '',
                        paragraphEU2: par_EUS[1] || '',
                        img: '', // Suponiendo que la URL de la imagen viene por separado
                    });

                    console.log(data);
                    setNewsData(data);
                    
                }
                

            } catch (error) {
                console.error('Error fetching single news:', error);
                alert('Error al obtener los datos de la noticia.');
            }
        };

        if (id) {
            fetchSingleNews(id); // Llamar a la API cuando `id` esté disponible

        }
    }, [id]);

    

    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);  // Cambia el idioma
    };

    // Estado para manejar los datos del formulario
    const [formData, setFormData] = useState({
        titleES: '',
        titleEU: '',
        paragraphES1: '',
        paragraphES2: '',
        paragraphEU1: '',
        paragraphEU2: '',
        date: '',
        img: ''
    });

    // Estado para manejar el mensaje de éxito
    const [successMessage, setSuccessMessage] = useState('');

    // Manejador de cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Manejador del envío del formulario
    const handleSubmit = async (e, newsId) => {
        e.preventDefault();

        // Combinar los párrafos con "|||"
        const textES = `${formData.paragraphES1} ||| ${formData.paragraphES2}`;
        const textEU = `${formData.paragraphEU1} ||| ${formData.paragraphEU2}`;

        const tok = localStorage.getItem('token');

        // Crear el cuerpo de la solicitud
        const body = {
            titleES: formData.titleES,
            titleEU: formData.titleEU,
            textES: textES,
            textEU: textEU,
            //img: formData.img,
        };

        try {
            const response = await fetch(`${IpAPI}/api/news/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tok}`,
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const result = await response.json();
                // Mostrar mensaje de éxito
                setSuccessMessage(t('ad_notiziak:noticia_editada_exitosamente'));

                // Limpiar los campos del formulario
                setFormData({
                    titleES: '',
                    titleEU: '',
                    paragraphES1: '',
                    paragraphES2: '',
                    paragraphEU1: '',
                    paragraphEU2: '',
                    date: '',
                    img: ''
                });
            } else {
                const error = await response.json();
                console.error('Error al crear la noticia:', error);
                alert('Error al crear la noticia. Revisa los datos.');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud. Revisa tu conexión.');
        }
    };

    return (
        <> 
            {newsData ? (
                <div className='container flex justify-center'>
                    <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-full rounded-lg text-center border-black dark:border-transparent border-2'>
                        <div className='w-full flex'>
                            
                            <BackButton targetPage="/Ad_notizia_panela" width={20}/>
                            <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                                <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                                <DarkModeToggle className='w-1/2' />
                            </div>
                        </div>
                        <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>
                            {t('ad_notiziak:tituloa_D')}
                        </p>

                        {successMessage && <p className='text-green-500 font-semibold mb-4'>{successMessage}</p>}

                        <form className='flex flex-col text-left' onSubmit={handleSubmit}>
                            <label className='font-semibold dark:text-white'>{t('ad_notiziak:tituloa')} (ES)</label>
                            <input
                                className='mb-2 dark:border-primary border-black border-2 rounded-lg'
                                type='text'
                                name='titleES'
                                value={formData.titleES}
                                onChange={handleChange}
                                required
                            />
                            <label className='font-semibold dark:text-white'>{t('ad_notiziak:tituloa')} (EU)</label>
                            <input
                                className='mb-2 dark:border-primary border-black border-2 rounded-lg'
                                type='text'
                                name='titleEU'
                                value={formData.titleEU}
                                onChange={handleChange}
                                required
                            />
                            <label className='font-semibold dark:text-white'>IMG URL</label>
                            <Irudiak_input handleChange={handleChange}/>
                        
                            <div className='flex flex-row w-auto'>
                                <div className='flex flex-col w-1/2 mr-5'>
                                    <label className='font-semibold dark:text-white'>ES-{t('ad_notiziak:Paragrafoa')} 1</label>
                                    <textarea
                                        className='mb-2 dark:border-primary border-black border-2 rounded-lg'
                                        rows={6}
                                        name='paragraphES1'
                                        value={formData.paragraphES1}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    <label className='font-semibold dark:text-white'>ES-{t('ad_notiziak:Paragrafoa')} 2</label>
                                    <textarea
                                        className='mb-2 dark:border-primary border-black border-2 rounded-lg'
                                        rows={6}
                                        name='paragraphES2'
                                        value={formData.paragraphES2}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className='flex flex-col w-1/2'>
                                    <label className='font-semibold dark:text-white'>EUS-{t('ad_notiziak:Paragrafoa')} 1</label>
                                    <textarea
                                        className='mb-2 dark:border-primary border-black border-2 rounded-lg'
                                        rows={6}
                                        name='paragraphEU1'
                                        value={formData.paragraphEU1}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    <label className='font-semibold dark:text-white'>EUS-{t('ad_notiziak:Paragrafoa')} 2</label>
                                    <textarea
                                        className='mb-2 dark:border-primary border-black border-2 rounded-lg'
                                        rows={6}
                                        name='paragraphEU2'
                                        value={formData.paragraphEU2}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            
                            <Link to={"/Ad_notizia_panela"}><SendButom value={t('saioa_sortu:input')} /></Link>
                        </form>
                    </div>
                </div>
            ):(<p>ERROREA id= {id}</p>)}
            
        </>
    );
}

export default Ad_notiziak;
