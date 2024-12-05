const Animaliak= ({img, izena, kokapena, mota})=>{
    let link=`/img/${img}.png`;

    if(mota==="adopzio"){
      return <div className="max-w-80  mb-8 mx-5">
      <img src={link} alt={izena}/>
      <div className="dark:bg-dark  bg-primary p-2 rounded-b-2xl text-center">
        <p className="dark:text-white font-semibold fonts_ubutu">{izena}</p>
        <p className="dark:text-white font-semibold fonts_ubutu">{kokapena}</p>
      </div>
    </div>
    }
    else if(mota==="galduta"){
      return <div className="max-w-96  mb-8 mx-5">
      <img src={link} alt={izena}/>
      <div className="dark:bg-dark  bg-primary p-2 rounded-b-2xl text-center">
        <p className="dark:text-white font-semibold fonts_ubutu">{izena}</p>
        <p className="dark:text-white font-semibold fonts_ubutu">{kokapena}</p>
      </div>
    </div>
    }
    
}

export default Animaliak;