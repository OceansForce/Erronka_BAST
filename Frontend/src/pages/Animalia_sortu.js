import Animali_Form from '../components/formularioak/animali_Form.js';
import { useTranslation } from 'react-i18next';
import i18n from './../118n/menu.js';

function Animalia_sortu(){

  const { t, i18n } = useTranslation();
    
  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);  // Cambia el idioma
  };

  return(
      <>
          <Animali_Form tituloa={t('Ad_adoptatu:Titulo2')} atras={"/Profila"} ruta={"/Profila"}/>
      </>
  );
}

export default Animalia_sortu;