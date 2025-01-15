import Animaliak from './animaliak/animaliak.jsx'; 
import Filtroak from './filtroak/filtroak.jsx';
import { useEffect,useState } from 'react';
import IpAPI from '../../config/ipAPI.js';
import Loading from '../loading/loading.jsx';

function Adopzioak() {

const [adopAnimals, setAdopAnimals] = useState();

    useEffect(() => {
        const fetchAdopAnimals = async () => {
            try {
                const response = await fetch(`${IpAPI}/api/animals-adopt?limit=5&offset=0`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const result = await response.json();
                    setAdopAnimals(result); // Guardamos los datos del usuario en el estado
                    //console.log(result);
                    
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
                alert('Error en la solicitud. Revisa tu conexión.');
            }
        };

        fetchAdopAnimals(); // Ejecuta la función al cargar la página
    }, []);
  
    console.log(adopAnimals);

    if (!adopAnimals) {
      return <Loading />;
    }
    
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

                {adopAnimals.map((item) => (
                  <Animaliak 
                      key={item.id}
                      img={item.img}        
                      izena={item.name}
                      kokapena={item.etxekoAnimalia}
                      mota='adopzio'
                  />
                ))}

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
export default Adopzioak;
  