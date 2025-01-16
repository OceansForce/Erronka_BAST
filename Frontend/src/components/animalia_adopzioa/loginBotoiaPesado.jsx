import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import IpAPI from '../../config/ipAPI';
import { use } from 'react';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const LoginBotoiaPesado = ({ IsModalOpen }) => {

  const navigate = useNavigate(); // Hook de navegación
    const { t, i18n } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);  // Estado para abrir/cerrar el modal
    const tok = localStorage.getItem('token'); // Obtener el token de localStorage

    // Función para manejar la apertura del modal
    const handleOpenModal = () => {
        if (!tok) {
            setIsModalOpen(true);  // Si el token es nulo, abrir el modal
        } else {
            // Si el token no es nulo, puedes mostrar un mensaje o realizar alguna acción
            alert('No puedes eliminar tu cuenta mientras estés autenticado.');
        }
    };

    useEffect(() => {
      // Esta función se ejecuta cuando el componente se monta
      setIsModalOpen(true);
  
    }, [IsModalOpen]);

    // Función para manejar el cierre del modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const kontuaSortu = () => {
      setIsModalOpen(false);
      navigate('/saioa_sortu');
  };

    // Función para manejar la confirmación del delete
    const saioaHasi = () => {
        // Aquí va el código para realizar la acción de eliminar (por ejemplo, eliminar la cuenta del usuario)
        //alert('Cuenta eliminada');
        setIsModalOpen(false);  // Cerrar el modal después de la acción
        navigate('/login');
    };

    return (
      <>
        

        {isModalOpen && (
          <div
            id="deleteModal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <div className="relative p-4 w-full max-w-md h-auto bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <button
                type="button"
                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleCloseModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              {/* basura */}
              <svg 
                  className="text-dark-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" 
                  viewBox="0 0 16 16" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"/>
                  <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"/>
              </svg>

              <p className="mb-4 text-gray-500 dark:text-gray-300">
                {t("Adop_Anim:ezSaioaHasita")}
              </p>
              <div className="flex justify-center items-center space-x-4">
                <button
                  data-modal-toggle="deleteModal"
                  onClick={saioaHasi}
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  {t("Adop_Anim:saioaHasi")}
                </button>
                <button
                  onClick={kontuaSortu}
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-900"
                >
                  {t("Adop_Anim:kontuaSortu")}
                  
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default LoginBotoiaPesado;
