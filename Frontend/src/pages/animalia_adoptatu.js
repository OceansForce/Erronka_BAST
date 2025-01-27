import Adopzioak from "../components/adopzioa/adopzio_body";
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';
import Anim_Adopt_BODY from "../components/animalia_adopzioa/body_adop";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Animalia_adoptatu() {
  
    const { id } = useParams();
  
    const location = useLocation();
    // const { izena, etxekoa, mota, raza, irudia, bakunatuta, genero, urtebetetzea, descrip } = location.state || {}; //Link etiketatik id-a lortzeko
    // useEffect(()=>{
    //   console.log("Etxekoa: "+etxekoa);
    // });
    return (
      <>
        <Header />

        <Anim_Adopt_BODY  id={id}/>

        <Footer />
      </>
    );
}

export default Animalia_adoptatu;