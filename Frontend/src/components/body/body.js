import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import i18n from '../../118n/menu'; // Importar configuración de i18n
import "./Carousel.css";
import IpAPI from "../../config/ipAPI";

import Loading from "../loading/loading";
import { Link } from "react-router-dom";


const Carrusel = () => {
  const { t, i18n } = useTranslation(); // Hook para traducir textos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga inicial
  const [news, setNews] = useState([]); // Estado que almacena las noticias obtenidas
  const [currentIndex, setCurrentIndex] = useState(0); // Índice actual del carrusel
  const itemsPerPage = 6; // Cantidad de elementos mostrados por página

  // Función para cargar noticias desde la API
  const fetchNews = async (count, offset) => {
    try {
      const response = await fetch(`${IpAPI}/api/latest-news?count=${count}&offset=${offset}`);
      const data = await response.json();

      // Preparar las claves de traducción necesarias
      const keysToFetch = data.map(item => item.text).concat(data.map(item => item.title));
      await i18n.loadMissingTranslations(i18n.language, keysToFetch); // Cargar traducciones faltantes

      // Mapear los datos recibidos para ajustarlos al formato requerido por el carrusel
      return data.map(item => ({
        id: item.id,
        title: t(item.title), // Traducir el título recibido de la API
        description: t(item.text).split(" ").slice(0, 20).join(" ") + (t(item.text).split(" ").length > 20 ? "..." : ""),
        date: new Date(item.created_at).toLocaleDateString(),
        img: item.img
      }));
    } catch (error) {
      console.error("Error fetching news:", error);
      return []; // Retornar un arreglo vacío en caso de error
    }
  };

  // Función para cargar las noticias iniciales
  const loadInitialNews = async () => {
    const initialNews = await fetchNews(12, 0); // Solicitar las primeras 12 noticias
    setNews(initialNews); // Actualizar el estado con las noticias obtenidas
    setLoading(false); // Cambiar el estado de carga
  };

  // Cargar las noticias cuando el componente se monta o el idioma cambia
  useEffect(() => {
    loadInitialNews();
  }, [i18n.language]); // Escuchar cambios en el idioma

  // Función para navegar hacia la derecha
  const next = async () => {
    if ((currentIndex + 1) * itemsPerPage >= news.length) {
      const newOffset = news.length;
      const additionalNews = await fetchNews(itemsPerPage, newOffset);
      if (additionalNews.length > 0) {
        setNews(prevNews => [...prevNews, ...additionalNews]);
      }
    }
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  // Función para navegar hacia la izquierda
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const currentItems = news.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  if (loading) {
    return <Loading />;
  }

  // Lógica para ocultar las flechas si están desactivadas
  const hidePrevButton = currentIndex === 0; // Ocultar el botón "prev" si estamos en la primera página
  const hideNextButton = (currentIndex + 1) * itemsPerPage >= news.length && currentItems.length < itemsPerPage; // Ocultar el botón "next" si no hay más noticias

  return (
    <div className="carousel-container w-2/3 sm:justify-items-center">
      {/* Solo renderizar el botón de navegación hacia la izquierda si no está desactivado */}
      <button
        onClick={prev}
        className={`carousel-button prev dark:text-white text-black bg-transparent border-2 border-transparent 
            transition-all hover:scale-125 active:scale-95 duration-300
          ${hidePrevButton ? 'opacity-0 pointer-events-none' : ''}`}
      >
        ←
      </button>


      <div className="carousel-wrapper p-2 sm:justify-items-center">
        <div className="carousel-content">
          {currentItems.map((item) => (

            <Link to={`/news/${item.id}`}>

              <div key={item.id} className="carousel-item dark:bg-dark_body bg-white hover:scale-110 active:scale-95 duration-300">
                <img src={item.img} alt={item.title} className="carousel-img rounded-t-lg w-96 h-64" />
                <div className="carousel-text">
                  <h3 className="text-center font-bold text-slate-600 dark:text-white limit_h">{item.title}</h3>
                  <p className="text-left data dark:text-white h-5">{item.date}</p>
                  <div className="full_w">
                    <p className="text-justify text-slate-600 dark:text-white h-24 limit">{item.description}</p>
                  </div>
                </div>
              </div>
            </Link>

            
          ))}
        </div>
      </div>

      {/* Solo renderizar el botón de navegación hacia la derecha si no está desactivado */}
      <button
        onClick={next}
        className={`carousel-button prev dark:text-white text-black bg-transparent border-2 border-transparent 
            transition-all hover:scale-125 active:scale-95 duration-300
          ${hideNextButton ? 'opacity-0 pointer-events-none' : ''}`}
      >
        →
      </button>
    </div>
  );
};

export default Carrusel;
