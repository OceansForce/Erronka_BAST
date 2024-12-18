const Filtroak=({img , text})=>{
    let gif= `/img/icons/animals/${img}.gif`;

    return <div className="max-w-32 flex flex-col items-center justify-center">
        <img className="dark:invert" src={gif} alt={img}/>
        <p className="dark:text-white text-center rounded-full border-4 border-border_green text-text-gray px-3 fonts_ubutu_Bold">{text}</p>
    </div>
}

export default Filtroak;