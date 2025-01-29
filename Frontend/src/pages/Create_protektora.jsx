import { useEffect, useState } from 'react';
import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector.jsx';
import DarkModeToggle from '../header-footer/header/dark-light/dark.js';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu.js';
import BackButton from '../components/bottons/backBotom.jsx';
import SendButom from '../components/bottons/sendBotton.jsx';
import IpAPI from '../config/ipAPI.js';
import { checkProtektora } from '../components/security/security.jsx';
import { json, useNavigate } from 'react-router-dom';

// Importar Provincias y Ciudades
import ProvinciasYCiudades from '../components/geo/ProvinciasYCiudades.jsx';

function Create_protektora(){
  const [formData, setFormData] = useState({
    name: "",
    telefono: "",
    email: "",
    provintzia: "",
    hiria: "",
    logo: "",
  });

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Llamar a checkProtektora en el useEffect
  useEffect(() => {
    checkProtektora(navigate);
  }, [navigate]);

  // Cambiar idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  // Enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos requeridos
    if (!formData.name || !formData.telefono || !formData.email || !formData.provintzia || !formData.hiria || !formData.logo) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    const tok = localStorage.getItem('token');
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('telefono', formData.telefono);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('provintzia', formData.provintzia);
    formDataToSend.append('hiria', formData.hiria);

    // Si hay logo, agregarlo al FormData
    if (formData.logo) {
      formDataToSend.append('logo', formData.logo);
    }

    try {
      const response = await fetch(`${IpAPI}/api/protektora-create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tok}`,
        },
        body: formDataToSend, // FormData maneja la codificación de archivos
      });

      if (response.ok) {
        alert(t('Protektora creada correctamente'));
        setFormData({
          name: "",
          telefono: "",
          email: "",
          provintzia: "",
          hiria: "",
          logo: null, // Resetear la imagen
        });
      } else {
        const error = await response.json();
        alert('Error: ' + error.message);
      }
    } catch (error) {
      alert('Error en la solicitud: ' + error.message);
    }
  };

  return (
    <>
      <div className='container flex justify-center erdian'>
        <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-full rounded-lg text-center border-black dark:border-transparent border-2'>
          <div className='w-full flex'>
            <BackButton targetPage="/Ad_menu" width={20} />
            <div className='w-11/12 flex flex-row space-x-4 justify-end'>
              <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
              <DarkModeToggle className='w-1/2' />
            </div>
          </div>

          <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>{t('createProtektora:titulua')}</p>
          <form className='flex flex-col text-left' onSubmit={handleSubmit}>
            <div className='flex flex-row'>
              <div className='flex flex-col w-1/2 mr-10'>
                <label className='font-semibold dark:text-white'>{t('createProtektora:izena')}</label>
                <input className='mb-2 dark:border-primary rounded-lg' type='text' name='name' value={formData.name} onChange={handleChange} required />

                <label className='mt-2 font-semibold dark:text-white'>{t('createProtektora:Telefono')}</label>
                <input type='text' className='mb-2 dark:border-primary rounded-lg' name='telefono' value={formData.telefono} onChange={handleChange} required />
              </div>

              <div className='flex flex-col w-1/2'>
                <label className='font-semibold dark:text-white'>{t('createProtektora:Email')}</label>
                <input type='email' className='mb-2 dark:border-primary rounded-lg' name='email' value={formData.email} onChange={handleChange} required />

                {/* Usamos ProvinciasYCiudades para manejar la provincia y la ciudad */}
                <ProvinciasYCiudades 
                  selectedProvincia={formData.provintzia}
                  setSelectedProvincia={(value) => setFormData({...formData, provintzia: value})}
                  selectedPueblo={formData.hiria}
                  setSelectedPueblo={(value) => setFormData({...formData, hiria: value})}
                />
              </div>
            </div>

            <div className='flex flex-row mt-2'>
              <div className='w-full flex flex-col'>
                <label className='font-semibold dark:text-white'>{t('createProtektora:Logo')}</label>
                <input className='mb-2 dark:border-primary rounded-lg' type='file' name='logo' onChange={handleFileChange} required />
              </div>
            </div>

            <SendButom value={t('createProtektora:Sortu')} />
          </form>
        </div>
      </div>
    </>
  );
}

export default Create_protektora;
