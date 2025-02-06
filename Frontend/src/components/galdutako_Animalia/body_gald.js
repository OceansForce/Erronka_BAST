import i18n from './../../118n/menu';
import { useTranslation } from 'react-i18next';
import IpAPI from '../../config/ipAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Anim_Gald_BODY() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const [animalData, setAnimalData] = useState(null);
  const [datuak, setDatuak] = useState({
    email:"",
    izena:"",
    dataNoiz:"",
    urteak:"",
    tipo:"",
    raza:"",
    img:"",
    gen:"",
    des:"",
    galDes:""
  });
  
  useEffect(() => {
      const fetchSingleNews = async () => {
        try {
          const response = await fetch(`${IpAPI}/api/animal-losted/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error(`Error fetching news with id ${id}`);
          }
  
          const data = await response.json();
          
          setAnimalData(data);
        } catch (error) {
          console.error('Error fetching single news:', error);
          alert('Error al obtener los datos del animal.');
        }
      };
  
      if (id) {
        fetchSingleNews(); // Llamar a la API cuando `id` esté disponible
      }
  }, [id]);
    
  useEffect(()=>{
    console.log("Animal data: ", animalData);
    if(animalData!=null){
      let genero = animalData.animal.gender === 1 ? t("Adop_Anim:arra") : t("Adop_Anim:arra");
      let bakuna = animalData.animal.bakuna === 1 ? t("EraPanela:Bai") : t("EraPanela:Ez");
      let etxekoAnimali = animalData.animal.etxekoAnimalia === 1 ? t("EraPanela:Bai") : t("EraPanela:Ez");

      setDatuak({
        izena:animalData.animal.name,
        email:animalData.contactEmail,
        prob:animalData.animal.probintzia,
        hiria:animalData.animal.hiria,
        dataNoiz:animalData.animal.fecha,
        urteak: new Date(animalData.animal.year).toLocaleDateString() ,
        tipo:animalData.animal.type,
        raza:animalData.animal.animalType,
        esti: bakuna,
        img:animalData.animal.img,
        gen:genero,
        etxe: etxekoAnimali, 
        des:animalData.animal.descripcion,
        galDes:animalData.animal.moreInformation
      });
    }
   // console.log(animalData.contactEmail);
  },[animalData]);
 
  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Cambia el idioma
  };

  const typeSwitch= ()=>{
    switch (datuak.tipo) {
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
                  <img src={datuak.img} className="w-full rounded-lg"/>
              </div>

              <div className=" w-5/6 lg:w-2/4 flex flex-col ml-4">
                  <div className="w-full flex flex-col lg:flex-row items-center">
                      <div className="w-full lg:w-1/3 flex flex-row items-center">
                          {typeSwitch()}
                          <p className="mr-2 text-5xl font-ubuntu text-black dark:text-white">{datuak.izena}</p>
                      </div>
                  </div>

                  <div className="flex flex-col w-full">
                      <p className="ml-5 mt-10 text-base font-ubuntu text-black dark:text-white" >{t("Gal_Anim:Jabea")}: {datuak.email}</p>

                      <div className="flex flex-col w-full mt-5 ">
                          <div className="flex flex-row w-full justify-between mt-3">
                              <p className="w-full ml-5  text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">{t("Gal_Anim:Non")}: {datuak.prob}, {datuak.hiria}</p>
                          </div>

                          <div className="flex flex-row w-full justify-between mt-3">
                              <p className="w-2/4 ml-5 text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">{t("Gal_Anim:Sexua")}: {datuak.gen}</p>
                              <p className="w-2/4 ml-5 text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">{t("Gal_Anim:Arraza")}: {datuak.raza}</p>
                          </div>
                          <div className="flex flex-row w-full justify-between mt-3">
                              <p className="w-2/4 ml-5  text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">{t("Gal_Anim:Jaiotze_data")}: {datuak.urteak}</p>
                              <p className="w-2/4 ml-5  text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">{t("Gal_Anim:Esterilizatua")}: {datuak.esti}</p>
                          </div>
                          <div className="flex flex-row w-full justify-between mt-3">
                              <p className="w-full ml-5  text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">{t("Gal_Anim:Etxekoa")}: {datuak.etxe}</p>
                          </div>

                          <div className="flex flex-row w-full justify-between mt-3">
                              <p className="w-full ml-5 text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">
                              {t("Gal_Anim:Deskribapena")}: <br/>{datuak.des} </p>
                          </div>
                          <div className="flex flex-row w-full justify-between mt-3">
                              <p className="w-full ml-5 text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">
                              {t("Gal_Anim:Deskribapena_Gal")}: <br/>{datuak.galDes} </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default Anim_Gald_BODY;