import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BreweryDetails from './Brewerys/BreweryDetails';
import MapSingle from './Map/MapSingle';
import '../App.css';

const Details = ({ location }) => {
  const [brewery, setBrewery] = useState({});
  const breweryId = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://3.218.162.55/breweries/${breweryId}`);
      setBrewery(result.data.brewery);
    };
    fetchData();
  }, [location]);

  return (
    <div className="details-container">
      <BreweryDetails brewery={brewery} />
      <MapSingle brewery={brewery} />
      <div>
        <h1>
          <Link to="/">
          Go Back
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Details;

Details.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.shape({
      breweryID: PropTypes.number,
    }),
  }).isRequired,
};
