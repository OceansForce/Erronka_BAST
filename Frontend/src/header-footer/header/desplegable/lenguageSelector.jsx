import React, { useState, useEffect } from 'react';

const LanguageSelector = ({ changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Alterna la visibilidad del menú
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.language-selector') === null) {
        setIsOpen(false);
        
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative language-selector flex flex-row items-center">
      <img
        src="/img/icons/menu/language.svg"
        className="size-7 cursor-pointer dark:hidden hover:scale-110 active:scale-95 duration-300"
        alt="Seleccionar idioma"
        onClick={toggleDropdown}
      />
      <img
        src="/img/icons/menu/language_black.svg"
        className="size-7 cursor-pointer hidden dark:block hover:scale-110 active:scale-95 duration-300"
        alt="Seleccionar idioma"
        onClick={toggleDropdown}
      />


      

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-md z-10">
          <ul className="list-none p-2">
            <li
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => changeLanguage('eu')}  // Llama a changeLanguage con 'eu' para Euskera
            >
              Euskera
            </li>
            <li
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => changeLanguage('es')}  // Llama a changeLanguage con 'es' para Español
            >
              Español
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
