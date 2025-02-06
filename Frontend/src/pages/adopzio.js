import Adopzioak from "../components/adopzioa/adopzio_body";
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

function adopzio() {
    const location = useLocation();
    const { aukeratua } = location.state || {}; //Link etiketatik id-a lortzeko
    let aukera="";

    useEffect(()=>{
      if (aukeratua!=null) {
        aukera=aukeratua;
      }
    },[aukeratua]);
    return (
      <>
       
        <Header />

        <Adopzioak datua={aukera}/>
       
        <Footer />
       
      </>
    );
  }
  
export default adopzio;