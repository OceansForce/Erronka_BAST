import { useEffect, useState } from 'react';
import ProvinciasYCiudades from '../../components/geo/ProvinciasYCiudades.jsx';
import SendButom from '../../components/bottons/sendBotton';
import { useNavigate } from 'react-router-dom';
import IpAPI from '../../config/ipAPI';
import { useTranslation } from 'react-i18next';

function LostedPage({ item, ruta }) {
    const navigate = useNavigate();
    const { t } = useTranslation();

    // Estado para manejar si los campos están deshabilitados
    const [isDisabled, setIsDisabled] = useState(false);
    const [lostedInformation, setLostedInformation] = useState(null);

    const [formData, setFormData] = useState({
        id: item.id,
        hiria: '',
        provintzia: '',
        data: '',
        moreInformation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        const fetchAnimalData = async () => {
            try {
                const response = await fetch(`${IpAPI}/api/animal-losted/${formData.id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (response.ok) {
                    const result = await response.json();
                    setLostedInformation(result); // Guardamos los datos en el estado
                    // console.log("datos Recibidos", result);
                }
            } catch (error) {
                setLostedInformation(null);
                // console.error("No hay datos:", error);
            }
        };
    
        fetchAnimalData(); // Ejecuta la función al cargar el componente
    }, [formData.id]); // Dependencia de formData.id para que se ejecute cuando el id cambie

    useEffect(() => {
        console.log("Datos de la mascota:", lostedInformation);

        // Solo actualizamos el formulario si la información está disponible
        if (lostedInformation && lostedInformation.animal.galduta) {

            const formattedDate = new Date(lostedInformation.animal.galduta.fecha);
            const dateString = formattedDate.toISOString().split('T')[0];
            setFormData({
                hiria: lostedInformation.animal.galduta.hiria || '',
                provintzia: lostedInformation.animal.galduta.probintzia || '',
                data: dateString || '',
                moreInformation: lostedInformation.animal.galduta.moreInformation || ''
            });
            // console.log("form data: "+formData);
        }
    }, [lostedInformation]); // Se ejecuta solo cuando lostedInformation cambia
    

    // Manejar el cambio del checkbox
    const handleCheckboxChange = () => {
        setIsDisabled((prev) => !prev); // Alterna el estado
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isDisabled) return; // Evita enviar si está deshabilitado

        const tok = localStorage.getItem('token');
        const formDataToSend = new FormData();
        
        formDataToSend.append('id', formData.id);
        formDataToSend.append('hiria', formData.hiria);
        formDataToSend.append('provintzia', formData.provintzia);
        formDataToSend.append('fecha', formData.data);
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
                data: '',
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

            {/* Checkbox para habilitar/deshabilitar */}
            <div className="inline-flex items-center">
                <label className="flex items-center cursor-pointer relative">
                    <input 
                        type="checkbox" 
                        className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" 
                        id="check-custom-style" 
                        onChange={handleCheckboxChange}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </span>
                </label>
            </div>

            <form className='flex flex-col text-left' onSubmit={handleSubmit}>
                <div className='flex flex-row'>
                    <div className='flex flex-col w-1/2 mr-10'>
                        <ProvinciasYCiudades 
                            selectedProvincia={formData.provintzia}
                            setSelectedProvincia={(value) => setFormData((prev) => ({ ...prev, provintzia: value }))}
                            selectedPueblo={formData.hiria}
                            setSelectedPueblo={(value) => setFormData((prev) => ({ ...prev, hiria: value }))}
                            disabled={isDisabled} // Deshabilita si el checkbox está marcado
                            className={isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                        />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label className='font-semibold dark:text-white'>{t('ad_galduta:Fecha')}</label>
                        <input 
                            type='date' 
                            name='data' 
                            value={formData.data} 
                            onChange={handleChange} 
                            className={`dark:border-primary border-black border-2 rounded-lg ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
                            disabled={isDisabled}
                            required 
                        />
                    </div>
                </div>
                
                <div className='flex flex-row mt-2'>
                    <div className='w-full flex flex-col'>
                        <label className='font-semibold dark:text-white'>{t('ad_galduta:Deskribapena')}</label>
                        <textarea 
                            className={`dark:border-primary border-black border-2 rounded-lg ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
                            rows={6} 
                            name='moreInformation' 
                            value={formData.moreInformation} 
                            onChange={handleChange} 
                            disabled={isDisabled}
                            required
                        />
                    </div>
                </div>
                
                <SendButom value={t('saioa_sortu:input')} disabled={isDisabled} className={isDisabled ? 'opacity-50 cursor-not-allowed' : ''} />
            </form>
        </>
    );
}

export default LostedPage;
