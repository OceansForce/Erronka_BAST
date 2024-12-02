import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Para detectar el idioma del navegador

// Importar archivos de traducción
import esMenu from './locales/es/menu/menu.json';
import euMenu from './locales/eu/menu/menu.json';

// User hizkuntza gehituta
import euUser from './locales/eu/menu/user.json';
import esUser from './locales/es/menu/user.json';

// Denda hizkuntza gehituta
import euDenda from './locales/eu/menu/denda.json';
import esDenda from './locales/es/menu/denda.json';

// Adopzio hizkuntza gehituta
import euAdopzio from './locales/eu/menu/adopzio.json';
import esAdopzio from './locales/es/menu/adopzio.json';


import esBerriak from './locales/es/index/body/berriak.json';
import euBerriak from './locales/eu/index/body/berriak.json';


// FOOTER
import esDatos from './locales/es/footer/datos.json';
import euDatos from './locales/eu/footer/datos.json';

import esformulario from './locales/es/footer/formulario.json';
import euFormulario from './locales/eu/footer/formulario.json';


i18n
  .use(LanguageDetector)  // Detecta el idioma del navegador
  .use(initReactI18next)   // Integra i18next con React
  .init({
    resources: {
      es: {
        menu: esMenu,
        user: esUser,

        denda: esDenda,
        adopzio: esAdopzio,

        berriak: esBerriak,



        datuak:esDatos,
        formulario:esformulario
      },
      eu: {
        menu: euMenu,
        user: euUser,

        denda: euDenda,
        adopzio: euAdopzio,

        berriak: euBerriak,


        datuak:euDatos,
        formulario:euFormulario

      }
    },
    fallbackLng: 'es', // Cambié a 'es' como fallback por si no se detecta el idioma
    debug: true, // Habilitar la depuración
    interpolation: {
      escapeValue: false // React ya se encarga de escapar valores
    },
    detection: {
      // Establecer un orden de preferencia de los idiomas
      order: ['cookie', 'localStorage', 'navigator'], // Primero intenta con cookies, luego con localStorage, y luego con el idioma del navegador
      caches: ['cookie', 'localStorage'], // Guardar el idioma en las cookies y localStorage
    },
  });

export default i18n;

