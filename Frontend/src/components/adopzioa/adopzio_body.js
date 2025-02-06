import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Animaliak from './animaliak/animaliak.jsx';
import Filtroak_animalia from './filtroak/filtroak_animaliak.jsx';
import IpAPI from '../../config/ipAPI.js';
import Loading from '../loading/loading.jsx';

function Adopzioak({datua}) {
  const { t } = useTranslation();

  const [adopAnimals, setAdopAnimals] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const limit = 9; // Número de animales por solicitud

  // Estado único para los filtros
  const [filters, setFilters] = useState({
    txakurra: false,
    ppp: false,
    katua: false,
    besteak: false,
  });

  // useEffect();

  // Obtener la consulta de filtros
  const getFilterParams = () => {
    let params = "";
    if (filters.txakurra) params += "&type[]=txakurra";
    if (filters.ppp) params += "&type[]=txakurra ppp";
    if (filters.katua) params += "&type[]=katua";
    if (filters.besteak) params += "&type[]=besteak";
    return params;
  };

  // Fetch de animales
  const fetchAdopAnimals = async (reset = false) => {
    setLoading(true);
    try {
      let newOffset = reset ? 0 : offset;
      let url = `${IpAPI}/api/animals-adopt?limit=${limit}&offset=${newOffset}${getFilterParams()}`;
      
      console.log("Fetching: ", url);
      const response = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' } });

      if (response.ok) {
        const result = await response.json();
        setHasMore(result.length > 8);
        setAdopAnimals(reset ? result : [...adopAnimals, ...result]);
        setOffset(newOffset + limit);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error en la solicitud. Revisa tu conexión.');
    } finally {
      setLoading(false);
    }
  };

  // Cargar datos iniciales
  useEffect(() => {
    fetchAdopAnimals(true);
  }, []);

  // Aplicar filtros
  useEffect(() => {
    console.log("Filters",filters);
    fetchAdopAnimals(true);
    
  }, [filters]);

  useEffect(()=>{
    console.log("Animalia",adopAnimals);
  },[adopAnimals]);

  return (
    <>
      <div className='container mx-auto flex flex-col  items-center sm:flex-row justify-evenly border-b-2 pb-8 dark:border-white border-black mt-6'>
        <Filtroak_animalia img="adopta_perro" text={t("Adop_Anim:Txakurrak")} aktibatuta={(estado) => setFilters((a)=> ({
          ...a,
          txakurra: estado,
        }))}/>
        <Filtroak_animalia img="adopta_ppp" text={t("Adop_Anim:ppp")} aktibatuta={(estado) => setFilters((a)=> ({
          ...a,
          ppp: estado,
        }))}/>
        <Filtroak_animalia img="adopta_gato-1" text={t("Adop_Anim:Katuak")} aktibatuta={(estado) => setFilters((a)=> ({
          ...a,
          katua: estado,
        }))}/>
        <Filtroak_animalia img="adopta_otros" text={t("Adop_Anim:Besteak")} aktibatuta={(estado) => setFilters((a)=> ({
          ...a,
          besteak: estado,
        }))}/>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto">
          <div className="mx-auto">
            <div className="flex flex-col ">
              <h1 className='mt-10 fonts_ubutu_Bold text-xl text-text_green'>{t("Adop_Anim:Premiazkoak")}</h1>
              <div className="flex flex-row justify-evenly mt-10 flex-wrap">
                {adopAnimals.filter((_, index) => index !== 8).map((item) => (
                  <Animaliak 
                  key={item.id} 
                  name={item.name} 
                  id={item.id} img={item.img} 
                  deskribapena={item.descripcion} 
                  mota="adopzio" />
                ))}
              </div>
              {hasMore && (
                <div className="flex justify-center mb-8">
                  <button 
                    onClick={() => fetchAdopAnimals()} 
                    className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700">
                    {t("Adop_Anim:gehiago")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Adopzioak;
