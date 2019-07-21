import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BreweriesList = ({ match, location }) => {
  const [brewery, setBrewery] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.openbrewerydb.org/breweries/${location.state.breweryID}`);
      setBrewery(result.data);
    };
    fetchData();
  }, [location.state.breweryID]);

  return (
    <div>
      <h1>{brewery.name}</h1>
      <h3>
        {brewery.street}
        <br />
        {brewery.city}
,
        {' '}
        {brewery.state}
        {' '}
        {brewery.postal_code}
      </h3>
    </div>
  );
};

export default BreweriesList;
