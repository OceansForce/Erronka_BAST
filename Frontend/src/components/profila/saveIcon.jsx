const SaveIcon = ({darkIMG, lightIMG, text}) => {
    
    
    

    


    return (
        <>
        
        
        <div className="flex flex-row border-t-2 cursor-pointer border-x-2 rounded-tl-lg p-1 bg-primary dark:bg-dark border-black dark:border-white">
                <img 
                    src={lightIMG} 
                    className='size-7 dark:hidden' 
                    alt="Guardar" 
                />
                <img 
                    src={darkIMG}
                    className='size-7 hidden dark:block' 
                    alt="Guardar" 
                />
                <label className="dark:text-white text-black">{text}</label>
            </div>
</>
    );
};

export default SaveIcon;



