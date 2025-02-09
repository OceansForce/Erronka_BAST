import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  // Estado inicial: detectar si el modo oscuro está activado
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Comprobar si hay preferencia almacenada en localStorage
    const storedPreference = localStorage.getItem("dark-mode");
    if (storedPreference !== null) {
      return storedPreference === "true";
    }
    
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
    <div className="z-0">
      <button
        className={`relative w-20 h-8 rounded-full flex items-center px-1 ${
          isDarkMode ? "bg-gray-700" : "bg-gray-300"
        } transition-all duration-300`}
        onClick={toggleDarkMode}
      >
        <div
          className={`w-8 h-8 rounded-full  transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-10" : "translate-x-0"
          }`}
        >
          {isDarkMode ? (
            <img src="/img/icons/menu/dark.svg"/>
          ) : (
            <img src="/img/icons/menu/light.svg"/>
          )}
        </div>
      </button>
    </div>
  );
};

export default DarkModeToggle;
