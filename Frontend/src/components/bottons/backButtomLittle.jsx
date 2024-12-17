import React from 'react';
import { Link } from 'react-router-dom';

const BackButtonLittle = ({ to, src }) => {
    return (
        <Link to={to}>
            <img
                className="w-20 bg-white px-5 rounded-full
                           transition-all duration-300
                           hover:scale-110 hover:shadow-lg
                           active:scale-95 active:shadow-sm"
                src={src}
                alt="Back"
            />
        </Link>
    );
};

export default BackButtonLittle;
