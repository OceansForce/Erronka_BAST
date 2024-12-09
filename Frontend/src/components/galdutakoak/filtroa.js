import React, { useState, useRef } from "react";

const Filtroa = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: "usa",
    label: "USA",
    img: "https://flagcdn.com/w40/us.png",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { value: "usa", label: " USA", img: "https://flagcdn.com/w40/us.png" },
    { value: "uk", label: " UK", img: "https://flagcdn.com/w40/gb.png" },
    { value: "fr", label: " France", img: "https://flagcdn.com/w40/fr.png" },
    { value: "de", label: "Germany", img: "https://flagcdn.com/w40/de.png" },
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
    <div className="mt-10 max-w-auto flex flex-row justify-center">
      <form className="max-w-sm mx-auto">
        <div className="flex items-center">
          {/* Primer Select: Custom Select */}
          <div className="custom-select relative w-32 " ref={dropdownRef}>
            <div
              className="h-10 select-button flex items-center space-x-2 cursor-pointer   bg-primary  border-bg-primary text-gray-900 text-sm rounded-l-lg border-t-2 border-l-2 border-b-2 border-l-bg-primary dark:border-l-gray-700 border-l-2 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={selectedOption.img}
                alt={`${selectedOption.label} Flag`}
                className="w-5 h-5"
              />
              <span>{selectedOption.label}</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-2 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul className="options absolute mt-2 bg-primary border rounded shadow-lg w-full z-10">
                {options.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => handleOptionSelect(option)}
                    className="option-item flex items-center space-x-2 p-2 hover:bg-primary cursor-pointer"
                  >
                    <img
                      src={option.img}
                      alt={`${option.label} Flag`}
                      className="w-5 h-5 mr-1"
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
              className="h-10 bg-primary border  text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-t-2 border-r-2 border-b-2  block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white "
            >
              <option selected>Choose a state</option>
              <option value="CA">California</option>
              <option value="TX">Texas</option>
              <option value="WH">Washington</option>
              <option value="FL">Florida</option>
              <option value="VG">Virginia</option>
              <option value="GE">Georgia</option>
              <option value="MI">Michigan</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filtroa;


