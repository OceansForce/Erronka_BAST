import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanelButtom = ({ to, imageSrc, text }) => {
    return (
        <Link 
            to={to} 
            className='lg:w-1/5 w-56 bg-primary rounded-3xl py-20 
                       transition-all duration-300 
                       hover:scale-110 hover:shadow-xl'
        >
            <button className="flex flex-col justify-center items-center">
                <img className="w-2/5" src={imageSrc} alt={text} />
                <p className="font-semibold fonts_ubutu text-2xl">{text}</p>
            </button>
        </Link>
    );
};

export default AdminPanelButtom;
