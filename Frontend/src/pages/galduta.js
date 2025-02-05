import Galduta from "../components/galdutakoak/galdutakoa";
import Filtroa from "../components/galdutakoak/filtroa";
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';
import React, { useState, useEffect } from "react";

function galduta() {
    const [hiria, setHiria]= useState("");

    const hiriaJaso=(datua)=>{
      setHiria("&herria="+datua);
      console.log("Aita: ",datua);
    }

    return (
      <>
        <Header />
        <Filtroa bidali={hiriaJaso}/>
        <Galduta jaso={hiria}/>
        
        <Footer />
      </>
    );
  }
  
export default galduta;