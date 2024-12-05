import Galduta from "../components/galdutakoak/galdutakoa";
import Filtroa from "../components/galdutakoak/filtroa";
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';

function galduta() {
    return (
      <>
        <Header />
        <Filtroa/>
        <Galduta/>
        
        <Footer />
      </>
    );
  }
  
export default galduta;