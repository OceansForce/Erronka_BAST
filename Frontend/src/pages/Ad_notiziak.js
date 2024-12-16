import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import { Link } from 'react-router-dom';
import IpAPI from '../config/ipAPI';

function Ad_notiziak() {
    const { t, i18 } = useTranslation();

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
    });

    // Manejador de cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Manejador del envío del formulario
    const handleSubmit = async (e) => {
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
        };

        try {
            const response = await fetch(`${IpAPI}/api/news`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tok}`,
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const result = await response.json();
                //alert('Noticia creada con éxito!');
                console.log(result);
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
            <div className='container flex justify-center erdian'>
                <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-full rounded-lg text-center border-black dark:border-transparent border-2'>
                    <div className='w-full flex'>
                        <Link to="/Ad_menu">
                            <img className='w-28 bg-white px-5 rounded-full' src="/img/icons/arrow-left.svg" alt="Back" />
                        </Link>

                        <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                        <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                        <DarkModeToggle className='w-1/2' />
                        </div>
                    </div>
                    <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>
                        {t('ad_notiziak:tituloa_N')}
                    </p>
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
                        <input
                            className='bg-black text-white mt-2 p-2 rounded-lg'
                            type='submit'
                            value={t('saioa_sortu:input')}
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Ad_notiziak;
