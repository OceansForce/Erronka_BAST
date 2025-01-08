import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = ({ targetPage, width }) => {
    return (
        <Link to={targetPage}>
            <img 
                // className={`bg-white px-5 rounded-full  transition-all duration-300  hover:scale-110 active:scale-95 w-24`}
                className={`bg-white px-5 rounded-full  transition-all duration-300  hover:scale-110 active:scale-95 w-${width}`}
                src="/img/icons/arrow-left.svg" 
                alt="Back" 
            />
        </Link>
    );
}

export default BackButton;
