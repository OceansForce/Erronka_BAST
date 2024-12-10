import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import i18n from '../../118n/menu'; // Importar configuración de i18n
import "./Carousel.css";

const Carrusel = () => {
  console.log(i18n.language);  // Muestra el idioma actual

  const { t } = useTranslation();  // Usamos el hook useTranslation para acceder a las traducciones
  const [loading, setLoading] = useState(true);

  // Cargar traducciones dinámicas
  useEffect(() => {
    const fetchDynamicKeys = async () => {
      const keysToFetch = [];

      for (let i = 0; i < 12; i++) {
        keysToFetch.push('title' + i);
        keysToFetch.push('descripcion' + i);
      }

      await i18n.loadMissingTranslations(i18n.language, keysToFetch);
      setLoading(false);  // Cuando las traducciones están cargadas, actualizamos el estado de loading
    };

    fetchDynamicKeys();
  }, []);  // Solo se ejecuta una vez al cargar el componente

  const items = [
    { id: 1, title: t('title0'), date: "2024/11/27", description: t("descripcion0"), img: "./img/¿sabias-que-la-nariz-de-cada-perro-es-unica.png" },
    { id: 2, title: t("title1"), date: "2024/9/15", description: t("descripcion1"), img: "./img/teckel_obeso.png" },
    { id: 3, title: t("title2"), date: "2024/4/3", description: t("descripcion2"), img: "./img/procesionaria.png" },
    { id: 4, title: t("title3"), date: "2024/11/28", description: t("descripcion3"), img: "./img/curiosidades_de_los_perros_25982_orig.jpg" },
    { id: 5, title: t("title4"), date: "2024/12/10", description: t("descripcion4"), img: "./img/comunicacion-perros.png" },
    { id: 6, title: t("title5"), date: "2024/6/19", description: t("descripcion5"), img: "./img/NHLYIOI7TNFONPPTGTOCKYGBAI.jpg" },
    { id: 7, title: t("title6"), date: "2024/4/3", description: t("descripcion6"), img: "./img/comunicacion.png" },
    { id: 8, title: t("title7"), date: "2024/4/3", description: t("descripcion7"), img: "./img/curiosidades_de_los_perros_25982_orig.jpg" },
    { id: 9, title: t("title8"), date: "2024/4/3", description: t("descripcion8"), img: "./img/NHLYIOI7TNFONPPTGTOCKYGBAI.jpg" },
    { id: 10, title: t("title9"), date: "2024/4/3", description: t("descripcion9"), img: "./img/teckel_obeso.png" },
    { id: 11, title: t("title10"), date: "2024/4/3", description: t("descripcion10"), img: "./img/procesionaria.png" },
    { id: 12, title: t("title11"), date: "2024/4/3", description: t("descripcion11"), img: "./img/¿sabias-que-la-nariz-de-cada-perro-es-unica.png" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  const next = () => {
    if ((currentIndex + 1) * itemsPerPage < items.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentItems = items.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  // Solo renderizamos el carrusel si las traducciones están cargadas
  if (loading) {
    return <div>Loading translations...</div>;
  }

  return (
    <div className="carousel-container w-2/3">
      <button onClick={prev} className="carousel-button prev dark:text-white" disabled={currentIndex === 0}>
        ←
      </button>
      <div className="carousel-wrapper">
        <div className="carousel-content">
          {currentItems.map((item) => (
            <div key={item.id} className="carousel-item dark:bg-dark_body bg-white">
              <img src={item.img} alt={item.title} className="carousel-img rounded-t-lg" />
              <div className="carousel-text">
                <h3 className="text-center font-bold text-slate-600 dark:text-white limit_h">{item.title}</h3>
                <p className="text-left data dark:text-white h-5">{item.date}</p>
                <div className="full_w">
                  <p className="text-justify text-slate-600 dark:text-white h-24 limit">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={next} className="carousel-button next dark:text-white" disabled={(currentIndex + 1) * itemsPerPage >= items.length}>
        →
      </button>
    </div>
  );
};

export default Carrusel;
