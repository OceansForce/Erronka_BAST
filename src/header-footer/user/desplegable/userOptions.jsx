import React, { useState, useEffect } from 'react';

const UserOptions = ({ changeLanguage }) => {
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
    <div className="relative language-selector">
      <img
        src="/img/icons/users/user-dog.jpg"
        className="w-10 h-10 cursor-pointer rounded-full"
        alt="Seleccionar idioma"
        onClick={toggleDropdown}
      />

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-md z-10">
          <ul className="list-none p-2">
            <li
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              Euskera
            </li>
            <li
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              Español
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserOptions;
