import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import i18n from '../../118n/menu';

import "./Carousel.css";

const Carrusel = () => {
    console.log(i18n.language);  // Muestra el idioma actual

  const { t } = useTranslation();  // Usamos el hook useTranslation para acceder a las traducciones

  const items = [
    { id: 1, title: t('berriak:carousel.items.0.title'), date: "2024/11/27", description: t("berriak:carousel.items.0.description"), img: "./img/¿sabias-que-la-nariz-de-cada-perro-es-unica.png" },
    { id: 2, title: t("berriak:carousel.items.1.title"), date: "2024/9/15", description: t("berriak:carousel.items.1.description"), img: "./img/teckel_obeso.png" },
    { id: 3, title: t("berriak:carousel.items.2.title"), date: "2024/4/3", description: t("berriak:carousel.items.2.description"), img: "./img/procesionaria.png" },
    { id: 4, title: t("berriak:carousel.items.3.title"), date: "2024/11/28", description: t("berriak:carousel.items.3.description"), img: "./img/curiosidades_de_los_perros_25982_orig.jpg" },
    { id: 5, title: t("berriak:carousel.items.4.title"), date: "2024/12/10", description: t("berriak:carousel.items.4.description"), img: "./img/comunicacion-perros.png" },
    { id: 6, title: t("berriak:carousel.items.5.title"), date: "2024/6/19", description: t("berriak:carousel.items.5.description"), img: "./img/NHLYIOI7TNFONPPTGTOCKYGBAI.jpg" },
    { id: 7, title: t("berriak:carousel.items.6.title"), date: "2024/4/3", description: t("berriak:carousel.items.6.description"), img: "./img/procesionaria.png" },
    { id: 8, title: t("berriak:carousel.items.7.title"), date: "2024/4/3", description: t("berriak:carousel.items.7.description"), img: "./img/procesionaria.png" },
    { id: 9, title: t("berriak:carousel.items.8.title"), date: "2024/4/3", description: t("berriak:carousel.items.8.description"), img: "./img/procesionaria.png" },
    { id: 10, title: t("berriak:carousel.items.9.title"), date: "2024/4/3", description: t("berriak:carousel.items.9.description"), img: "./img/procesionaria.png" },
    { id: 11, title: t("berriak:carousel.items.10.title"), date: "2024/4/3", description: t("berriak:carousel.items.10.description"), img: "./img/procesionaria.png" },
    { id: 12, title: t("berriak:carousel.items.11.title"), date: "2024/4/3", description: t("berriak:carousel.items.11.description"), img: "./img/procesionaria.png" }
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

  return (
    <div className="carousel-container w-2/3">
      <button onClick={prev} className="carousel-button prev  dark:text-white" disabled={currentIndex === 0}>
        ←
      </button>
      <div className="carousel-wrapper">
        <div className="carousel-content">
          {currentItems.map((item) => (
            <div key={item.id} className="carousel-item  dark:bg-dark_body bg-white">
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

