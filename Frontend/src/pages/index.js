import Header from '../header-footer/header';
import Footer from '../header-footer/footer';

import Wallpaper from '../components/body/wallpaper.js';
import Carrusel from '../components/body/body.js';
import '../components/body/css.css';
import "../components/body/Carousel.css"; 


function Index() {
    return (
      <>
        <div className="App">
          <Header />
        </div>
        <div className="App w-auto">
            <Wallpaper />
        </div>
        <div  className="App background">
          
          <div className='flex items-center w-auto justify-center'>
             <Carrusel />
          </div>
        </div>
        <div className="App">
          <Footer />
        </div>
      </>
    );
  }
  
  export default Index;
  