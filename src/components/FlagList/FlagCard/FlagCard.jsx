import React from "react";
import { Link } from "react-router-dom";

const FlagCard = (props) => {
  const { name, alpha3Code, capital, flag, region, population } = props;
  return (
    <div className="card m-2">
        <Link to={`/flags/${name}`}>
        <img className="card-img-top" src={flag} alt={name} />
        <div className="card-body">
          <h5 className="card-title">Country Name: {name.toUpperCase()}</h5>
          <p className="card-text">{alpha3Code}</p>
          <p className="card-text">Capital: {capital}</p>
          <p className="card-text">Region: {region}</p>
          <p className="card-text">Population: {population}</p>
        </div>
        </Link>
    </div>
  );
};

export default FlagCard;