import Adopzioak from "../components/adopzioa/adopzio";
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';
import Anim_Adopt_BODY from "../components/animalia_adopzioa/body_adop";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

function Animalia_adoptatu() {
  
    const location = useLocation();
    const { izena, etxekoa, mota, raza, irudia, bakunatuta, genero, urtebetetzea, descrip } = location.state || {}; //Link etiketatik id-a lortzeko
    useEffect(()=>{
      console.log("Etxekoa: "+etxekoa);
    });
    return (
      <>
        <Header />

        <Anim_Adopt_BODY izena={izena} etxekoa={etxekoa} mota={mota} raza={raza} irudia={irudia} bakunatuta={bakunatuta} genero={genero} urtebetetzea={urtebetetzea} descrip={descrip} />

        <Footer />
      </>
    );
}

export default Animalia_adoptatu;