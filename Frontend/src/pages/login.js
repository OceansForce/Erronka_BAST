
import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import Footer from '../header-footer/footer';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';

function Login() {
    const { t, i18n } = useTranslation();

    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);  // Cambia el idioma
    };

    return (
      <>
        <div  className='w-full h-full flex  justify-center'>
          <div className='flex flex-col bg-primary p-6 m-10 w-1/5 rounded-lg text-center'>
            <div className='flex flex-row space-x-4'>
              <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
              <DarkModeToggle className='w-1/2' />
            </div>
            <p>LOGIN</p>
            <form className='flex flex-col text-left'>
              <label>Izena</label>
              <input className='mb-2' type='text'/>
              <label>Abizena</label>
              <input className='mb-2' type='text'/>
              <label>DNI</label>
              <input className='mb-2' type='text' maxLength={9}/>
              <label>Gmail</label>
              <input className='mb-2' type='email'/>
              <label>Contraseña</label>
              <input className='mb-2' type='password'/>
              <label>Confirmar Contraseña</label>
              <input className='mb-2' type='password'/>
              <input className='bg-black text-white mt-2 p-2 rounded-lg' type='submit'></input>
            </form>
          </div>
        </div>
       
      </>
    );
  }
  
export default Login;