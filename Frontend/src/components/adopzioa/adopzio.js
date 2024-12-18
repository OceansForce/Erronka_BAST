import Animaliak from './animaliak/animaliak.jsx'; 
import Filtroak from './filtroak/filtroak.jsx'; 

function Adopzioak() {
    return (
      <>
        <div className='container mx-auto flex flex-row justify-evenly border-b-2 pb-8 dark:border-white border-black mt-6'>
          <Filtroak img="adopta_perro" text="TXAKURRAK"/>
          <Filtroak img="adopta_ppp" text="TXAKURRAK PPP"/>
          <Filtroak img="adopta_gato-1" text="KATUAK"/>
          <Filtroak img="adopta_otros" text="BESTEAK"/>
        </div>
        <div className="container mx-auto">
          <div className="mx-auto">
            <div className="flex flex-col ">
              <h1 className='mt-10 fonts_ubutu_Bold text-xl text-text_green'>Premiazkoak</h1>
              <div className="flex flex-row justify-evenly mt-10 flex-wrap">

                <Animaliak img="image" izena="Lur" kokapena="Gipuzkoa, Donosti" mota="adopzio"/>

                <Animaliak img="image" izena="Lur" kokapena="Gipuzkoa, Donosti" mota="adopzio"/>
                
                <Animaliak img="image" izena="Lur" kokapena="Gipuzkoa, Donosti" mota="adopzio"/>

                <Animaliak img="image" izena="Lur" kokapena="Gipuzkoa, Donosti" mota="adopzio"/>

              

                <Animaliak img="image" izena="Lur" kokapena="Gipuzkoa, Donosti" mota="adopzio"/>

                <Animaliak img="image" izena="Lur" kokapena="Gipuzkoa, Donosti" mota="adopzio"/>

                <Animaliak img="image" izena="Lur" kokapena="Gipuzkoa, Donosti" mota="adopzio"/>

                <Animaliak img="image" izena="Lur" kokapena="Gipuzkoa, Donosti" mota="adopzio"/>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
export default Adopzioak;
  