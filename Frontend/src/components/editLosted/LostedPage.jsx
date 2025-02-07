import { useEffect } from 'react';
import LanguageSelector from '../../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../../header-footer/header/dark-light/dark';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../118n/menu';
import IpAPI from '../../config/ipAPI';
import BackButton from '../../components/bottons/backBotom';
import SendButom from '../../components/bottons/sendBotton';
import { useNavigate, useLocation } from 'react-router-dom';
import ProvinciasYCiudades from '../../components/geo/ProvinciasYCiudades.jsx';

function LostedPage({ item, ruta }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [etxekoa, setEtxekoa] = useState(1);
    const { t, i18n } = useTranslation();
    console.log(item);
    
    const [formData, setFormData] = useState({
        id: item.id,
        hiria: '',
        provintzia: '',
        data: '',  // Campo para la fecha
        moreInformation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tok = localStorage.getItem('token');
        const formDataToSend = new FormData();
        
        formDataToSend.append('id', formData.id);
        formDataToSend.append('hiria', formData.hiria);
        formDataToSend.append('provintzia', formData.provintzia);
        formDataToSend.append('fecha', formData.data); // Asegúrate de que el nombre coincida con el backend
        formDataToSend.append('moreInformation', formData.moreInformation);
        
        try {
            const response = await fetch(`${IpAPI}/api/set-losted`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${tok}`,
                },
                body: formDataToSend,
            });
        
            if (!response.ok) {
                const errorText = await response.text();
                console.error("Error response:", errorText);
                alert(`Error: ${errorText}`);
                return;
            }
        
            const result = await response.json();
            console.log("Server response:", result);
            setFormData({
                hiria: '',
                provintzia: '',
                data: '', // Resetear el campo de fecha
                moreInformation: ''
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
                <div className='flex flex-row'>
                    <div className='flex flex-col w-1/2 mr-10'>
                        <ProvinciasYCiudades 
                            selectedProvincia={formData.provintzia}
                            setSelectedProvincia={(value) => {
                                console.log("Provincia seleccionada en formData:", value);
                                setFormData((prev) => ({ ...prev, provintzia: value }));
                            }}
                            selectedPueblo={formData.hiria}
                            setSelectedPueblo={(value) => {
                                console.log("Ciudad seleccionada en formData:", value);
                                setFormData((prev) => ({ ...prev, hiria: value }));
                            }}
                        />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        {/* Campo para la fecha */}
                        <label className='font-semibold dark:text-white'>{t('ad_galduta:Fecha')}</label>
                        <input 
                            type='date' 
                            name='data' 
                            value={formData.data} 
                            onChange={handleChange} 
                            className='dark:border-primary border-black border-2 rounded-lg' 
                            required 
                        />
                    </div>
                </div>
                
                <div className='flex flex-row mt-2'>
                    <div className='w-full flex flex-col'>
                        <label className='font-semibold dark:text-white'>{t('ad_galduta:Deskribapena')}</label>
                        <textarea 
                            className='dark:border-primary border-black border-2 rounded-lg' 
                            rows={6} 
                            name='moreInformation' 
                            value={formData.moreInformation} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                </div>
                
                <SendButom value={t('saioa_sortu:input')} />
            </form>
        </>
    );
}

export default LostedPage;
