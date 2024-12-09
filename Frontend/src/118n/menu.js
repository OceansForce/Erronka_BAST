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

// Función para cargar traducciones desde la API
const loadTranslationsFromAPI = async (language, keys) => {
  try {
    const response = await fetch(`http://54.221.171.239:8000/api/translations/${language}/keys`, {
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

    // Imprimir la respuesta para inspección
    console.log('Response Data:', data);

    // Verificar si la respuesta tiene la propiedad 'translations' y es un objeto
    if (data && data.translations && typeof data.translations === 'object') {
      return data.translations;
    } else {
      console.error('Invalid response structure: translations not found.');
      return {};
    }
  } catch (error) {
    console.error('Failed to load translations from API:', error);
    return {};
  }
};

// Función para cargar las traducciones dinámicamente al cambiar el idioma
const loadDynamicTranslations = async (language) => {
  const keys = ['title0', 'descripcion0', 'title1', 'descripcion1', 'title2', 'descripcion2']; // Añade más claves si es necesario

  const translations = await loadTranslationsFromAPI(language, keys);

  if (translations && typeof translations === 'object') {
    // Añadir las traducciones al i18n
    Object.keys(translations).forEach((key) => {
      const value = translations[key];

      if (typeof key === 'string' && typeof value === 'string') {
        i18n.addResource(language, 'translation', key, value);
      }
    });
  }
};

// Inicialización de i18next
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

// Escuchar cambios de idioma
i18n.on('languageChanged', (language) => {
  console.log('Idioma cambiado:', language);
  loadDynamicTranslations(language); // Cargar traducciones desde la API cuando cambie el idioma
});

// Función para cargar claves dinámicamente (opcionalmente puedes manejar claves faltantes)
i18n.loadMissingTranslations = async (language, keys) => {
  try {
    const translations = await loadTranslationsFromAPI(language, keys);

    // Asegurarse de que las traducciones sean un objeto y que las claves sean cadenas
    if (translations && typeof translations === 'object') {
      console.log('Translations:', translations);

      Object.keys(translations).forEach((key) => {
        const value = translations[key];

        // Verificación adicional para asegurarse de que la clave y el valor sean cadenas
        if (typeof key !== 'string') {
          console.error(`Invalid key: ${key} is not a string.`);
          return;
        }
        if (typeof value !== 'string') {
          console.error(`Invalid value for key ${key}: ${value} is not a string.`);
          return;
        }

        // Agregar cada traducción individualmente
        i18n.addResource(language, 'translation', key, value);
      });

    } else {
      console.error('Las traducciones no están en el formato esperado.');
    }
  } catch (error) {
    console.error('Error al cargar las traducciones:', error);
  }
};

export default i18n;
