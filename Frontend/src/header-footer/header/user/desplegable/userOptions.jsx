import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const UserOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
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
        className="size-12 cursor-pointer rounded-full"
        alt="Seleccionar idioma"
        onClick={toggleDropdown}
      />

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md z-10">
          <ul className="list-none p-2">


            <li className="p-2 rounded">
              <h2 className='font-semibold text-center'>{t('user:agurra')}, Manex</h2>
            </li>

            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href='#' className='flex items-center'>
                <img className='size-8 rounded-full' src='/img/icons/users/user-dog.jpg'/>
                <h4 className='ml-3'>{t('user:profila')}</h4>
              </a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href='#' className='flex items-center'>
                <img className='size-8 rounded-full' src='/img/icons/users/chat.svg'/>
                <h4 className='ml-3'>{t('user:chat')}</h4>
              </a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href='#' className='flex items-center'>
                <img className='size-8 rounded-full' src='/img/icons/users/config.svg'/>
                <h4 className='ml-3'>{t('user:konfig')}</h4>
              </a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href='#' className='flex items-center'>
                <img className='size-8 rounded-full' src='/img/icons/users/exit.svg'/>
                <h4 className='ml-3'>{t('user:exit')}</h4>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserOptions;
