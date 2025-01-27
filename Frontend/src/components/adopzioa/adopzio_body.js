import Animaliak from './animaliak/animaliak.jsx'; 
import Filtroak_animalia from './filtroak/filtroak_animaliak.jsx';
import { useEffect, useState } from 'react';
import IpAPI from '../../config/ipAPI.js';
import Loading from '../loading/loading.jsx';

function Adopzioak() {
    const [adopAnimals, setAdopAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const limit = 9; // Número de animales a pedir por solicitud

    useEffect(() => {
        fetchAdopAnimals();
    }, []);

    useEffect(() => {
        applyFilter();
    }, [adopAnimals, selectedFilter]);

    const fetchAdopAnimals = async () => {
        try {
            const response = await fetch(`${IpAPI}/api/animals-adopt?limit=${limit}&offset=${offset}`, {
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

    const applyFilter = () => {
        if (!selectedFilter) {
            setFilteredAnimals(adopAnimals);
        } else {
            setFilteredAnimals(
                adopAnimals.filter((animal) => animal.category === selectedFilter)
            );
        }
        console.log("Datos");
        console.log(filteredAnimals);
    };

    const handleFilterClick = (filter) => {
        setSelectedFilter((prevFilter) => (prevFilter === filter ? null : filter));
    };

    if (adopAnimals.length === 0) {
      return <Loading />;
    }

    return (
      <>
        <div className='container mx-auto flex flex-row justify-evenly border-b-2 pb-8 dark:border-white border-black mt-6'>
          <Filtroak_animalia img="adopta_perro" text="TXAKURRAK" onClick={() => handleFilterClick('txakurra')}/>
          <Filtroak_animalia img="adopta_ppp" text="TXAKURRAK PPP" onClick={() => handleFilterClick('txakurra_ppp')}/>
          <Filtroak_animalia img="adopta_gato-1" text="KATUAK" onClick={() => handleFilterClick('katua')}/>
          <Filtroak_animalia img="adopta_otros" text="BESTEAK" onClick={() => handleFilterClick('besteak')}/>
        </div>
        <div className="container mx-auto">
          <div className="mx-auto">
            <div className="flex flex-col ">
              <h1 className='mt-10 fonts_ubutu_Bold text-xl text-text_green'>Premiazkoak</h1>
              <div className="flex flex-row justify-evenly mt-10 flex-wrap">
                {filteredAnimals.map((item) => (
                  <Animaliak 
                      name={item.name}
                      id={item.id}
                      deskribapena={item.descripcion}

                      mota='adopzio'
                  />
                  
                ) )}
              </div>
              {hasMore && (
                <div className="flex justify-center mt-10">
                  <button 
                    onClick={fetchAdopAnimals} 
                    className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700">
                    Mostrar más
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
}

export default Adopzioak;