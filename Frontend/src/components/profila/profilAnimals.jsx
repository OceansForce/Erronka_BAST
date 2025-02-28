import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import i18n from '../../118n/menu.js';
import Animaliak from '../adopzioa/animaliak/animaliak.jsx'; 

import SaveIcon from './saveIcon.jsx';
import { Link } from 'react-router-dom';


const UserAnimals = ({userData, ruta}) => {
    
    const { t, i18n } = useTranslation();

    return (
        <div className='flex flex-col items-center'>
            <div className='w-[90%]'>
                    
                    <h3 className=" text-left dark:text-white text-2xl font-ubuntu pt-10">{t('userProfile:animals')}</h3>
                    <div className="flex flex-row items-end justify-end ">
                        
                        
                        <Link to="/Animalia_sortu" state={{atzera: ruta}} className=' '>
                            <SaveIcon darkIMG='./img/icons/profil/add-white.svg' lightIMG='./img/icons/profil/add-dark.svg' text={t('userProfile:add')} />
                        </Link>

                    </div>
                    
                    <div className="w-full flex flex-row flex-wrap items-center justify-center py-2 border-2 rounded-l-lg rounded-br-lg border-black dark:border-white bg-primary dark:bg-dark">
                        
                    {userData.map((item) => (
                    
                            <Animaliak 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            kokapena={item.etxekoAnimalia}    
                            img={item.img}        
                            mota='profila'
                            item={item}
                            ruta={ruta}
                            />
                    
                    ))}


                    </div>
                </div>
        </div>
        
    );
};

export default UserAnimals;
