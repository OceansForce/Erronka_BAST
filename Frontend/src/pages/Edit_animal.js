import { useEffect } from 'react';
import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import IpAPI from '../config/ipAPI';
import BackButton from '../components/bottons/backBotom';
import SendButom from '../components/bottons/sendBotton';
import { checkProtektora } from '../components/security/security';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Irudiak_input from './../components/notiziak/IrudiakInput.js';
import { document } from 'postcss';


function Edit_animal() {
   
    const [etxekoa, setEtxekoa]= useState(0);
    const [esterilizado, setEsterilizado]= useState(0);
   
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); 
    };

    const location = useLocation();
    const { id } = location.state || {}; //Link etiketatik id-a lortzeko

    // Estado para manejar los datos del formulario
    const [formData, setFormData] = useState({
        name:"",
        etxekoAnimalia:"",
        bakuna:"",
        descripcion:"",
        img:''
    });

    useEffect(() => {
        

        const fetchSingleNews = async (newsId) => {
            try {
                const response = await fetch(`${IpAPI}/api/animal-adopt/${newsId}`, {
                    method:'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                

                if (!response.ok) {
                    throw new Error(`Error fetching news with id ${newsId}`);
                }else{
                    const data = await response.json();
                    console.log("Animal",data);
                    // Inicializar formData con los datos recibidos
                    setFormData({
                        name: data.name,
                        etxekoAnimalia: data.etxekoAnimalia,
                        bakuna: data.bakuna,
                        descripcion: data.descripcion,
                        img: data.img
                    });

                    
                    
                    
                }
                

            } catch (error) {
                console.error('Error fetching single news:', error);
                alert('Error al obtener los datos de la noticia.');
            }
        };
        console.log("ID",id);
        if (id) {
            fetchSingleNews(id); // Llamar a la API cuando `id` esté disponible

        }
    }, [id]);

    const radioak_aldatu=()=>{

        let radio_esterilizatua1=  document.getElementById("esterilizatua1");
        let radio_esterilizatua2=  document.getElementById("esterilizatua2");

        let radio_etxe1=  document.getElementById("etxekoa1");
        let radio_etxe2=  document.getElementById("etxekoa2");

        if(formData.etxekoAnimalia){
            radio_etxe1.disabled=true;
            radio_etxe2.disabled=false;
        }else{
            radio_etxe1.disabled=false;
            radio_etxe2.disabled=true; 
        }

        if(formData.bakuna){
            radio_esterilizatua1.disabled=true;
            radio_esterilizatua2.disabled=false;
        }else{
            radio_esterilizatua1.disabled=false;
            radio_esterilizatua2.disabled=true;
        }
    }
    radioak_aldatu();

    // Datuak aldatzeko
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Manejador del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const tok = localStorage.getItem('token');
        const formDataToSend = new FormData();
    
        formDataToSend.append('name', formData.name);
        formDataToSend.append('etxekoAnimalia', etxekoa);
        formDataToSend.append('bakuna', esterilizado);
        formDataToSend.append('descripcion', formData.descripcion);
    
        // Si hay imagen, agregarla al FormData
        if (formData.img) {
        formDataToSend.append('img', formData.img);
        }

        console.log(formDataToSend);
    
        try {
        const response = await fetch(`${IpAPI}/api/animals-edit`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${tok}`,
            },
            body: formDataToSend, // FormData ya maneja la codificación de archivos
        });
    
        if (response.ok) {
            const result = await response.json();
            setFormData({
            name: "",
            etxekoAnimalia: "",
            bakuna: "",
            descripcion: "",
            img: null, // Resetear la imagen
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
                <BackButton targetPage={"/Profila"} width={20}/>

                <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                    <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                    <DarkModeToggle className='w-1/2' />
                </div>
              </div>

              <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>Animalia Editatu</p>
              <form className='flex flex-col text-left' onSubmit={handleSubmit}>

                <div className='flex flex-row'>
                    <div className='flex flex-col w-1/2 mr-10'>
                        <label className='font-semibold dark:text-white'>{t('ad_galduta:Izena')}</label>
                        <input className='mb-2 dark:border-primary rounded-lg ' type='text' name='name'  value={formData.name} onChange={handleChange} required/>
                        
                        <label className='font-semibold dark:text-white'>{t('ad_galduta:Profil')}</label>
                        <input 
                            className='mb-2 dark:border-primary rounded-lg dark:text-white' 
                            type='file'
                            name='img'
                            // value={formData.img}
                            onChange={(e) => setFormData({ ...formData, img: e.target.files[0] })}  // Cambiar aquí
                            required/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <div className=' w-1/2'>
                            <label className='mt-2 font-semibold dark:text-white'>{t("ad_galduta:Esterilizatua")}</label> 
                            <div className='ml-3'>
                                <input type='radio' name='Esterilizatua' id='esterilizatua1' value={1} onChange={(e)=> setEsterilizado(parseInt(e.target.value))}/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Bai')}</label>
                            </div>

                            <div className='ml-3'>
                                <input type='radio' name='Esterilizatua' id='esterilizatua2' value={2} onChange={(e)=> setEsterilizado(parseInt(e.target.value))}/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Ez')}</label>
                            </div>
                        </div>
                        <label className='font-semibold dark:text-white'>{t('Ad_adoptatu:Etxekoa')}</label>
                        <div className='ml-3'>
                            <input type='radio' name='Etxekoa' id='etxekoa1' value={1} onChange={(e)=> setEtxekoa(parseInt(e.target.value))} required/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Bai')}</label>
                        </div>

                        <div className='ml-3'>
                            <input type='radio' name='Etxekoa' id='etxekoa2' value={2} onChange={(e)=> setEtxekoa(parseInt(e.target.value))} required/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Ez')}</label>
                        </div>
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
  
export default Edit_animal;