import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map/Map';
import BreweriesList from './Brewerys/BreweriesList';
import '../App.css';
import CityContext from '../hooks/CityContext';

const Home = () => {
  const [city, setCity] = useState('Boulder');
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=50`);
      setBreweries(result.data);
    };
    fetchData();
  }, [city]);

  return (
    <div className="home-container">
      <CityContext.Provider value={{
        city, setCity, breweries,
      }}
      >
        <Map />
        <BreweriesList />
      </CityContext.Provider>
    </div>
  );
};

export default Home;
