/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {    // Aquí debes usar "colors"
        primary: '#E0FFC6',      // Color personalizado "primary"
        dark: '#2C4F2F',          // Color personalizado "secondary"
        accent: '#38b2ac',        // Color personalizado "accent"
        'dark-bg': '#1a202c',     // Color personalizado para fondos oscuros
        'light-bg': '#f7fafc',    // Color personalizado para fondos claros
      }
    }
  },
  plugins: [],
}
