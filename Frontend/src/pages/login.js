import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import { Link, useNavigate } from 'react-router-dom';
import SendButom from '../components/bottons/sendBotton';
import BackButtonLittle from '../components/bottons/backButtomLittle';
import ErrorMenu from '../components/errors/ErrorMenu';

import IpAPI from '../config/ipAPI';

function Login() {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorText, setErrorText] = useState('');
    const navigate = useNavigate();

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
                localStorage.setItem('izena', data.user.name);
                if(data.user.idProtektora !=null){
                  localStorage.setItem('protektora', data.user.idProtektora);
                }

                navigate('/'); // Redirige al usuario usando navigate
            } else if (data.error) {
                setErrorText(t('error:loginFailed'));
                setShowErrorModal(true);  // Mostrar el modal
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setErrorText(t('error:loginFailed'));
            setShowErrorModal(true);  // Mostrar el modal
        }
    };

    return (
        <>
            {showErrorModal && (
                <ErrorMenu 
                    text={errorText} 
                    buttonText={t('error:close')} 
                    openError = {showErrorModal}
                    closeError = {setShowErrorModal}
                />
            )}

            <div className='container flex justify-center erdian'>
                <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-96 rounded-lg text-center border-black dark:border-transparent border-2'>
                    <div className='w-full flex'>
                        <div className='w-1/2'>
                            <BackButtonLittle to="/" src="/img/icons/arrow-left.svg" />
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
                        <SendButom value={t('saioa_sortu:input')} />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
