import Header from './header-footer/header';
import Wallpaper from './body/wallpaper.js';
import Carrusel from './body/body.js';
import Footer from './header-footer/footer';
import './index.css';
import './body/css.css';
import "./body/Carousel.css"; 

function App() {
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

export default App;
