import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  // Estado inicial: detectar si el modo oscuro está activado
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Comprobar si hay preferencia almacenada en localStorage
    const storedPreference = localStorage.getItem("dark-mode");
    if (storedPreference !== null) {
      return storedPreference === "true";
    }
    // Si no hay preferencia almacenada, comprobar las preferencias del sistema
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Efecto para agregar o quitar la clase `dark` en el <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <button
        className={`relative w-16 h-8 rounded-full flex items-center px-1 ${
          isDarkMode ? "bg-gray-700" : "bg-gray-300"
        } transition-all duration-300`}
        onClick={toggleDarkMode}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-8" : "translate-x-0"
          }`}
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.364-8.364h1M4.636 12H3m15.364 4.95l.707.707m-12.02-12.02l-.707-.707m12.02 12.02l-.707-.707m-12.02 12.02l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.364-8.364h1M4.636 12H3m15.364 4.95l.707.707m-12.02-12.02l-.707-.707m12.02 12.02l-.707-.707m-12.02 12.02l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z"
              />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};

export default DarkModeToggle;
