import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BreweryDetails from './Brewerys/BreweryDetails';
import MapSingle from './Map/MapSingle';
import '../App.css';
// import CityContext from '../hooks/CityContext';

const Details = ({ match, location }) => {
  const [brewery, setBrewery] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.openbrewerydb.org/breweries/${location.state.breweryID}`);
      setBrewery(result.data);
    };
    fetchData();
  }, [location.state.breweryID]);

  return (
    <div className="details-container">
      <div>
        <h1>
          <Link to="/">
          Go Back
          </Link>
        </h1>
      </div>
      <BreweryDetails brewery={brewery} />
      <MapSingle brewery={brewery} />
    </div>
  );
};

export default Details;
