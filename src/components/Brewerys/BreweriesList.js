// List of breweries and buttons to filter list for Home page
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import CityContext from '../../hooks/CityContext';

// Helper function to capitalize brewery types
const upperFirst = string => string.charAt(0).toUpperCase() + string.slice(1);
// Helper function to open Google search if brewery doesn't have a website in the database
const getGoogleURL = str => `https://www.google.com/search?q=${str.replace(new RegExp(' ', 'g'), '+')}`;
const BreweriesList = () => {
  const { city, breweries, types } = useContext(CityContext);
  const [filter, setFilter] = useState('all');

  // Check if selected city contains current filtered type, if not set filter to all
  useEffect(() => {
    const typeExists = types.filter(type => type === filter);
    if (!Array.isArray(typeExists) || !typeExists.length) {
      setFilter('all');
    }
  }, [types]);

  // Make the brewery type filter buttons
  const renderButton = (type, index) => (
    <button
      key={`btn-${index}`}
      style={{ display: 'inline' }}
      className={type === filter ? 'button selected' : 'button'}
      type="button"
      name="breweryType"
      id={`type-${index}`}
      onClick={() => setFilter(type)}
    >
      {type}
    </button>
  );

  // Create the list of breweries based on the current brewery type filter
  const List = () => {
    const breweriesList = (filter === 'all')
      ? breweries
      : breweries.filter(b => b.brewery_type === filter);
    return breweriesList.map(b => (
      <div key={b.id} className="brewery-card">
        <h2>{b.name}</h2>
        <h4>
          Type:
          {' '}
          {upperFirst(b.brewery_type)}
        </h4>
        <h4>
          {b.street}
          <br />
          {b.city}
,
          {' '}
          {b.state}
          {' '}
          {b.postal_code}
        </h4>
        {
          // Link to brewery website or to Google search
          b.website_url !== ''
            ? <h4><a target="_new" href={b.website_url}>Website</a></h4>
            : <h4><a target="_new" href={getGoogleURL(b.name)}>Find on Google</a></h4>
          }
        <button type="button">
          {/* Use the breweriy's id for route to details page */}
          <Link
            to={{
              pathname: `brewery/${b.id}`,

            }}
          >
          More details
            {' '}
          </Link>
        </button>
      </div>
    ));
  };

  return (
    <div className="brewery-list">
      <h1 className="brewery-list-city">
Breweries in
        {' '}
        {city}
      </h1>
      <hr />
      <div>
        <div className="button-container">
          {types.map(renderButton)}
        </div>
        <div>
          <List listFilter={filter} />
        </div>
      </div>
    </div>
  );
};

export default BreweriesList;
