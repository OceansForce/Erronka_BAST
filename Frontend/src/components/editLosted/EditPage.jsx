import { useEffect } from 'react';
import LanguageSelector from '../../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../../header-footer/header/dark-light/dark';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../118n/menu';
import IpAPI from '../../config/ipAPI';
import BackButton from '../../components/bottons/backBotom';
import SendButom from '../../components/bottons/sendBotton';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Irudiak_input from './../../components/notiziak/IrudiakInput.js';
import { document } from 'postcss';



function EditPage({item, ruta}) {

    const navigate = useNavigate();
    const location = useLocation(); 
    const [etxekoa, setEtxekoa] = useState(1); // Valor inicial predeterminado
    const [esterilizado, setEsterilizado]= useState(1);
    const [activeSection, setActiveSection] = useState('Profile');

    
    console.log(item);
    // Efecto para actualizar el estado de etxekoa cuando item esté disponible
    useEffect(() => {
        if (item) {
            setEtxekoa(item.etxekoAnimalia ? 1 : 0); // Establece el valor según `item.etxekoAnimalia`
        }
    }, [item]);

    useEffect(() => {
        if (item) {
            setEsterilizado(item.bakuna ? 1 : 2); // Establece el valor según `item.etxekoAnimalia`
        }
    }, [item]);

   
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); 
    };
    const id=1;

    

    // Estado para manejar los datos del formulario
    const [formData, setFormData] = useState({
        id:item.id,
        name:item.name,
        etxekoAnimalia:etxekoa,
        bakuna:esterilizado,
        descripcion:item.descripcion,
        img:null
    });

    
    

    // Datuak aldatzeko
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Manejador del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log("Image to be uploaded:", formData.img);
        const tok = localStorage.getItem('token');
        const formDataToSend = new FormData();
    

        formDataToSend.append('id', formData.id);
        formDataToSend.append('name', formData.name);
        formDataToSend.append('etxekoAnimalia', etxekoa);
        formDataToSend.append('bakuna', esterilizado);
        formDataToSend.append('descripcion', formData.descripcion);
    
        if (formData.img && formData.img instanceof File) {
            console.log("Image to be uploaded:", formData.img);
            formDataToSend.append('img', formData.img);
        }
        
        // console.log("form:data", formDataToSend.get('img'));

        // console.log(formDataToSend);
    
        try {
            const response = await fetch(`${IpAPI}/api/animals-edit`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${tok}`,
                },
                body: formDataToSend,
            });
        
            if (!response.ok) {
                const errorText = await response.text(); // Obtener el cuerpo de la respuesta
                console.error("Error response:", errorText);
                alert(`Error: ${errorText}`);
                return;
            }
        
            const result = await response.json();
            console.log("Server response:", result);
        
            // Si la respuesta es exitosa
            setFormData({
                name: "",
                etxekoAnimalia: "",
                bakuna: "",
                descripcion: "",
                img: null, // Resetear la imagen
            });
            navigate(ruta);
        
        } catch (error) {
            console.error("Request failed:", error);
            alert('Error en la solicitud: ' + error.message);
        }
        
    };


    return (
        <> 
            
            

                    <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>{t('ad_galduta:animalEdit')}</p>
                    <form className='flex flex-col text-left' onSubmit={handleSubmit}>

                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col w-1/2 mr-10'>
                                <label className='font-semibold dark:text-white'>{t('ad_galduta:Izena')}</label>
                                <input className='mb-2 dark:border-primary rounded-lg ' type='text' name='name'  value={formData.name} onChange={handleChange} required/>
                                
                                <label className='font-semibold dark:text-white'>{t('ad_galduta:Profil')}</label>
                                <input 
                                    className='mb-2 dark:border-primary rounded-lg dark:text-white' 
                                    type='file'
                                    name='img'
                                    //value={formData.img}
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        console.log("File selected:", file); // Verificar si el archivo está seleccionado
                                        setFormData({ ...formData, img: file });
                                    }}
                                    />
                            </div>
                            <div className='flex flex-col w-1/2'>
                                <div className=' w-1/2'>
                                    <label className='mt-2 font-semibold dark:text-white'>{t("ad_galduta:Esterilizatua")}</label> 
                                    <div className='ml-3'>
                                    <input
                                        type='radio'
                                        name='Esterilizatua'
                                        id='esterilizatua1'
                                        value={1}
                                        onChange={(e) => setEsterilizado(parseInt(e.target.value))}
                                        checked={esterilizado === 1}
                                    />
                                    <label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Bai')}</label>
                                </div>

                                <div className='ml-3 mt-2'>
                                    <input
                                        type='radio'
                                        name='Esterilizatua'
                                        id='esterilizatua2'
                                        value={2}
                                        onChange={(e) => setEsterilizado(parseInt(e.target.value))}
                                        checked={esterilizado === 2}
                                    />
                                    <label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Ez')}</label>
                                </div>

                                </div>
                                <label className='font-semibold dark:text-white'>{t('Ad_adoptatu:Etxekoa')}</label>
                                <div className='ml-3'>
                                    <input
                                        type='radio'
                                        name='Etxekoa'
                                        id='etxekoa1'
                                        value={1}
                                        onChange={(e) => setEtxekoa(parseInt(e.target.value))}
                                        checked={etxekoa === 1} // Si etxekoAnimalia es 1, el primer botón se selecciona
                                        required
                                    />
                                    <label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Bai')}</label>
                                </div>

                                <div className='ml-3'>
                                    <input
                                        type='radio'
                                        name='Etxekoa'
                                        id='etxekoa2'
                                        value={0}
                                        onChange={(e) => setEtxekoa(parseInt(e.target.value))}
                                        checked={etxekoa === 0} // Si etxekoAnimalia es 2, el segundo botón se selecciona
                                        required
                                    />
                                    <label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Ez')}</label>
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

                    </>      
           
    );
  }
  
export default EditPage;