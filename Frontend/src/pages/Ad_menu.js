import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import { Link } from 'react-router-dom';

function Ad_menua() {
    const { t, i18n } = useTranslation();

    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);  // Cambia el idioma
    };

    return(
        <>
            <div className='flex flex-row w-42 space-x-5 mt-10 bg-primary dark:bg-dark p-5 rounded-3xl'>
                <Link to="/">
                    <img className='w-20 bg-white px-5 rounded-full' src="/img/icons/arrow-left.svg"></img>
                </Link>
                <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                <DarkModeToggle className='w-1/2' />  
            </div>
            <div className="w-full flex flex-row bg-red erdian text-center space-x-14">
                <Link to="/Ad_notiziak" className='w-1/5 bg-primary  rounded-3xl py-20'>
                    <button className=" flex flex-col justify-center items-center ">
                            <img className="w-2/5" src="./img/newspaper-svgrepo-com.svg"/>
                            <p className=" font-semibold fonts_ubutu text-2xl">Noticias</p>
                    </button>
                </Link>
                
                <Link to="/Ad_galduta" className='w-1/5 bg-primary  rounded-3xl py-20'> 
                    <button className="flex flex-col justify-center items-center">
                            <img className="w-2/5" src="./img/animal-domestic-lost-svgrepo-com.svg"/>
                            <p className=" font-semibold fonts_ubutu text-2xl">Perdidos</p>
                    </button>
                </Link>

                <Link to="/Ad_adoptatu" className='w-1/5 bg-primary  rounded-3xl py-20'> 
                    <button className=" flex flex-col justify-center items-center ">
                   
                        <img className="w-2/5" src="./img/animal-approve-cat-svgrepo-com.svg"/>
                        <p className=" font-semibold fonts_ubutu text-2xl">Adoptar</p>
                 
                    </button>
                </Link>

            </div>
        </>
    );    
}

export default Ad_menua;