/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ubuntu:[ "Ubuntu", "sans-serif"],
      },
      colors: {    // Aquí debes usar "colors"
        primary: '#E0FFC6',      // Color personalizado "primary"
        dark: '#2C4F2F',          // Color personalizado "secondary"
        accent: '#38b2ac',        // Color personalizado "accent"
        dark_body: '#333333',
        text_green: '#52C763',
        border_green:'#72E70F',
        hover: '#767676',
        dark_button: '#3c663c',
        'dark-bg': '#1a202c',     // Color personalizado para fondos oscuros
        'light-bg': '#f7fafc',    // Color personalizado para fondos claros

        
      }
    }
  },
  plugins: [],
}
