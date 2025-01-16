import React from 'react';
import i18n from '../../118n/menu';
import { useTranslation } from 'react-i18next';

const User = ({ name, secondName, email, DNI, cumple, protektora, activado }) => {

    const { t, i18n } = useTranslation();

    const formattedDate = new Date(cumple).toLocaleDateString(i18n.language, {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    
    // Condicional para mostrar la celda de 'protektora' solo si no es null
    const protektoraCell = protektora !== null ? (
        <td className='w-1/7 text-white dark:text-black border-x-3 border-y-3 border-lime-300'>{protektora}</td>
    ) : null;

    // Condicional para mostrar 'bai' o 'ez' según el valor de 'activado'
    const activadoText = activado === 1 ? t("EraPanela:Bai") : t("EraPanela:Ez");

    return (
        <tr className='text-center w-full'>
            <td className='w-1/7 text-white dark:text-black border-y-3 border-lime-300'>{name} {secondName}</td>
            <td className='w-1/7 text-white dark:text-black border-x-3 border-y-3 border-lime-300'>{email}</td>
            <td className='w-1/7 text-white dark:text-black border-x-3 border-y-3 border-lime-300'>{DNI}</td>
            <td className='w-1/7 text-white dark:text-black border-x-3 border-y-3 border-lime-300'>{formattedDate}</td>
            {protektoraCell} {/* Solo renderiza la celda de 'protektora' si no es null */}
            <td className='w-1/7 text-white dark:text-black border-y-3 border-lime-300'>{activadoText}</td>
        </tr>
    );
};

export default User;
