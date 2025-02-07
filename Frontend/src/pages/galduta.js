import Galduta from "../components/galdutakoak/galdutakoa";
import Filtroa from "../components/galdutakoak/filtroa";
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';
import React, { useState, useEffect } from "react";

function GaldutaHorria() {
    const [hiria, setHiria]= useState("");

    const hiriaJaso=(datua)=>{
      console.log("Select",datua);
      if(datua!="denak"){
        setHiria("&herria="+datua);
      }else{
        setHiria("denak");
      }
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
  
export default GaldutaHorria;