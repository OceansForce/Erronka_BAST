import Animaliak from '../adopzioa/animaliak/animaliak.jsx'; 
import { useEffect, useState } from 'react';
import IpAPI from '../../config/ipAPI.js';
import Loading from '../loading/loading.jsx';

const Galduta= ({jaso})=>{
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [adopAnimals, setAdopAnimals] = useState([]);
  const limit = 9;

  useEffect(()=>{
    fetchGaldutakoAnimalia();
  },[]);

  useEffect(()=>{
    if(jaso!=""){
      console.log(adopAnimals);
      setAdopAnimals([]);
      fetchGaldutakoAnimalia();
    }
    
  },[jaso]);

  const fetchGaldutakoAnimalia = async () => {
    try {
        let url;
        if(jaso=="denak"){
          url=`${IpAPI}/api/animals-losted?limit=${limit}&offset=${offset}`;
        }else{
          url=`${IpAPI}/api/animals-losted?limit=${limit}&offset=${offset}${jaso}`;
        }

        const response = await fetch(url, {
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
            // setOffset((prevOffset) => prevOffset + limit);
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
              key={animalia.id} 
              id={animalia.id} 
              name={animalia.name} 
              kokapena={animalia.probintzia+", "+animalia.hiria}
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