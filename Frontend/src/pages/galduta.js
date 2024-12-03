import adopzioak from "../components/adopzioa/adopzio";
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';

function galduta() {
    return (
      <>
       <div className="App">
          <Header />
        </div>
        <div className="App w-full">
          Galduta
        </div>        
        <div className="App">
          <Footer />
        </div>
      </>
    );
  }
  
export default galduta;