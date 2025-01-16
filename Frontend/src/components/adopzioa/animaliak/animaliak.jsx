import { Link } from "react-router-dom";

const Animaliak= ({id,name, kokapena, etxe, type, arraza, img, bakuna, sexo, year, deskribapena, mota})=>{
    let link=`${img}`;

    const datuak = { izena: name, etxekoa: etxe, mota: type, raza: arraza, irudia: img, bakunatuta: bakuna, genero: sexo, urtebetetzea: year, descrip: deskribapena };


    if(mota==="adopzio"){

      return <Link to={`/Animalia_adoptatu/${id}`} className="w-1/4 max-w-80 mb-8 mx-5">
        
          <img src={link} alt={name} className="rounded-t-3xl"/>
          <div className="dark:bg-dark  bg-primary p-2 rounded-b-2xl text-center">
            <p className="dark:text-white font-semibold fonts_ubutu">{name}</p>
            <p className="dark:text-white font-semibold fonts_ubutu">{kokapena}</p>
          </div>
        
      </Link>
    }
    else if(mota==="galduta"){
      
      return <Link to="/Animalia_galduta" className="w-1/4 max-w-96  mb-8 mx-5">
          <img src={link} alt={name} className="rounded-t-3xl"/>
          <div className="dark:bg-dark  bg-primary p-2 rounded-b-2xl text-center">
            <p className="dark:text-white font-semibold fonts_ubutu">{name}</p>
            <p className="dark:text-white font-semibold fonts_ubutu">{kokapena}</p>
          </div>
        </Link>
     
    }
    else if(mota==="profila"){
      return <div className="w-1/4 max-w-96  mb-8 mt-8 mx-5">
      <img src={link} alt={name} width={"180px"} className="rounded-t-3xl"/>
      <div className="bg-dark  dark:bg-primary p-2 rounded-b-2xl text-center">
        <p className="text-white dark:text-black font-semibold fonts_ubutu">{name}</p>
      </div>
    </div>
    }
    
}

export default Animaliak;