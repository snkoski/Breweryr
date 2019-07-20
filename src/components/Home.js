import React, { useState } from 'react';
import MapApp from '../MapApp';
import BreweriesList from './BreweriesList';
import '../App.css';
import CityContext from '../hooks/CityContext';

const Home = () => {
  const [value, setValue] = useState('Denver');
  return (
    <div className="home-container">
      <CityContext.Provider value={{ value, setValue }}>
        <MapApp />
        <BreweriesList />
      </CityContext.Provider>
    </div>
  );
};

export default Home;
