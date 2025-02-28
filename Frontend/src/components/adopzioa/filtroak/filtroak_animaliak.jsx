import React, {useState, useEffect} from 'react';

const Filtroak=({img , text, aktibatuta})=>{
    let gif= `/img/icons/animals/${img}.gif`;

    const [aldatu, setAldatu]= useState(false);
    
    const aldatuKlik = () => {
        setAldatu(!aldatu); 
        aktibatuta(!aldatu);
        console.log("Aktibatu",aktibatuta);
    };

    return <div className="w-full sm:max-w-32 flex flex-col items-center justify-center z-9">
        <img className="dark:invert z-9" src={gif} alt={img}/>
        <p className={`dark:text-white w-[90%] sm:w-auto text-center rounded-full border-4 py-2 sm:px-3 font-bold cursor-pointer ${
                    aldatu 
                        ? "bg-primary dark:bg-dark_button border-border_green"
                        : "bg-white dark:bg-dark_body border-border_green"   
                }`} id={text} data-value={text}  onClick={aldatuKlik}>{text}</p>
    </div>
}

export default Filtroak;