import { useEffect, useState } from 'react';
import LanguageSelector from '../../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../../header-footer/header/dark-light/dark';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './../../118n/menu.js';
import BackButton from '../../components/bottons/backBotom';
import SendButom from '../../components/bottons/sendBotton';
import IpAPI from '../../config/ipAPI';
import { checkProtektora } from '../../components/security/security';
import Irudiak_input from './..//../components/notiziak/IrudiakInput.js';
import { json, useNavigate } from 'react-router-dom';

function Animali_Form({tituloa, atras, ruta}){
  
  const [mota, setMota]= useState("");
  const [arraza, setArraza]= useState("");
  const [sexo, setSexo]= useState(0);
  const [etxekoa, setEtxekoa]= useState(0);
  const [esterilizado, setEsterilizado]= useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    // Llamar a checkProtektora dentro del useEffect
    checkProtektora(navigate);
  }, [navigate]);
  
  const { t, i18n } = useTranslation();
  
  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);  // Cambia el idioma
  };

  const [dogRaza, setDogRaza] = useState([]);
  const [catRaza, setCatRaza] = useState([]);

  // Solicitar razas dependiendo del tipo de animal seleccionado
  useEffect(() => {
    if (mota === "txakurra" || mota === "txakurra ppp") {
      fetch('https://api.thedogapi.com/v1/breeds', {
        method: 'GET',
        headers: {
          //'X-Api-Key': 'wNALcAgq1+n3twiDg9KJfw==i8tnT6sao6xF2rp0',  // Reemplaza con tu clave API
          'Content-Type': 'application/json',  // Si es necesario
        }
      })
        .then((res) => res.json())
        .then((data) => setDogRaza(data.map(dog => dog.name)))
        .catch((err) => console.error('Error fetching dog breeds:', err));
      
    } else if (mota === "katua") {
      fetch('https://api.thecatapi.com/v1/breeds', {
        method: 'GET',
        headers: {
          //'X-Api-Key': 'wNALcAgq1+n3twiDg9KJfw==i8tnT6sao6xF2rp0',  // Reemplaza con tu clave API
          'Content-Type': 'application/json',  // Si es necesario
        }
      })
        .then((res) => res.json())
        .then((data) => setCatRaza(data.map(dog => dog.name)))
        .catch((err) => console.error('Error fetching dog breeds:', err));
      
    }
  }, [mota]);


  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name:"",
    etxekoAnimalia:"",
    type:"",
    animalType: "",
    bakuna:"",
    gender:"",
    descripcion:"",
    year:"",
    img:''
  });



  // Manejador de cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejador del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !mota || !arraza || !sexo || !etxekoa || !formData.descripcion || !formData.year) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }
  
    const tok = localStorage.getItem('token');
    const formDataToSend = new FormData();
  
    formDataToSend.append('name', formData.name);
    formDataToSend.append('etxekoAnimalia', etxekoa);
    formDataToSend.append('type', mota);
    formDataToSend.append('animalType', arraza);
    formDataToSend.append('bakuna', esterilizado);
    formDataToSend.append('gender', sexo);
    formDataToSend.append('descripcion', formData.descripcion);
    formDataToSend.append('year', formData.year);
  
    // Si hay imagen, agregarla al FormData
    if (formData.img) {
      formDataToSend.append('img', formData.img);
    }

    console.log(formDataToSend);
  
    try {
      const response = await fetch(`${IpAPI}/api/animals-create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tok}`,
        },
        body: formDataToSend, // FormData ya maneja la codificación de archivos
      });
  
      if (response.ok) {
        const result = await response.json();
        setFormData({
          name: "",
          etxekoAnimalia: "",
          type: "",
          animalType: "",
          bakuna: "",
          gender: "",
          descripcion: "",
          year: "",
          img: null, // Resetear la imagen
        });
        navigate(ruta);
      } else {
        const error = await response.json();
        alert('Error: ' + error.message);
      }
    } catch (error) {
      alert('Error en la solicitud: ' + error.message);
    }
  };
  


  return(
      <>
          <div className='container flex justify-center erdian'>
            <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-full rounded-lg text-center border-black dark:border-transparent border-2'>
              <div className='w-full flex'>
                <BackButton targetPage={atras} width={20}/>

                <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                    <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                    <DarkModeToggle className='w-1/2' />
                </div>
              </div>

              <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>{tituloa}</p>
              <form className='flex flex-col text-left' onSubmit={handleSubmit}>

                <div className='flex flex-row'>
                  <div className='flex flex-col w-1/2 mr-10'>
                    <label className='font-semibold dark:text-white'>{t('ad_galduta:Izena')}</label>
                    <input className='mb-2 dark:border-primary rounded-lg ' type='text' name='name'  value={formData.name} onChange={handleChange} required/>
                    
                    <label className='mt-2 font-semibold dark:text-white'>{t('ad_galduta:Adina')}</label> 
                    <input type='date' className='mb-2 dark:border-primary rounded-lg' name='year' value={formData.year}  onChange={handleChange}/>
                  </div>

                  <div className='flex flex-col w-1/2'>
                    <label className='font-semibold dark:text-white'>{t('ad_galduta:Mota')}</label>
                    <select onChange={(e)=> setMota(e.target.value)} required>
                      <option value="" disabled selected>{t("ad_galduta:Selecciona_mota")}</option>
                      <option value="txakurra">{t("ad_galduta:Txakurra")}</option>
                      <option value="txakurra ppp">{t("ad_galduta:Txakurra")} PPP</option>
                      <option value="katua">{t('ad_galduta:Katua')}</option>
                      <option value="besteak">{t('ad_galduta:Beste_bat')}</option>
                    </select>

                    <label className='font-semibold dark:text-white mt-4'>{t('Ad_adoptatu:Arraza')}</label>
                    <select onChange={(e)=> setArraza(e.target.value)} required>
                      <option value="">{t("ad_galduta:Selecciona_arraza")}</option>
                      {mota === "txakurra" || mota === "txakurra ppp" ? (
                        dogRaza.map((raza, index) => (
                          <option key={index} value={raza}>{raza}</option>
                        ))
                      ) : mota === "katua" ? (
                        catRaza.map((raza, index) => (
                          <option key={index} value={raza}>{raza}</option>
                        ))
                      ) : (
                        <option value="Otro">{t('ad_galduta:Otro')}</option>
                      )}
                    </select>
                  </div>
                </div>

                <div className='flex flex-row'>
                  <div className=' w-1/2 mr-10'>
                    <label className='font-semibold dark:text-white'>{t('ad_galduta:Sexua')}</label>

                    <div className='ml-3'>
                      <input type='radio' name='Sexua' value={1} onChange={(e)=> setSexo(parseInt(e.target.value))}/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Arra')}</label>
                    </div>

                    <div className='ml-3'>
                      <input type='radio' name='Sexua' value={2} onChange={(e)=> setSexo(parseInt(e.target.value))}/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Emea')}</label>
                    </div>
                  </div>

                  <div className=' w-1/2'>
                    <label className='mt-2 font-semibold dark:text-white'>{t("ad_galduta:Esterilizatua")}</label> 
                    <div className='ml-3'>
                      <input type='radio' name='Esterilizatua' value={1} onChange={(e)=> setEsterilizado(parseInt(e.target.value))}/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Bai')}</label>
                    </div>

                    <div className='ml-3'>
                      <input type='radio' name='Esterilizatua' value={2} onChange={(e)=> setEsterilizado(parseInt(e.target.value))}/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Ez')}</label>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row mt-2'>
                  <div className=' w-1/2 flex flex-col mr-10'>
                    <label className='font-semibold dark:text-white'>{t('Ad_adoptatu:Etxekoa')}</label>
                    <div className='ml-3'>
                      <input type='radio' name='Etxekoa' value={1} onChange={(e)=> setEtxekoa(parseInt(e.target.value))} required/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Bai')}</label>
                    </div>

                    <div className='ml-3'>
                      <input type='radio' name='Etxekoa' value={2} onChange={(e)=> setEtxekoa(parseInt(e.target.value))} required/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Ez')}</label>
                    </div>
                  </div>
                  <div className=' w-1/2 flex flex-col mr-5'>
                    <label className='font-semibold dark:text-white'>{t('ad_galduta:Profil')}</label>
                    <input 
                        className='mb-2 dark:border-primary rounded-lg dark:text-white' 
                        type='file'
                        name='img'
                        // value={formData.img}
                        onChange={(e) => setFormData({ ...formData, img: e.target.files[0] })}  // Cambiar aquí
                        required/>

                  {/* <label className='font-semibold dark:text-white'>{t('ad_galduta:Beste')}</label> */}
                  {/* <Irudiak_input handleChange={handleChange}/>
                  <Irudiak_input handleChange={handleChange}/>
                  <Irudiak_input handleChange={handleChange}/> */}
                </div>
                </div>
                    
              

              
                <div className='flex flex-row mt-2'>
                  <div className=' w-full flex flex-col'>
                    <label className='font-semibold dark:text-white'>{t('ad_galduta:Deskribapena')}</label>
                    <textarea className='dark:border-primary border-black border-2 rounded-lg' rows={6} name='descripcion' value={formData.descripcion} onChange={handleChange} required></textarea>
                  </div>
                </div>
            
                <SendButom value={t('saioa_sortu:input')} />
            </form>

          </div>
        </div>
      </>
  );
}

export default Animali_Form;
