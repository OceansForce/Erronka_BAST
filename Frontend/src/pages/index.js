import Header from '../header-footer/header';
import Footer from '../header-footer/footer';

import Wallpaper from '../components/body/wallpaper.js';
import Carrusel from '../components/body/body.js';
import '../components/body/css.css';
import "../components/body/Carousel.css"; 


function Index() {
    return (
      <>
        
        <Header />
        
        
        <Wallpaper />
        
       
          
        <div className='flex items-center w-auto justify-center'>
          <Carrusel />
        </div>
       
        
        <Footer />
        
      </>
    );
  }
  
  export default Index;
  