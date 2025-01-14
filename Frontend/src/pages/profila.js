import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import i18n from '../118n/menu';
import BackButton from '../components/bottons/backBotom';
import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import Animaliak from '../components/adopzioa/animaliak/animaliak.jsx'; 
import IpAPI from "./../config/ipAPI";
import Loading from '../components/loading/loading.jsx';

import Alert from '../components/alert/alert.jsx';

const Profila = () => {
    const [irudia, setIrudia] = useState("user-dog.jpg");
    const { t, i18n } = useTranslation();
    const [userData, setUserData] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        secondName: '',
        email: '',
        password: '',
    });

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);  // Cambia el idioma
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setIrudia(URL.createObjectURL(file)); // Para mostrar la imagen inmediatamente
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const tok = localStorage.getItem('token');
            try {
                const response = await fetch(`${IpAPI}/api/user-data`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${tok}`,
                    },
                });

                if (response.ok) {
                    const result = await response.json();
                    setUserData(result); // Guardamos los datos del usuario en el estado
                    console.log(result);
                    setFormData({
                        name: result.user.name,
                        secondName: result.user.secondName || '',
                        email: result.user.email,
                        password: '',
                    });
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
                alert('Error en la solicitud. Revisa tu conexión.');
            }
        };

        fetchUserData(); // Ejecuta la función al cargar la página
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const [alertVisible, setAlertVisible] = useState(false);
    const handleSave = (e) => {
        e.preventDefault();
    
        // Filtramos el campo password si es null o vacío
        const filteredFormData = { ...formData };

        // Elimina el campo 'password' si es null o una cadena vacía
        if (!filteredFormData.password) {
            delete filteredFormData.password;
        }

        console.log(JSON.stringify(filteredFormData));
        const tok = localStorage.getItem('token');

        fetch(`${IpAPI}/api/user-data-edit`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tok}`,
            },
            body: JSON.stringify(filteredFormData),
        })
            .then(response => {
                // Verificar si la respuesta fue exitosa (código de estado 2xx)
                if (!response.ok) {
                    // Si la respuesta no fue exitosa, lanza un error con el estado y el mensaje del backend
                    return response.text().then(text => { 
                        throw new Error(`Error ${response.status}: ${text}`);
                    });
                }
                return response.json(); // Si la respuesta es exitosa, parsear como JSON
            })
            .then(data => {
                console.log('Datos actualizados:', data);
                // Mostrar el mensaje de éxito
                setAlertVisible(true);

                // Ocultar el mensaje después de 3 segundos
                setTimeout(() => {
                    setAlertVisible(false);
                }, 8000);
            })
            .catch(error => {
                console.error('Error guardando los datos:', error);
            });
        
    };

    if (!userData) {
        return <Loading />;
    }

    return (
        <>
        {alertVisible && (
                <Alert 
                    title="¡Éxito!" 
                    text="Los datos se han guardado correctamente." 
                    onClose={() => setAlertVisible(false)} 
                />
        )}
        <div className="container flex justify-center">
            <div className="flex flex-col p-6 m-10 w-full rounded-lg text-center">
                <div className="w-full flex justify-center items-center mb-5 p-4 bg-dark rounded-lg">
                    <BackButton targetPage="/" width={24} />
                    <div className="w-11/12 flex flex-row space-x-4 justify-end">
                        <LanguageSelector className="w-1/2" changeLanguage={changeLanguage} />
                        <DarkModeToggle className="w-1/2" />
                    </div>
                </div>

                <div className="flex flex-col w-full">
                    <div className="flex flex-col lg:flex-row w-full justify-center">
                        <div className="lg:w-1/4 w-full relative">
                            <label htmlFor="image-upload" className="cursor-pointer">
                            {irudia ? (
                                <img 
                                    src={irudia} 
                                    className="size-40 cursor-pointer rounded-full z-10 border-white border-2 absolute posicion" 
                                    alt="Imagen de perfil" 
                                />
                            ) : (
                                <img 
                                    src="/img/icons/users/user-dog.jpg" 
                                    className="size-40 cursor-pointer rounded-full z-10 border-white border-2 absolute posicion" 
                                    alt="Imagen predeterminada" 
                                />
                            )}


                                
                            <img 
                                src='./img/icons/profil/edit_white.svg' 
                                className='size-7 z-40 editar dark:hidden rounded-full border-black border-2 relative posicion' 
                                alt="Editar" 
                            />
                            <img 
                                src='./img/icons/profil/edit_dark.svg' 
                                className='size-7 z-10 editar hidden dark:block rounded-full border-white border-2 relative posicion' 
                                alt="Editar" 
                            />
                            </label>
                            <input 
                                type="file" 
                                id="image-upload" 
                                className="hidden"  
                                onChange={handleImageUpload} 
                            />
                        </div>

                        <div className="lg:w-2/4 w-full flex flex-col">
                            <div className="flex flex-row justify-end " onClick={handleSave}>
                                <div className="flex flex-row border-t-2 cursor-pointer border-x-2 rounded-tl-lg p-1 bg-primary dark:bg-dark border-black dark:border-white">
                                    <img 
                                        src='./img/icons/profil/save-white.svg' 
                                        className='size-7 dark:hidden' 
                                        alt="Guardar" 
                                    />
                                    <img 
                                        src='./img/icons/profil/save-black.svg' 
                                        className='size-7 hidden dark:block' 
                                        alt="Guardar" 
                                    />
                                    <label className="dark:text-white text-black">Guardar</label>
                                </div>
                            </div>

                            <div className="flex flex-col items-center py-2 border-2 rounded-l-lg rounded-br-lg border-black dark:border-white bg-primary dark:bg-dark">
                                <div className="flex flex-col text-left w-4/5">
                                    <label className="text-black dark:text-white">Izena</label>
                                    <input 
                                        type="text" 
                                        className="rounded-lg" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col text-left w-4/5">
                                    <label className="text-black dark:text-white">Abizenak</label>
                                    <input 
                                        type="text" 
                                        className="rounded-lg" 
                                        name="secondName" 
                                        value={formData.secondName} 
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flex flex-col text-left w-4/5">
                                    <label className="text-black dark:text-white">Gmail</label>
                                    <input 
                                        type="email" 
                                        className="rounded-lg" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flex flex-col text-left w-4/5">
                                    <label className="text-black dark:text-white">Pasahitza</label>
                                    <input 
                                        type="password" 
                                        className="rounded-lg" 
                                        name="password" 
                                        value={formData.password} 
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <h3 className="pt-10 text-left dark:text-white text-2xl font-ubuntu">Nire animaliak:</h3>
                            <div className="w-full flex flex-row flex-wrap items-center justify-center py-2 border-2 rounded-l-lg rounded-br-lg border-black dark:border-white bg-primary dark:bg-dark">
                                <Animaliak img="image" izena="Lur" kokapena="" mota="profila" />
                                <Animaliak img="image" izena="Lur" kokapena="" mota="profila" />
                                <Animaliak img="image" izena="Lur" kokapena="" mota="profila" />
                                <Animaliak img="image" izena="Lur" kokapena="" mota="profila" />
                                <Animaliak img="image" izena="Lur" kokapena="" mota="profila" />
                                <Animaliak img="image" izena="Lur" kokapena="" mota="profila" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Profila;
