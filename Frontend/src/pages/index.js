import Header from '../header-footer/header';
import Footer from '../header-footer/footer';

import Wallpaper from '../components/body/wallpaper.js';
import Carrusel from '../components/body/body_karrusela.js';
import '../components/body/css.css';
import "../components/body/Carousel.css"; 


function Index() {
    return (
      <>
        
        <Header />
        
        
        <Wallpaper img="d4pci99-e6fcca49-048a-4b42-a951-e246eecc9062.png" darck="d4pci99-e6fcca49-048a-4b42-a951-e246eecc9062_darck.png" />
        
       
          
        <div className='flex items-center w-auto justify-center'>
          <Carrusel />
        </div>
       
        
        <Footer />
        
      </>
    );
  }
  
  export default Index;
  