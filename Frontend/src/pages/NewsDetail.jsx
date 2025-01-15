import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IpAPI from '../config/ipAPI';
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';
import Loading from '../components/loading/loading';

function NewsDetail() {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);
  const { t, i18n } = useTranslation(); // 't' es para traducir y 'i18n' nos permite cambiar el idioma
  
  useEffect(() => {
    const fetchSingleNews = async () => {
      try {
        const response = await fetch(`${IpAPI}/api/new-obtein/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error fetching news with id ${id}`);
        }

        const data = await response.json();
        console.log('Datos de la noticia:', data);
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching single news:', error);
        alert('Error al obtener los datos de la noticia.');
      }
    };

    if (id) {
      fetchSingleNews(); // Llamar a la API cuando `id` esté disponible
    }
  }, [id]);

  // Si no se han cargado los datos de la noticia, muestra un mensaje de carga o error.
  if (!newsData) {
    return (
      <>
        <Header />
        <Loading />
        <Footer />
      </>
    );
  }

  // Función para obtener la traducción de un campo según el idioma
  const getTranslation = (translations, lang) => {
    const translation = translations.find(t => t.language === lang);
    return translation ? translation.value : translations[0].value; // Fallback al primer valor si no hay traducción para el idioma actual
  };

  // Obtener las traducciones para el título y el contenido según el idioma actual
  const title = getTranslation(newsData.title_translations, i18n.language);
  const content = getTranslation(newsData.text_translations, i18n.language);

  // Dividir el contenido si contiene '|||'
  const [contentPart1, contentPart2] = content.split('|||').map(part => part.trim());
  const img = newsData.img; // Suponiendo que la propiedad 'img' contiene la URL de la imagen
  const defaultImg = '/img/image.png'; // Ruta a la imagen por defecto
  const formattedDate = new Date(newsData.created_at).toLocaleDateString(i18n.language, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  return (
    <>
      <Header />
      <div className='grid grid-rows-2 pt-8'>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
            <div className='lg:pr-24'>
                <img 
                src={img || defaultImg} 
                alt={title} 
                style={{ width: '400px', height: 'auto' }} 
                />
            </div>
            <div>
                <h1 className='font-ubuntu text-2xl text-black dark:text-white'>{title}</h1>
                <h3 className='font-ubuntu text-lg text-black dark:text-white pt-4'>
                    {formattedDate}
                </h3>
                <p className='font-ubuntu text-base text-black dark:text-white pt-4 text-justify'>{contentPart1}</p>
            </div>
        
        </div>
        <div className='pt-8'>
          
          {contentPart2 && <p className='font-ubuntu text-base text-black dark:text-white text-justify'>{contentPart2}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewsDetail;
