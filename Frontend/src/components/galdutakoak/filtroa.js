import React, { useState, useRef } from "react";

const Filtroa = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: "gui",
    label: "Gipuzkoa",
    img: "./img/Banderas/Flag_of_Guipúzcoa.svg.png",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { value: "biz", label: " Bizkaia", img: "./img/Banderas/Bandera_de_Vizcaya.svg.png" },
    { value: "gui", label: " Guipuzkoa", img: "./img/Banderas/Flag_of_Guipúzcoa.svg.png" },
    { value: "ara", label: " Araba", img: "./img/Banderas/Flag_of_Álava.svg" },
    { value: "na", label: "Nabarra", img: "./img/Banderas/descarga.png" },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="mt-10 max-w-auto flex flex-row justify-center z-1">
      <form className="max-w-sm mx-auto">
        <div className="flex items-center">
          {/* Primer Select: Custom Select */}
          <div className="custom-select relative w-32 z-1" ref={dropdownRef}>
            <div
              className="h-10 select-button flex items-center space-x-2 cursor-pointer bg-primary text-gray-900 text-sm rounded-l-lg   w-full p-2.5 dark:bg-gray-700 dark:text-white border-y-2 border-l-2 border-gray-100 "
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img 
                src={selectedOption.img}
                alt={`${selectedOption.label} Flag`}
                className="w-5 h-5"
              />
              <span>{selectedOption.label}</span>
              <img
                width="8"
                height="6"
                
                src="/img/icons/menu/gezia_dark.svg"
                className="ml-2 transition-transform hidden dark:block"
              />
          
             
              <img
                width="8"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                src="/img/icons/menu/gezia.svg"
                className="ml-2 transition-transform dark:hidden "
              />
            
              
            </div>
            {isDropdownOpen && (
              <ul className="options absolute mt-2 bg-primary rounded shadow-lg w-full z-10 ">
                {options.map((option) => (
                  <li
                  key={option.value}
                  onClick={() => handleOptionSelect(option)}
                  className="option-item flex items-center space-x-2 p-2 bg-primary dark:bg-gray-700 dark:text-white hover:bg-hover hover:!bg-hover hover:dark:!bg-hover hover:dark:!text-white hover:text-white cursor-pointer"
                >
                  <img
                    src={option.img}
                    alt={`${option.label} Flag`}
                    className="w-5 h-5 mr-1 border-2 border-black dark:border-slate-400"
                  />
                  {option.label}
                </li>
               
                ))}
              </ul>
            )}
          </div>

          {/* Segundo Select: HTML Select */}
          <div className="m-0 ">
          
            <select
              id="states"
              className="h-10 bg-primary border  text-gray-900 text-sm rounded-e-lg  dark:border-s-gray-700 border-t-2 border-s-gray-100 border-r-2 border-b-2  block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white z-1"
            >
              <option selected>-------</option>
              <option value="Donos">Donosti</option>
              <option value="Bilbo">Bilbao</option>
              <option value="VG">Vitoria-Gasteiz</option>
              <option value="Pam">Pamplona</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filtroa;


