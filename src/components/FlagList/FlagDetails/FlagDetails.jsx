import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
import { useParams, Link } from "react-router-dom";
import FlagsContext from "../../../context/FlagsContext";

const FlagDetails = () => {
  const [country, setCountry] = useState([]);
  // const { name, capital, flags, maps, region, population } = country;
  const { flagName } = useParams();
  const { flags } = useContext(FlagsContext);

  // const getCountry = async () => {
  //   let flags = await axios.get(
  //     `https://restcountries.com/v3.1/name/${flagName}`
  //   );
  //   setCountry(flags.data[0]);
  // };

  // useEffect(() => {
  //   getCountry();
  // }, [flagName]);

  const filter = () => {
    const response = flags.filter((flag) => flag.name.official === flagName);
    setCountry(response[0]);
  };

  useEffect(() => {
    filter();
  }, []);

  return (
    <div>
      FlagDetails
      <Link to="/flags">Back</Link>
      {country ? (
        <>
          <h1>{country?.name?.official}</h1>
          <img
            className="card-img-top"
            src={country?.flags?.svg}
            alt={country?.name?.common}
          />
          <p className="card-text">{country?.capital}</p>
          <p className="card-text">{country?.maps?.googleMaps}</p>
          <p className="card-text">{country?.region}</p>
          <p className="card-text">{country?.population}</p>
        </>
      ) : null}
    </div>
  );
};

export default FlagDetails;
