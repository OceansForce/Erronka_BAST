import adopzioak from "../components/adopzioa/adopzio";
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';

function mapa() {
    return (
      <>
       <div className="App">
          <Header />
        </div>
        <div className="App w-full">
          Mapa
        </div>        
        <div className="App">
          <Footer />
        </div>
      </>
    );
  }
  
export default mapa;