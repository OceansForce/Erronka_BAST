import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Adopzioa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  // Alterna la visibilidad del menú cuando el ratón entra o sale
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className="relative language-selector"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <li>
        <a href="#" className="text-black dark:text-white">
          {t('menu:adopzio')}
        </a>
      </li>

      {isOpen && (
        <div className="absolute left-0 pt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md z-10">
          <ul className="list-none p-2">
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#" className="flex items-center">
                <img className="size-8 rounded-full" src="/img/icons/users/user-dog.jpg" />
                <h4 className="ml-3">{t('adopzio:txakurra')}</h4>
              </a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#" className="flex items-center">
                <img className="size-8 rounded-full" src="/img/icons/users/chat.svg" />
                <h4 className="ml-3">{t('adopzio:ppp')}</h4>
              </a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#" className="flex items-center">
                <img className="size-8 rounded-full" src="/img/icons/users/config.svg" />
                <h4 className="ml-3">{t('adopzio:katua')}</h4>
              </a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#" className="flex items-center">
                <img className="size-8 rounded-full" src="/img/icons/users/exit.svg" />
                <h4 className="ml-3">{t('adopzio:Besteak')}</h4>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Adopzioa;
