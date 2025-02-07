import Animali_Form from '../components/formularioak/animali_Form.js';
import { useTranslation } from 'react-i18next';
import i18n from './../118n/menu.js';
import { useLocation } from "react-router-dom";

function Animalia_sortu(){

  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { atzera } = location.state || {};
    
  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);  // Cambia el idioma
  };

  return(
      <>
          <Animali_Form tituloa={t('Ad_adoptatu:Titulo2')} atras={atzera}/>
      </>
  );
}

export default Animalia_sortu;