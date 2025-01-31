import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ReactGA from "react-ga4";
ReactGA.initialize("G-GF672S3L6R");

ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
})

ReactDOM.createRoot(document.getElementById('root')).render(<App />);