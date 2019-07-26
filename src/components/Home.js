import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map/Map';
import BreweriesList from './Brewerys/BreweriesList';
import '../App.css';
import CityContext from '../hooks/CityContext';

const Home = () => {
  const [city, setCity] = useState('Boulder');
  const [breweries, setBreweries] = useState([]);
  const [types, setTypes] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://3.218.162.55/breweries/cities/${city}`);
      const uniqueTypes = [...new Set(result.data.breweries.map(b => b.brewery_type))];
      uniqueTypes.unshift('all');
      setTypes(uniqueTypes);
      setBreweries(result.data.breweries);
    };
    const fetchCities = async () => {
      const result = await axios.get('http://3.218.162.55/cities');
      setCities(result.data.cities);
    };
    fetchData();
    fetchCities();
  }, [city]);

  return (
    <div className="home-container">
      <CityContext.Provider value={{
        city, setCity, breweries, types, cities,
      }}
      >
        <Map />
        <BreweriesList />
      </CityContext.Provider>
    </div>
  );
};

export default Home;
