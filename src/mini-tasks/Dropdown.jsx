import { useState } from "react";

const Dropdown = () => {
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];
  const [currentCountry, setCurrentCountry] = useState(null);

  const handleOnChange = (e) => {
    const country = countries.find((item) => item.name === e.target.value);
    setCurrentCountry(country);
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex gap-2 text-4xl">
        <select
          className="border-2 border-black outline-none"
          onChange={handleOnChange}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        {currentCountry ? (
          <select className="border-2 border-black outline-none">
            <option value={null}>Select City</option>
            {currentCountry.cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
