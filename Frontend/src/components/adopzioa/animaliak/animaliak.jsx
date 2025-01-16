import { Link } from "react-router-dom";

const Animaliak= ({ img, izena, kokapena, mota})=>{
    let link=`/img/${img}.png`;

    if(mota==="adopzio"){

      return <Link to="/Animalia_adoptatu" className="w-1/4 max-w-80  mb-8 mx-5"> 
        
          <img src={link} alt={izena} className="rounded-t-3xl"/>
          <div className="dark:bg-dark  bg-primary p-2 rounded-b-2xl text-center">
            <p className="dark:text-white font-semibold fonts_ubutu">{izena}</p>
            <p className="dark:text-white font-semibold fonts_ubutu">{kokapena}</p>
          </div>
        
      </Link>
    }
    else if(mota==="galduta"){
      
      return <div className="w-1/4 max-w-96  mb-8 mx-5">
          <img src={link} alt={izena} className="rounded-t-3xl"/>
          <div className="dark:bg-dark  bg-primary p-2 rounded-b-2xl text-center">
            <p className="dark:text-white font-semibold fonts_ubutu">{izena}</p>
            <p className="dark:text-white font-semibold fonts_ubutu">{kokapena}</p>
          </div>
        </div>
     
    }
    else if(mota==="profila"){
      return <div className="w-1/4 max-w-96  mb-8 mt-8 mx-5">
      <img src={link} alt={izena} width={"180px"} className="rounded-t-3xl"/>
      <div className="bg-dark  dark:bg-primary p-2 rounded-b-2xl text-center">
        <p className="text-white dark:text-black font-semibold fonts_ubutu">{izena}</p>
      </div>
    </div>
    }
    
}

export default Animaliak;