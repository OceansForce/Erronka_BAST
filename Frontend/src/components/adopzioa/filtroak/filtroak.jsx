import React, {useState, useEffect} from 'react';

const Filtroak=({img , text})=>{
    let gif= `/img/icons/animals/${img}.gif`;

    const [aldatu, setAldatu]= useState(false);
    
    const aldatuKlik = () => {
        setAldatu((prev) => !prev); // Alternar estado
    };

    return <div className="max-w-32 flex flex-col items-center justify-center z-9">
        <img className="dark:invert z-9" src={gif} alt={img}/>
        <p className={`dark:text-white text-center rounded-full border-4 px-3 font-bold cursor-pointer ${
                    aldatu 
                        ? "bg-primary dark:bg-dark_button border-border_green" // Fondo cuando está seleccionado
                        : "bg-white dark:bg-dark_body border-border_green"   // Fondo por defecto
                }`} id={text} data-value={text}  onClick={aldatuKlik}>{text}</p>
    </div>
}

export default Filtroak;