import React from 'react';

const SendButom = ({ value }) => {
    return (
        <input
            className='bg-black w-full text-white mt-2 p-2 rounded-lg 
                       transition-all duration-300 
                       hover:bg-gray-700 hover:scale-105 
                       active:scale-95 active:bg-gray-600'
            type='submit'
            value={value}
        />
    );
};

export default SendButom;
