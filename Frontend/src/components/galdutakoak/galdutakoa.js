import Animaliak from '../adopzioa/animaliak/animaliak.jsx'; 
import { useEffect, useState } from 'react';
import IpAPI from '../../config/ipAPI.js';
import Loading from '../loading/loading.jsx';

const Galduta= ()=>{
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [adopAnimals, setAdopAnimals] = useState([]);
  const limit = 9;

  useEffect(()=>{
    fetchGaldutakoAnimalia();
  },[]);

  useEffect(()=>{
    console.log("Galdutuak", adopAnimals);
  },[adopAnimals]);

  const fetchGaldutakoAnimalia = async () => {
    try {
        const response = await fetch(`${IpAPI}/api/animals-losted?limit=${limit}&offset=${offset}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const result = await response.json();

            // Si se reciben menos animales de los esperados, no hay más datos
            if (result.length < limit) {
                setHasMore(false);
            }

            // Agregar nuevos animales a la lista existente
            setAdopAnimals((prevAnimals) => [...prevAnimals, ...result]);

            // Incrementar el offset para la próxima solicitud
            setOffset((prevOffset) => prevOffset + limit);
      }
        
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error en la solicitud. Revisa tu conexión.');
    }
  };

  return <div className="container mx-auto">
    <div className="mx-auto">
      <div className="flex flex-col ">
        <div className="flex flex-row justify-evenly mt-10 flex-wrap">

          {
            
            adopAnimals.map((animalia)=>(
              
              <Animaliak 
              id={animalia.id} 
              name={animalia.name} 
              kokapena="Gipuzkoa, Donosti"  
              img={animalia.img}
              mota="galduta"/>
            ))
            
          }

        </div>
      </div>
    </div>
  </div>

}

export default Galduta;