import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Usa useNavigate aquí


const UserOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  // Alterna la visibilidad del menú
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const izena = localStorage.getItem('izena');
  const protektora = localStorage.getItem('protektora') || null;
  //console.log("Protektora: "+protektora)



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


  const borrarLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
    //alert('localStorage ha sido borrado');
  };

  return (
    <div className="relative language-selector ">
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
              <h2 className='font-semibold text-center'>{t('user:agurra')}, { izena }</h2>
            </li>

            

            {protektora !== null && (
              <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                <Link to='/Ad_menu' className='flex items-center'>
                  <img className='size-8 rounded-full' src='/img/icons/users/admin.svg' alt='Administración'/>
                  <h4 className='ml-3'>{t('user:administration')}</h4>
                </Link>
              </li>
            )}


            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <Link to="/Profila" className='flex items-center'>
                <img className='size-8 rounded-full' src='/img/icons/users/user-dog.jpg'/>
                <h4 className='ml-3'>{t('user:profila')}</h4>
              </Link>
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
              <a href='#' className='flex items-center' onClick={(e) => {
                e.preventDefault();  // Evita el comportamiento por defecto del enlace
                borrarLocalStorage();
              }}>
                <img className='size-8 rounded-full' src='/img/icons/users/exit.svg' alt='Salir'/>
                <h4 className='ml-3'>Salir</h4>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserOptions;
