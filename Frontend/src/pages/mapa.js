import adopzioak from "../components/adopzioa/adopzio";
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';
import Mapa from '../components/mapa/mapa';
import Wallpaper from '../components/body/wallpaper.js';

function mapa_orria() {
    return (
      <>
      
        <Header />
        <Wallpaper img="mapa_header.png" darck="mapa_header.png" />
        <Mapa/>
        <Footer />
        
      </>
    );
  }
  
export default mapa_orria;