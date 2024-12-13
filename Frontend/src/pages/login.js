import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import { Link, useNavigate } from 'react-router-dom'; // Usa useNavigate aquí

import IpAPI from '../config/ipAPI';

function Login() {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Usamos el hook useNavigate

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            email: email,
            password: password
        };

        try {
            const response = await fetch(`${IpAPI}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (data.token) {
                localStorage.setItem('token', data.token);
                navigate('/'); // Redirige al usuario usando navigate
            } else if (data.error) {
                alert(t('error:loginFailed'));
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert(t('error:generalError'));
        }
    };

    return (
        <>
            <div className='container flex justify-center erdian'>
                <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-96 rounded-lg text-center border-black dark:border-transparent border-2'>
                    <div className='w-full flex'>
                        <div className='w-1/2'>
                            <Link to="/">
                                <img className='w-2/4 bg-white px-5 rounded-full' src="/img/icons/arrow-left.svg" alt="Back"></img>
                            </Link>
                        </div>
                        <div className='w-1/2 flex flex-row space-x-4 justify-end'>
                            <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                            <DarkModeToggle className='w-1/2' />
                        </div>
                    </div>
                    <p className='font-semibold text-2xl my-5 dark:text-white uppercase'>{t('menu:login')}</p>
                    <form className='flex flex-col text-left' onSubmit={handleSubmit}>
                        <label className='font-semibold dark:text-white'>{t('saioa_sortu:email')}</label>
                        <input 
                            className='mb-2 dark:border-primary border-black border-2 rounded-lg' 
                            type='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <label className='font-semibold dark:text-white'>{t('saioa_sortu:pasahitza')}</label>
                        <input 
                            className='mb-2 dark:border-primary border-black border-2 rounded-lg' 
                            type='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <input className='bg-black text-white mt-2 p-2 rounded-lg' type='submit' value={t('saioa_sortu:input')} />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;

