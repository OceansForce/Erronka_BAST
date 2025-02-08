
import { useParams } from 'react-router-dom';

import Header from '../header-footer/header';
import Footer from '../header-footer/footer';
import Anim_Adop_BODY from "../components/galdutako_Animalia/body_gald.js"

function Animalia_adoptatu() {
    const { id } = useParams();
  

    return (
      <>
        <Header />

        <Anim_Adop_BODY id={id}/>

        <Footer />
      </>
    );
}

export default Animalia_adoptatu;