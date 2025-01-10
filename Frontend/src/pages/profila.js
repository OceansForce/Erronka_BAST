import { useTranslation } from 'react-i18next';
import React, {useState, useEffect} from 'react';
import i18n from '../118n/menu';
import BackButton from '../components/bottons/backBotom';
import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import Animaliak from '../components/adopzioa/animaliak/animaliak.jsx'; 



const Profila = ()=>{
    const [irudia, setIrudia]= useState("user-dog.jpg");
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);  // Cambia el idioma
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setIrudia(file.name);
        }
    };
    
    return (
        <>
        <div className='container flex justify-center '>
            <div className='flex flex-col p-6 m-10 w-full rounded-lg text-center '>
                
                <div className='w-full flex justify-center items-center mb-5 p-4 bg-dark rounded-lg'>
                        
                    <BackButton targetPage="/" width={24} />
                        <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                            <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                            <DarkModeToggle className='w-1/2' />
                        </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='flex flex-col lg:flex-row  w-full justify-center'>

                        <div className='lg:w-1/4 w-full relative'>
                            <label htmlFor="image-upload" className="cursor-pointer">
                                <img src={`./img/icons/users/${irudia}`} className='size-40 cursor-pointer rounded-full z-10 border-white border-2 absolute posicion'/>
                                <img src='./img/icons/profil/edit_white.svg' className='size-7 z-40 editar dark:hidden rounded-full border-black border-2 relative posicion'/>
                                <img src='./img/icons/profil/edit_dark.svg' className='size-7 z-10 editar hidden dark:block rounded-full border-white border-2 relative posicion'/>
                            </label>

                            <input type="file" id="image-upload" className="hidden"  onChange={(e) => handleImageUpload(e)} />
                        </div>
                        
                        <div className='lg:w-2/4 w-full flex flex-col '>
                            <div className='flex flex-row justify-end'>
                                
                                <div className='flex flex-row border-t-2 border-x-2 rounded-tl-lg p-1 bg-primary dark:bg-dark border-black dark:border-white'>
                                    <img src='./img/icons/profil/pen_Black.svg' className='size-7 dark:hidden'/>
                                    <img src='./img/icons/profil/pen_white.svg' className='size-7 hidden dark:block '/>


                                    <label className='dark:text-white text-black'>Editar</label>
                                </div>
                                
                              
                                
                            </div>

                            <div className=' flex flex-col items-center py-2 border-2 rounded-l-lg rounded-br-lg border-black dark:border-white bg-primary dark:bg-dark'>

                                <div className='flex flex-col text-left w-4/5'>
                                    <label className='text-black dark:text-white'>Izena</label>
                                    <input type='text' className='rounded-lg'/><br/>
                                </div>
                                
                                <div className='flex flex-col text-left w-4/5'>
                                    <label className='text-black dark:text-white'>Gmail</label>
                                    <input type='email' className='rounded-lg'/><br/>
                                </div>
                                
                                <div className='flex flex-col text-left w-4/5'>
                                    <label className='text-black dark:text-white'>Pasahitza</label>
                                    <input type='password' className='rounded-lg'/><br/>
                                </div>
                                
                                <div className='flex flex-col text-left w-4/5'>
                                    <label className='text-black dark:text-white'>Helbidea</label>
                                    <input type='text' className='rounded-lg'/><br/>
                                </div>
                                
                            </div><br/>

                            <h3 className='pt-10 text-left dark:text-white text-2xl font-ubuntu'>Nire animaliak:</h3><br/>
                            <div className='flex flex-row justify-end'>
                                
                                <div className='flex flex-row border-t-2 border-x-2 rounded-tl-lg p-1 bg-primary dark:bg-dark border-black dark:border-white'>
                                    <img src='./img/icons/profil/plus_black.svg' className='size-6 mr-3 dark:hidden'/>
                                    <img src='./img/icons/profil/plus_white.svg' className='size-6 mr-3 hidden dark:block '/>
                                    
                                    <label className='dark:text-white text-black'>Gehitu Animalia</label>
                                </div>
                                
                              
                                
                            </div>
                            <div className='w-full flex flex-row flex-wrap items-center justify-center py-2 border-2 rounded-l-lg rounded-br-lg border-black dark:border-white bg-primary dark:bg-dark'>
                                <Animaliak img="image" izena="Lur" kokapena="" mota="profila"/>
                                <Animaliak img="image" izena="Lur" kokapena="" mota="profila"/>
                                <Animaliak img="image" izena="Lur" kokapena="" mota="profila"/>
                                <Animaliak img="image" izena="Lur" kokapena="" mota="profila"/>
                                <Animaliak img="image" izena="Lur" kokapena="" mota="profila"/>
                                <Animaliak img="image" izena="Lur" kokapena="" mota="profila"/>
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