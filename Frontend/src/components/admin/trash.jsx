import { useState } from 'react';
import IpAPI from '../../config/ipAPI';
import i18n from '../../118n/menu';
import { useTranslation } from 'react-i18next';



const Trash = (id) => {
    const [value, setValue] = useState("");
    const [successMessage, setSuccessMessage] = useState('');
    const { t, i18n } = useTranslation();
  

    const handleImageClick = async (e) => {

        setValue("");

        


        const tok = localStorage.getItem('token');

        try {
            const response = await fetch(`${IpAPI}/api/news/${id.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${tok}`,
            },
            
            });
        
            if (response.ok) {
                const result = await response.json();
                setSuccessMessage(t('News delete susefully'));
                
            } else {
            const error = await response.json();
            alert('Error: ' + error.message);
            }
    } catch (error) {
        alert('Error en la solicitud: ' + error.message);
    }
  };

  return (
    <div className="flex items-center">
      {/* Usamos la imagen para representar el input */}
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        className="hidden"  // Ocultamos el input real
      />
      
      {/* Imagen para simular el input */}
      <div 
        className="flex items-center cursor-pointer"
        onClick={handleImageClick} 
        aria-label="Borrar" // Descripción accesible
      >
        {/* Imagen blanca */}
        <img 
          src='./img/icons/notizia/trash_white.svg' 
          className='size-7 mr-3 dark:hidden transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-red-500 rounded-full' 
        />
        {/* Imagen negra */}
        <img 
          src='./img/icons/notizia/trash_black.svg' 
          className='size-7 mr-3 hidden dark:block transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-red-500 rounded-full' 
        />
      </div>
    </div>
  );
};

export default Trash;
