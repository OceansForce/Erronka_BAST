import Animali_Form from '../components/formularioak/animali_Form.js';
import { useTranslation } from 'react-i18next';
import i18n from './../118n/menu.js';

function Ad_adoptatu(){

  const { t, i18n } = useTranslation();
    
  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);  // Cambia el idioma
  };
 
  return(
      <>
          <Animali_Form tituloa={t('Ad_adoptatu:Titulo1')} atras={"/Ad_menu"} ruta={"/Ad_menu"}/>
      </>
  );
}

export default Ad_adoptatu;
