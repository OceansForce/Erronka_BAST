import { useEffect, useState } from 'react';
import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import BackButton from '../components/bottons/backBotom';
import SendButom from '../components/bottons/sendBotton';
import IpAPI from '../config/ipAPI';
import { checkProtektora } from '../components/security/security';
import { useNavigate } from 'react-router-dom';

function Ad_adoptatu(){

  const [aktibatuta1, setAktibatuta1]= useState(true);
  const aldatu1=()=>{
    setAktibatuta1(!aktibatuta1);
  }
  const [aktibatuta2, setAktibatuta2]= useState(true);
  const aldatu2=()=>{
    setAktibatuta2(!aktibatuta2);
  }
  const [aktibatuta3, setAktibatuta3]= useState(true);
  const aldatu3=()=>{
    setAktibatuta3(!aktibatuta3);
  }
  
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

  const [newsData, setNewsData] = useState();


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
    img:"",
});

// Estado para manejar el mensaje de éxito
const [successMessage, setSuccessMessage] = useState('');

// Manejador de cambios en los campos del formulario
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

// Manejador del envío del formulario
const handleSubmit = async (e, newsId) => {
    e.preventDefault();

    // Combinar los párrafos con "|||"
  
    const tok = localStorage.getItem('token');

    // Crear el cuerpo de la solicitud
    const body = {
        name:formData.name,
        etxekoAnimalia: etxekoa,
        type: mota,
        animalType: arraza,
        bakuna: esterilizado,
        gender: sexo,
        descripcion: formData.descripcion,
        year: formData.year,
        img: null,
    };
    console.log(body);
    try {
        const response = await fetch(`${IpAPI}/api/animals-create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tok}`,
            },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            const result = await response.json();
            // Ondo atera dela ezateko
            setSuccessMessage(t('ad_notiziak:Animalia adoptatua sortuta'));

            // Limpiar los campos del formulario
            setFormData({
              name:"",
              etxekoAnimalia:"",
              type:"",
              animalType: "",
              bakuna:"",
              gender:"",
              descripcion:"",
              year:"",
              img:""
            });
        } else {
            const error = await response.json();
            console.error('Error al crear la noticia:', error);
            alert('Error al crear la noticia. Revisa los datos.');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error en la solicitud. Revisa tu conexión.');
    }
  };

  return(
      <>
          <div  className='container flex  justify-center erdian'>
        <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-full rounded-lg text-center border-black dark:border-transparent border-2'>
          <div className='w-full flex'>
              
            <BackButton targetPage="/Ad_menu" width={20}/>

            
              <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                  <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                  <DarkModeToggle className='w-1/2' />
              </div>
            
          </div>
          <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>{t('Ad_adoptatu:Titulo')}</p>
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
                  <option value="txakurra">{t("ad_galduta:Txakurra")}</option>
                  <option value="txakurra ppp">{t("ad_galduta:Txakurra")} PPP</option>
                  <option value="katua">{t('ad_galduta:Katua')}</option>
                  <option value="besteak">{t('ad_galduta:Beste_bat')}</option>
                </select>

                <label className='font-semibold dark:text-white mt-4'>{t('Ad_adoptatu:Arraza')}</label>
                <select onChange={(e)=> setArraza(e.target.value)} required>
                  <option value="Txakurra">{t("ad_galduta:Txakurra")}</option>
                  <option value="Txakurra PPP">{t("ad_galduta:Txakurra")} PPP</option>
                  <option value="Katua">{t('ad_galduta:Katua')}</option>
                  <option value="Beste bat">{t('ad_galduta:Beste_bat')}</option>
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
                  <input type='radio' name='Etxekoa' onChange={(e)=> setEtxekoa(true)} required/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Bai')}</label>
                </div>

                <div className='ml-3'>
                  <input type='radio' name='Etxekoa'  onChange={(e)=> setEtxekoa(false)} required/><label className='ml-1 dark:text-white fonts_ubutu'>{t('ad_galduta:Ez')}</label>
                </div>

              </div>

              <div className=' w-1/2 flex flex-col mr-5'>
                <label className='font-semibold dark:text-white'>{t('ad_galduta:Profil')}</label>
                <input className='mb-2 dark:border-primary rounded-lg dark:text-white' type='file' required/>

                <label className='font-semibold dark:text-white'>{t('ad_galduta:Beste')}</label>
                <div>
                  <input
                      className='mb-2 dark:border-primary rounded-lg dark:text-white'
                      type='file'
                      disabled={aktibatuta1}
                      name='img'
                      onChange={handleChange}
                      
                  />
                  <input type="checkbox"  checked={!aktibatuta1}  onChange={aldatu1} />
                </div>
                <div>
                  <input
                      className='mb-2 dark:border-primary rounded-lg dark:text-white'
                      type='file'
                      disabled={aktibatuta2}
                      name='img'
                      onChange={handleChange}
                      
                  />
                  <input type="checkbox"  checked={!aktibatuta2}  onChange={aldatu2} />
                </div>
                <div>
                  <input
                      className='mb-2 dark:border-primary rounded-lg dark:text-white'
                      type='file'
                      disabled={aktibatuta3}
                      name='img'
                      onChange={handleChange}
                      
                  />
                  <input type="checkbox"  checked={!aktibatuta3}  onChange={aldatu3} />
                </div>
              </div>
            </div>

            <div className='flex flex-row mt-2'>
             

              <div className=' w-full flex flex-col'>
                <label className='font-semibold dark:text-white'>{t('ad_galduta:Deskribapena')}</label>
                <textarea  className='dark:border-primary border-black border-2 rounded-lg' rows={6} name='descripcion' value={formData.descripcion} onChange={handleChange} required></textarea>
              </div>
            </div>


            <SendButom value={t('saioa_sortu:input')} />
          </form>
        </div>
      </div>
      </>
  );
}

export default Ad_adoptatu;