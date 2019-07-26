import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map/Map';
import BreweriesList from './Brewerys/BreweriesList';
import '../App.css';
import CityContext from '../hooks/CityContext';

// const getGeocodingAddress = (street, city, state, postalCode) => {
//   const connected = `${street} ${city} ${state} ${postalCode}`;
//   const replaced = connected.replace(new RegExp(' ', 'g'), '%20');
//   const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${replaced}.json?types=address&access_token=pk.eyJ1Ijoid3Rmc21va2UiLCJhIjoiY2p5OTliam9lMDFzZzNjbzR1dGE4dmp2cSJ9.Zj-93J_-slJrJcuYoblyAA`;
//   return url;
// };

// const assign = ([long, lat], orig) => {
//   const t = orig;
//   t.longitude = long;
//   t.latitude = lat;
//   return t;
// };

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
      // const resultBreweries = result.data.breweries.map((r) => {
      //   if (r.latitude === null) {
      //     const add = getGeocodingAddress(r.street, r.city, r.state, r.postal_code);
      //     axios.get(add)
      //       .then(resp => resp.data.features[0].center)
      //       .then(res => assign(res, r));
      //     // .catch(err => console.log(err));
      //   }
      //   return r;
      // });
      setBreweries(result.data.breweries);
    };
    const fetchCities = async () => {
      const result = await axios.get('http://3.218.162.55/cities');
      // const resultBreweries = result.data.breweries.map((r) => {
      //   if (r.latitude === null) {
      //     const add = getGeocodingAddress(r.street, r.city, r.state, r.postal_code);
      //     axios.get(add)
      //       .then(resp => resp.data.features[0].center)
      //       .then(res => assign(res, r));
      //     // .catch(err => console.log(err));
      //   }
      //   return r;
      // });
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
