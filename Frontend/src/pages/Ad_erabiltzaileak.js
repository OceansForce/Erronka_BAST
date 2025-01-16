import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import React, { useState, useEffect } from "react";
import BackButton from '../components/bottons/backBotom';
import { Link } from 'react-router-dom';
import IpAPI from "./../config/ipAPI";

function Ad_erabiltzaileak() {

    const [aukera, setAukera]= useState(null);

    useEffect(()=>{
        console.log(aukera);
    }, [aukera])

    

    const { t, i18n } = useTranslation();
    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);  // Cambia el idioma
      };
  

    return (
        <>
            <div className='w-full container flex justify-center'>
                <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-full rounded-lg items-center text-center justify-center border-black dark:border-transparent border-2'>
                    <div className='w-full flex'>
                        <BackButton targetPage="/Ad_menu" width={20} />
                        <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                            <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                            <DarkModeToggle className='w-1/2' />
                        </div>
                    </div>
                    <p className='w-full font-semibold text-2xl my-5 dark:text-white uppercase'>{t("EraPanela:Erabiltzaileak")}</p>
                    <div className='w-full flex flex-col text-left' id='notiziak'>
                        <select className='w-52 bg-gray-50 text-dark_body dark:bg-dark_body dark:text-white p-2 mb-2 focus:border-dark dark:focus:border-primary  border-2 rounded-md'  onChange={(e) => {
                                const value = e.target.value === "true";
                                setAukera(value);
                            }}>
                            <option value="">-------------------------</option>
                            <option value="false">{t("EraPanela:Erabiltzaile_N")}</option>
                            <option value="true">{t("EraPanela:Babes_elkarte")}</option>
                        </select>

                        <div  className='flex flex-row dark:bg-primary bg-dark p-2 mb-5 rounded-3xl justify-between'>
                            {aukera === true ?(
                                <table className='w-full  border-collapse'>
                                    <tr className='text-center w-full'>
                                        <td className='w-1/7 text-white dark:text-black border-lime-300'>{t("EraPanela:IzenAbiz")}</td>
                                        <td className='w-1/7 text-white dark:text-black border-x-3 border-lime-300'>{t("EraPanela:Email")}</td>
                                        <td className='w-1/7 text-white dark:text-black border-x-3 border-lime-300'>{t("EraPanela:NAN")}</td>
                                        <td className='w-1/7 text-white dark:text-black border-x-3 border-lime-300'>{t("EraPanela:Jaio_data")}</td>
                                        <td className='w-1/7 text-white dark:text-black border-x-3 border-lime-300'>{t("EraPanela:Elkartea")}</td>
                                        <td className='w-1/7 text-white dark:text-black  border-lime-300'>{t("EraPanela:Aktibatuta")}</td>
                                    </tr>
                                    <tr className='text-center w-full'>
                                        <td className='w-1/7 text-white dark:text-black border-y-3 border-lime-300'>X</td>
                                        <td className='w-1/7 text-white dark:text-black border-x-3 border-y-3 border-lime-300'>X</td>
                                        <td className='w-1/7 text-white dark:text-black border-x-3 border-y-3 border-lime-300'>X</td>
                                        <td className='w-1/7 text-white dark:text-black border-x-3 border-y-3 border-lime-300'>X</td>
                                        <td className='w-1/7 text-white dark:text-black border-x-3 border-y-3 border-lime-300'>X</td>
                                        <td className='w-1/7 text-white dark:text-black border-y-3 border-lime-300'>X</td>
                                    </tr>
                                </table>
                            ): (
                                <table className='w-full  border-collapse'>
                                    <tr className='text-center w-full'>
                                        <td className='w-1/6 text-white dark:text-black border-lime-300'>{t("EraPanela:IzenAbiz")}</td>
                                        <td className='w-1/6 text-white dark:text-black border-x-3 border-lime-300'>{t("EraPanela:Email")}</td>
                                        <td className='w-1/6 text-white dark:text-black border-x-3 border-lime-300'>{t("EraPanela:NAN")}</td>
                                        <td className='w-1/6 text-white dark:text-black  border-lime-300'>{t("EraPanela:Jaio_data")}</td>
                                        <td className='w-1/6 text-white dark:text-black  border-lime-300'>{t("EraPanela:Aktibatuta")}</td>
                                    </tr>
                                    <tr className='text-center w-full'>
                                        <td className='w-1/6 text-white dark:text-black border-y-3 border-lime-300'>X</td>
                                        <td className='w-1/6 text-white dark:text-black border-x-3 border-y-3 border-lime-300'>X</td>
                                        <td className='w-1/6 text-white dark:text-black border-x-3 border-y-3 border-lime-300'>X</td>
                                        <td className='w-1/6 text-white dark:text-black border-y-3 border-lime-300'>X</td>
                                        <td className='w-1/6 text-white dark:text-black border-y-3 border-lime-300'>X</td>
                                    </tr>
                                </table>
                            )}
                            
                           
                                
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
}

export default Ad_erabiltzaileak;
