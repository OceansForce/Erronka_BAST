import Animaliak from './animaliak/animaliak.jsx'; 
import Filtroak_animalia from './filtroak/filtroak_animaliak.jsx';
import { useEffect, useState } from 'react';
import IpAPI from '../../config/ipAPI.js';
import Loading from '../loading/loading.jsx';

function Adopzioak() {
    const [adopAnimals, setAdopAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [filtro_aktibatu, setfiltro_aktibatu]= useState(false);

    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const limit = 9; // Número de animales a pedir por solicitud

    const [botoiTxakurra, setbotoiTxakurra]=useState(false);
    const [botoiPPP, setbotoiPPP]=useState(false);
    const [botoiKatuak, setbotoiKatuak]=useState(false);
    const [botoiBesteak, setbotoiBesteak]=useState(false);

    useEffect(() => {
      fetchAdopAnimals();
    }, []);
    
    useEffect(()=>{
      console.log("Adoptatzeko animaliak", adopAnimals);
    },[adopAnimals]);

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
                adopAnimals.sort((a, b) => a[12] - b[12]);

                // Incrementar el offset para la próxima solicitud
                setOffset((prevOffset) => prevOffset + limit);
          }
            
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud. Revisa tu conexión.');
        }
    };

    

    useEffect(()=>{
      console.log("Datos Filtro",filteredAnimals);
    },[filteredAnimals]);

    useEffect(()=>{
     if(botoiBesteak || botoiKatuak || botoiPPP || botoiTxakurra){
      setfiltro_aktibatu(true);

      let lista=[];

      if(botoiTxakurra){

        adopAnimals.forEach(animalia => {
          if(animalia.type==="txakurra"){
            console.log(animalia);
            lista.push(animalia);
          }
        });
      }else{
        lista= lista.filter((animalia)=> animalia.type!=="txakurra");
      }

      if(botoiPPP){

        adopAnimals.forEach(animalia => {
          if(animalia.type==="txakurra ppp"){
            console.log(animalia);
            lista.push(animalia);
          }
        });
      }else{
        lista= lista.filter((animalia)=> animalia.type!=="txakurra ppp");
      }

      if(botoiKatuak){

        adopAnimals.forEach(animalia => {
          if(animalia.type==="katua"){
            console.log(animalia);
            lista.push(animalia);
          }
        });

      }else{
        lista= lista.filter((animalia)=> animalia.type!=="katua");
      }

      if(botoiBesteak){

        adopAnimals.forEach(animalia => {
          if(animalia.type==="besteak"){
            console.log(animalia);
            lista.push(animalia);
          }
        });

      }else{
        lista= lista.filter((animalia)=> animalia.type!=="besteak");
      }

      setFilteredAnimals(lista);
     }else if (!(botoiBesteak && botoiKatuak && botoiPPP && botoiTxakurra)){
        setfiltro_aktibatu(false);
     }
     filteredAnimals.sort((a, b) => a[12] - b[12]);
    },[botoiTxakurra, botoiPPP, botoiKatuak, botoiBesteak]);

    if (adopAnimals.length === 0) {
      return <Loading />;
    }
    
    return (
      <>
        <div className='container mx-auto flex flex-row justify-evenly border-b-2 pb-8 dark:border-white border-black mt-6'>
          <Filtroak_animalia img="adopta_perro" text="TXAKURRAK" aktibatuta={(egoera)=>setbotoiTxakurra(egoera)}/>
          <Filtroak_animalia img="adopta_ppp" text="TXAKURRAK PPP" aktibatuta={(egoera)=>setbotoiPPP(egoera)}/>
          <Filtroak_animalia img="adopta_gato-1" text="KATUAK" aktibatuta={(egoera)=>setbotoiKatuak(egoera)}/>
          <Filtroak_animalia img="adopta_otros" text="BESTEAK" aktibatuta={(egoera)=>setbotoiBesteak(egoera)}/>
        </div>
        <div className="container mx-auto">
          <div className="mx-auto">
            <div className="flex flex-col ">
              <h1 className='mt-10 fonts_ubutu_Bold text-xl text-text_green'>Premiazkoak</h1>
              <div className="flex flex-row justify-evenly mt-10 flex-wrap">
              {(filtro_aktibatu ? filteredAnimals : adopAnimals).map((item) => (
                <Animaliak 
                  key={item.id}
                  name={item.name}
                  id={item.id}
                  img={item.img}
                  deskribapena={item.descripcion}
                  mota="adopzio"
                />
              ))}
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