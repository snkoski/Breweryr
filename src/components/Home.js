import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map/Map';
import BreweriesList from './Brewerys/BreweriesList';
import '../App.css';
import CityContext from '../hooks/CityContext';

const getGeocodingAddress = (street, city, state, postal_code) => {
  const connected = `${street} ${city} ${state} ${postal_code}`;
  const replaced = connected.replace(new RegExp(' ', 'g'), '%20');
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${replaced}.json?types=address&access_token=pk.eyJ1Ijoid3Rmc21va2UiLCJhIjoiY2p5OTliam9lMDFzZzNjbzR1dGE4dmp2cSJ9.Zj-93J_-slJrJcuYoblyAA`;
  return url;
};

const assign = ([long, lat], orig) => {
  const t = orig;
  t.longitude = long;
  t.latitude = lat;
  return t;
};

const Home = () => {
  const [city, setCity] = useState('Boulder');
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=50`);
      const test = result.data.map((r) => {
        if (r.latitude === null) {
          const add = getGeocodingAddress(r.street, r.city, r.state, r.postal_code);
          axios.get(add)
            .then(resp => resp.data.features[0].center)
            .then(res => assign(res, r)).then(l => l)
            .catch(err => console.log(err));
        }
        return r;
      });
      console.log('TEST', test);
      setBreweries(test);
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
