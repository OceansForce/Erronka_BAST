import { Link } from "react-router-dom";

const Animaliak= ({id,name, kokapena, img, mota, animaliType, item, ruta})=>{
    let link=`${img}`;

    


    if(mota==="adopzio"){

      return <Link to={`/Animalia_adoptatu/${id}`} className=" max-w-80 mb-8 mx-5">
        
          <img src={link} alt={name} className="rounded-t-3xl h-[218.2px] w-[320px]"/>
          <div className="dark:bg-dark  bg-primary p-2 rounded-b-2xl text-center h-1/6 w-full">
            <p className="dark:text-white font-semibold fonts_ubutu">{name}</p>
            <p className="dark:text-white font-semibold fonts_ubutu">{kokapena}</p>
          </div>
        
      </Link>
    }
    else if(mota==="galduta"){
      
      return <Link to={`/Animalia_galduta/${id}`} className=" max-w-80 mb-8 mx-5">
          <img src={link} alt={name} className="rounded-t-3xl h-[218.2px] w-[320px]"/>
          <div className="dark:bg-dark  bg-primary p-2 rounded-b-2xl text-center h-[70px] w-full">
            <p className="dark:text-white font-semibold fonts_ubutu">{name}</p>
            <p className="dark:text-white font-semibold fonts_ubutu">{kokapena}</p>
          </div>
        </Link>
     
    }
    else if(mota==="profila"){
      return <Link to={`/Edit_animalia/${id}`} state={{item: item, ruta: ruta}} className=" max-w-64  mb-8 mt-8 mx-5">
          <img src={link} alt={name} className="rounded-t-3xl w-64 h-32 "/>
          <div className="bg-dark  dark:bg-primary p-2 rounded-b-2xl text-center">
            <p className="text-white dark:text-black font-semibold fonts_ubutu">{name}</p>
          </div>
      </Link>
    }
    
}

export default Animaliak;