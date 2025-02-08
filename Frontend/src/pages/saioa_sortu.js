import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import { Link, useNavigate } from 'react-router-dom';
import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';

import SendButom from '../components/bottons/sendBotton';
import BackButtonLittle from '../components/bottons/backButtomLittle';

import ErrorMenu from '../components/errors/ErrorMenu';

import IpAPI from '../config/ipAPI';

function Saioa_sortu() {
  const { t } = useTranslation();

  // Estados para cada campo del formulario
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [year, setYear] = useState('');
  const [img, setImg] = useState(null);


  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      alert(t('saioa_sortu:passwordMismatch'));
      return;
    }

    // Crear un objeto con los datos del formulario
    const formData = new FormData();
    formData.append('DNI', dni);
    formData.append('name', name);
    formData.append('secondName', surname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', confirmPassword);
    formData.append('year', year);
    if (img) formData.append('img', img);
   

    // Aquí puedes enviar los datos a un servidor, por ejemplo:
    fetch(`${IpAPI}/api/register`, {
      method: 'POST',
      headers: {
        //'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Formulario enviado correctamente:', data);
        // Realizar alguna acción después de enviar (e.g., redirigir al usuario)
        if (data.errors) {
          if (data.errors.DNI) {
            setErrorText(t('error:DNIErabilita'));
            setShowErrorModal(true);  // Mostrar el modal
          }
          if (data.errors.email) {
            setErrorText(t('error:emailErabilita'));
            setShowErrorModal(true);  // Mostrar el modal
          }
        } else {
          // Si no hay errores, puedes realizar otras acciones aquí
          console.log('Usuario registrado correctamente');
          navigate('/');
          // Redirigir o mostrar un mensaje de éxito
        }

      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error);
        setErrorText(t('error:generalError'));
        setShowErrorModal(true);  // Mostrar el modal
      });
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
      <div className="w-full flex justify-center">
        <div className="flex flex-col dark:bg-dark bg-primary p-6 m-10 w-96 rounded-lg text-center border-black dark:border-transparent border-2">
          <div className="w-full flex">
            <div className="w-1/2">
              <BackButtonLittle to="/" src="/img/icons/arrow-left.svg" />
            </div>
            <div className="w-1/2 flex flex-row space-x-4 justify-end">
              <LanguageSelector className="w-1/2" changeLanguage={changeLanguage} />
              <DarkModeToggle className="w-1/2" />
            </div>
          </div>
          <p className="font-semibold text-2xl my-5 dark:text-white uppercase">{t('menu:Saioa_sortu')}</p>
          <form className="flex flex-col text-left" onSubmit={handleSubmit}>
            <label className="font-semibold dark:text-white">{t('saioa_sortu:izena')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="font-semibold dark:text-white">{t('saioa_sortu:abizena')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
            <label className="font-semibold dark:text-white">{t('saioa_sortu:nan')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="text"
              maxLength={9}
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
            />
            <label className="font-semibold dark:text-white">{t('saioa_sortu:email')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="font-semibold dark:text-white">{t('saioa_sortu:pasahitza')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="font-semibold dark:text-white">{t('saioa_sortu:pasahitza_ber')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label className="font-semibold dark:text-white">{t('saioa_sortu:fecha_nacimiento')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="date"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
            <label className="font-semibold hidden dark:text-white">{t('saioa_sortu:imagen')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="file"
              //value={img}
              onChange={(e) => setImg(e.target.files[0])}
              placeholder="URL de la imagen"
              accept="image/*"
            />
            {/* <input
              className="bg-black text-white mt-2 p-2 rounded-lg"
              type="submit"
              value={t('saioa_sortu:input')}
            /> */}
            <SendButom value={t('saioa_sortu:input')} />
          </form>
        </div>
      </div>
    </>
  );
}

export default Saioa_sortu;
