import React, { useState, useEffect } from "react";

const Menu = () => {
  // Estado inicial: detectar si el modo oscuro está activado
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem("dark-mode");
    if (storedPreference !== null) {
      return storedPreference === "true";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Estado para rastrear qué botón está activo
  const [activeButton, setActiveButton] = useState("Profile");

  // Efecto para manejar el modo oscuro
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
    <div className="flex items-center justify-center   transition-colors duration-300">
      <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-full px-4 py-2 shadow-md">
        {/* Botón para Profile */}
        <button
          className={`py-1 px-4 rounded-full transition ${
            activeButton === "Profile"
              ? isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-black text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
          onClick={() => setActiveButton("Profile")}
        >
          Profile
        </button>

        {/* Separador */}
        <span className="text-gray-500 dark:text-gray-400">|</span>

        {/* Botón para Contact */}
        <button
          className={`py-1 px-4 rounded-full transition ${
            activeButton === "Contact"
              ? isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-black text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
          onClick={() => setActiveButton("Contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Menu;
