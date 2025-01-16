import React from 'react';
import { useTranslation } from 'react-i18next';
import LoginBotoiaPesado from './loginBotoiaPesado';

const AdopzioBotoia = ({ text }) => {
    const tok = localStorage.getItem('token'); // Obtener el token de localStorage
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar si el modal está abierto o cerrado

    
    const handleClick = () => {
        if (tok === null) {
            // Si el token es null, mostramos el componente LoginBotoiaPesado
            console.log("Token no encontrado. Mostrar LoginBotoiaPesado.");
            setIsModalOpen(true)
        } else {
            // Si el token existe, mostramos un mensaje en la consola
            console.log("Token encontrado. Usuario autenticado.");
        }
    };

    return (
        <div className="w-full lg:w-2/3 flex flex-row justify-center lg:justify-end items-center">
            <input 
                type="submit" 
                className="w-30 h-10 bg-white text-black dark:bg-dark_body dark:text-white px-5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 border-dark dark:border-primary border-4" 
                value={text} 
                onClick={handleClick} // Llamamos a la función handleClick al hacer clic en el botón
            />
            {tok === null && <LoginBotoiaPesado setIsModalOpen={setIsModalOpen}/>} {/* Si el token es null, mostramos LoginBotoiaPesado */}
        </div>
    );
};

export default AdopzioBotoia;
