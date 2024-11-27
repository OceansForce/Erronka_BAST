// function Body() {
//     return <div className="container items-center flex flex-col pt-10">
//             <div className="container items-center flex flex-row justify-evenly">
//                 <div className="w-1/4 flex flex-col justify-cemter border-2 rounded-lg">
                    
//                     <img src="./img/¿sabias-que-la-nariz-de-cada-perro-es-unica.png" className="container h-64 rounded-t-lg"/>

//                     <div className="p-4 flex-col justify-center">
//                         <h3 className="text-center font-bold text-slate-600 ">La nariz de tu perro es única</h3>
//                         <p className="text-left data pb-3 pt-2">2024/11/27</p>
//                         <div>
//                             <p className="text-justify text-slate-600">
//                                 Seguro que sospechabas algo, pero la nariz de tu compañero peludo además de ser un detector infalible de chuches y […]

//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-1/4 flex flex-col justify-center border-2 rounded-lg">
                    
//                     <img src="./img/teckel_obeso.png" className="container h-64  rounded-t-lg"/>
//                     <div className="p-4 flex-col justify-center">
//                         <h3 className="text-center font-bold text-slate-600">La obesidad en los perros</h3>
//                         <p className="text-left data pb-3 pt-2">2024/9/15</p>
//                         <div>
//                             <p className="text-justify text-slate-600">La obesidad en nuestros perros es más común de lo que podemos creer y puede deberse a diferentes causas. A […]</p>
//                         </div>
//                     </div>
                    
//                 </div>
//                 <div className="w-1/4 flex flex-col justify-center border-2 rounded-lg">
                    
//                     <img src="./img/procesionaria.png" className="container h-64 rounded-t-lg"/>
//                     <div className="p-4 flex-col justify-center">
//                         <h3 className="text-center font-bold text-slate-600">La procesionaria ya está aquí</h3>
//                         <p className="text-left data pb-3 pt-2">2024/4/3</p>
//                         <div>
//                             <p className="text-justify text-slate-600">
//                                 Seguro que sospechabas algo, pero la nariz de tu compañero peludo además de ser un detector infalible de chuches y […]
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-1/4 flex flex-col justify-cemter border-2 rounded-lg">
                    
//                     <img src="./img/¿sabias-que-la-nariz-de-cada-perro-es-unica.png" className="container h-64 rounded-t-lg"/>

//                     <div className="p-4 flex-col justify-center">
//                         <h3 className="text-center font-bold text-slate-600 ">La nariz de tu perro es única</h3>
//                         <p className="text-left data pb-3 pt-2">2024/11/27</p>
//                         <div>
//                             <p className="text-justify text-slate-600">
//                                 Seguro que sospechabas algo, pero la nariz de tu compañero peludo además de ser un detector infalible de chuches y […]

//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div>
//                     <h4>Gehiago</h4>
//                 </div>
//             </div>
            
//         </div>
//     ;
// }

// export default Body;

import React, { useState } from "react";
import "./Carousel.css";

const Body = () => {
    const items = [
        { id: 1, title: "La nariz de tu perro es única", date: "2024/11/27", description: "Seguro que sospechabas algo, pero la nariz de tu compañero peludo además de ser un detector infalible de chuches y […]", img: "./img/¿sabias-que-la-nariz-de-cada-perro-es-unica.png" },
        { id: 2, title: "La obesidad en los perros", date: "2024/9/15", description: "La obesidad en nuestros perros es más común de lo que podemos creer y puede deberse a diferentes causas. A […]", img: "./img/teckel_obeso.png" },
        { id: 3, title: "La procesionaria ya está aquí", date: "2024/4/3", description: "La procesionaria ya está aquí y puede ser peligrosa para tus perros. Aprende cómo protegerlos […]", img: "./img/procesionaria.png" },
        { id: 4, title: "Otra curiosidad de los perros", date: "2024/11/28", description: "Las patas de los perros también tienen características únicas que los hacen increíbles […]", img: "./img/curiosidades_de_los_perros_25982_orig.jpg" },
        { id: 5, title: "Perros y su comunicación", date: "2024/12/10", description: "Descubre cómo los perros usan su lenguaje corporal para comunicarse contigo […]", img: "./img/comunicacion-perros.png" },
        { id: 6, title: "El sueño de los perros", date: "2024/6/19", description: "¿Sabías que los perros sueñan como los humanos? Aprende más sobre el ciclo de sueño de tu perro […]", img: "./img/NHLYIOI7TNFONPPTGTOCKYGBAI.jpg" },
        { id: 7, title: "La procesionaria ya está aquí", date: "2024/4/3", description: "La procesionaria ya está aquí y puede ser peligrosa para tus perros. Aprende cómo protegerlos […]", img: "./img/procesionaria.png" },
        { id: 8, title: "La procesionaria ya está aquí", date: "2024/4/3", description: "La procesionaria ya está aquí y puede ser peligrosa para tus perros. Aprende cómo protegerlos […]", img: "./img/procesionaria.png" },
        { id: 9, title: "La procesionaria ya está aquí", date: "2024/4/3", description: "La procesionaria ya está aquí y puede ser peligrosa para tus perros. Aprende cómo protegerlos […]", img: "./img/procesionaria.png" },
        { id: 10, title: "La procesionaria ya está aquí", date: "2024/4/3", description: "La procesionaria ya está aquí y puede ser peligrosa para tus perros. Aprende cómo protegerlos […]", img: "./img/procesionaria.png" },
        { id: 11, title: "La procesionaria ya está aquí", date: "2024/4/3", description: "La procesionaria ya está aquí y puede ser peligrosa para tus perros. Aprende cómo protegerlos […]", img: "./img/procesionaria.png" },
        { id: 12, title: "La procesionaria ya está aquí", date: "2024/4/3", description: "La procesionaria ya está aquí y puede ser peligrosa para tus perros. Aprende cómo protegerlos […]", img: "./img/procesionaria.png" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6; // Número de elementos por página

    // Lógica para pasar a la siguiente página
    const next = () => {
        if ((currentIndex + 1) * itemsPerPage < items.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Lógica para retroceder a la página anterior
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Slice de los elementos a mostrar en la página actual
    const currentItems = items.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

    return (
        <div className="carousel-container">
            <button onClick={prev} className="carousel-button prev" disabled={currentIndex === 0}>
                ←
            </button>
            <div className="carousel-wrapper">
                <div className="carousel-content">
                    {currentItems.map((item) => (
                        <div key={item.id} className="carousel-item">
                            <img src={item.img} alt={item.title} className="carousel-img rounded-t-lg" />
                            <div className="carousel-text">
                                <h3 className="text-center font-bold text-slate-600">{item.title}</h3>
                                <p className="text-left data pb-3 pt-2">{item.date}</p>
                                <p className="text-justify text-slate-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={next} className="carousel-button next" disabled={(currentIndex + 1) * itemsPerPage >= items.length}>
                →
            </button>
        </div>
    );
};

export default Body;


