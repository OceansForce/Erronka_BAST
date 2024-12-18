import adopzioak from "../components/adopzioa/adopzio";
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';

function denda() {
    return (
      <>
       <div className="App">
          <Header />
        </div>
        <div className="App w-full">
          Denda
        </div>        
        <div className="App">
          <Footer />
        </div>
      </>
    );
  }
  
export default denda;