import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import i18n from '../../118n/menu.js';
import Animaliak from '../adopzioa/animaliak/animaliak.jsx'; 


import SaveIcon from './saveIcon.jsx';


const UserAnimals = ({userData}) => {
    
    const { t, i18n } = useTranslation();
    //console.log(JSON.stringify(userData, null, 2)); // El segundo parámetro `null, 2` es para darle formato y hacerlo legible
   
    return (
        <>
        
            
            <div className="flex flex-row justify-between pt-10" onClick=''>
                
                <h3 className=" text-left dark:text-white text-2xl font-ubuntu">{t('userProfile:animals')}</h3>
                <SaveIcon darkIMG='./img/icons/profil/add-white.svg' lightIMG='./img/icons/profil/add-dark.svg' text={t('userProfile:add')} />
                
            </div>
            
            <div className="w-full flex flex-row flex-wrap items-center justify-center py-2 border-2 rounded-l-lg rounded-br-lg border-black dark:border-white bg-primary dark:bg-dark">
            {userData.map((item) => (
                <Animaliak 
                    key={item.id}
                    img={item.img}        
                    izena={item.name}
                    kokapena={item.etxekoAnimalia}
                    mota='profila'
                />
            ))}


            </div>
        </>
    );
};

export default UserAnimals;
