import { useEffect, useState } from 'react';
import i18n from './../../118n/menu';
import { useTranslation } from 'react-i18next';
import IpAPI from '../../config/ipAPI';
import { useParams } from 'react-router-dom';
import Loading from '../loading/loading';
import AdopzioBotoia from './adopzioBotoia';

function Anim_Adop_BODY() {
    const { id } = useParams();
    
    const { t, i18n } = useTranslation();
    
    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);  // Cambia el idioma
    };
    const [animalData, setAnimalData] = useState(null);
    const [contacEmail, setContactEmail] = useState(null);



    useEffect(() => {
        const fetchSingleAnimal = async () => {
          try {
            const response = await fetch(`${IpAPI}/api/animal-adopt/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            if (!response.ok) {
              throw new Error(`Error fetching news with id ${id}`);
            }
    
            const data = await response.json();
            console.log('Datos de la noticia:', data);
            setAnimalData(data.animal);
            setContactEmail(data.contactEmail);
          } catch (error) {
            console.error('Error fetching single news:', error);
            alert('Error al obtener los datos de la noticia.');
          }
        };
    
        if (id) {
            fetchSingleAnimal(); // Llamar a la API cuando `id` esté disponible
        }
      }, [id]);

      

      useEffect(()=>{
        console.log("Animalia ",animalData);
      },[animalData]);

    // const [etxe, setEtxe]= useState(null);
    // useEffect(()=>{
    //     console.log(etxekoa);
    //     if (Boolean(etxekoa)){
    //         setEtxe("Bai");
    //     }else{
    //         setEtxe("Ez");
    //     }
    //     console.log(etxe);
    // },[])
    
    if (animalData === null) {
        return (
            <Loading />
        );
    }

    const formattedDate = new Date(animalData.year).toLocaleDateString(i18n.language, {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    // t("EraPanela:Ez");
    const genero = animalData.gender === 1 ? t("Adop_Anim:arra") : t("Adop_Anim:arra");
    const bakuna = animalData.bakuna === 1 ? t("EraPanela:Bai") : t("EraPanela:Ez");
    const etxekoAnimali = animalData.etxekoAnimalia === 1 ? t("EraPanela:Bai") : t("EraPanela:Ez");

    const typeSwitch= ()=>{
      switch (animalData.type) {
        case "besteak": 
          return <img src="/img/icons/animals/adopta_otros.gif" className="dark:invert "/>;

        case "txakurra":
          return <img src="/img/icons/animals/adopta_perro.gif" className="dark:invert "/>;

        case "txakurra PPP":
          return <img src="/img/icons/animals/adopta_ppp.gif" className="dark:invert "/>;

        default:
          return <img src="/img/icons/animals/adopta_gato-1.gif" className="dark:invert "/>;
      }
    }

    return (
      <>
        <div className="w-full lg:w-4/5 flex flex-col h-full my-10 justify-center">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center">
                <div className="w-5/6 lg:w-2/4">
                    <img src={animalData.img} className="w-full rounded-lg"/>
                </div>

                <div className=" w-5/6 lg:w-2/4 flex flex-col ml-4">
                    <div className="w-full flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-1/3 flex flex-row items-center">
                            {
                              typeSwitch()
                            }
                            <p className="mr-2 text-5xl font-ubuntu text-black dark:text-white">{animalData.name}</p>
                        </div>

                        <AdopzioBotoia text={t('Adop_Anim:Adoptatu')} animalID={animalData.id} />
                    </div>

                    <div className="flex flex-col w-full">
                        <p className="ml-5 mt-10 text-base font-ubuntu text-black dark:text-white" >{t("Adop_Anim:Babes_Elk")}: {contacEmail}</p>

                        <div className="flex flex-col w-full mt-5 ">

                            
                            <div className="flex flex-row w-full justify-between mt-3">
                                <p className="w-2/4 ml-5 text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">{t("Adop_Anim:Sexua")}: {genero}</p>
                                <p className="w-2/4 ml-5 text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">{t("Adop_Anim:Arraza")}: {animalData.animalType}</p>
                            </div>
                            <div className="flex flex-row w-full justify-between mt-3">
                                <p className="w-2/4 ml-5  text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">{t("Adop_Anim:Jaiotze_data")}: {formattedDate}</p>
                                <p className="w-2/4 ml-5  text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">{t("Adop_Anim:Esterilizatua")}: {bakuna}</p>
                            </div>
                            <div className="flex flex-row w-full justify-between mt-3">
                                <p className="w-full ml-5  text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">{t("Adop_Anim:Etxekoa")}: {etxekoAnimali}</p>
                            </div>

                            <div className="flex flex-row w-full justify-between mt-3">
                                <p className="w-full ml-5 text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">
                                {t("Adop_Anim:Deskribapena")}: <br/>{animalData.descripcion} 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Anim_Adop_BODY;