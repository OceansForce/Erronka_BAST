import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar archivos de traducción locales
import esMenu from './locales/es/menu/menu.json';
import euMenu from './locales/eu/menu/menu.json';
import euUser from './locales/eu/menu/user.json';
import esUser from './locales/es/menu/user.json';
import euDenda from './locales/eu/menu/denda.json';
import esDenda from './locales/es/menu/denda.json';
import euAdopzio from './locales/eu/menu/adopzio.json';
import esAdopzio from './locales/es/menu/adopzio.json';
import euBerriak from './locales/eu/index/body/berriak.json';
import esBerriak from './locales/es/index/body/berriak.json';
import euDatos from './locales/eu/footer/datos.json';
import esDatos from './locales/es/footer/datos.json';
import euFormulario from './locales/eu/footer/formulario.json';
import esFormulario from './locales/es/footer/formulario.json';

// Función para cargar traducciones dinámicamente desde la API
const loadTranslationsFromAPI = async (language, keys) => {
  try {
    const response = await fetch(`http://107.21.65.40:8000/api/translations/${language}/keys`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keys }),
    });

    if (!response.ok) {
      console.error('Error fetching translations from API:', response.statusText);
      return {};
    }

    const data = await response.json();

    // Verifica si las claves son cadenas y formatea correctamente la respuesta
    const translations = data.reduce((acc, translation) => {
      if (typeof translation.keyValue === 'string' && typeof translation.value === 'string') {
        acc[translation.keyValue] = translation.value;
      } else {
        console.error('Invalid key or value in translation:', translation);
      }
      return acc;
    }, {});

    return translations;
  } catch (error) {
    console.error('Failed to load translations from API:', error);
    return {};
  }
};


i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Integra i18next con React
  .init({
    resources: {
      es: {
        menu: esMenu,
        user: esUser,
        denda: esDenda,
        adopzio: esAdopzio,
        berriak: esBerriak,
        datuak: esDatos,
        formulario: esFormulario,
      },
      eu: {
        menu: euMenu,
        user: euUser,
        denda: euDenda,
        adopzio: euAdopzio,
        berriak: euBerriak,
        datuak: euDatos,
        formulario: euFormulario,
      },
    },
    fallbackLng: 'eu', // Idioma de respaldo
    debug: true, // Mostrar mensajes de depuración
    interpolation: {
      escapeValue: false, // React maneja el escape de valores
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator'], // Detecta idioma por cookie, localStorage o navegador
      caches: ['cookie', 'localStorage'], // Guarda el idioma seleccionado en cookie o localStorage
    },
    react: {
      useSuspense: false, // Evita errores de Suspense en carga dinámica
    },
  });

// Función para cargar claves dinámicamente
i18n.loadMissingTranslations = async (language, keys) => {
  const translations = await loadTranslationsFromAPI(language, keys);
  // Agregar recursos solo si es necesario
  i18n.addResource(language, 'translation', translations);
};

export default i18n;
