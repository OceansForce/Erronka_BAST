// src/analytics.js
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-GF672S3L6R";  // Sustituye con tu propio ID de seguimiento de GA4

// Inicializa Google Analytics
export const initGA = () => {
    console.log("kaixo");
  ReactGA.initialize(TRACKING_ID);
};

// Registrar una vista de página
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
};
