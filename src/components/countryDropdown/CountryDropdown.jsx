import React, { useEffect, useState } from "react";
import Clock from "../clock/clock";

function CountryDropdown() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  useEffect(() => {
    fetch("http://worldtimeapi.org/api/timezone")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  // console.log(selectedCountry)
  return (
    <>
      <div>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          style={{margin:"0.5em 1em", fontSize:"1em"}}
        >
          <option value="Select">Select your country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      <Clock data={selectedCountry} />
      </div>
    </>
  );
}

export default CountryDropdown;
