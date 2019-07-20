import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import CityContext from '../hooks/CityContext';

const BreweriesList = () => {
  const [breweries, setBreweries] = useState([]);
  const { value, setValue } = useContext(CityContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${value}&per_page=50`);
      // console.log(result.data)
      setBreweries(result.data);
    };
    fetchData();
  }, [value]);


  return (
    <div className="list">
      <h1>
Breweries in
        {' '}
        {value}
, Colorado
      </h1>
      <div>
        {breweries.map(brewery => (
          <div key={brewery.id}>
            <h3>{brewery.name}</h3>
            <button type="button">
              <Link
                to={{
                  pathname: `brewery/${brewery.id}`,
                  state: {
                    breweryID: brewery.id,
                  },
                }}
              >
                                More details
                {' '}
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreweriesList;
