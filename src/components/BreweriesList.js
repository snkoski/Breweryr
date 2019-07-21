import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import CityContext from '../hooks/CityContext';

const BreweriesList = () => {
  const { city, breweries } = useContext(CityContext);
  const [filter, setFilter] = useState(null);

  const List = () => {
    const breweriesList = (filter === null)
      ? breweries
      : breweries.filter(b => b.brewery_type === filter);
    return breweriesList.map(b => (
      <div key={b.id}>
        <h3>{b.name}</h3>
        <button type="button">
          <Link
            to={{
              pathname: `brewery/${b.id}`,
              state: {
                breweryID: b.id,
              },
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
    <div className="list">
      <h1>
Breweries in
        {' '}
        {city}
, Colorado
      </h1>
      <div>
        <button type="button" onClick={() => setFilter(null)}>All</button>
        <button type="button" onClick={() => setFilter('micro')}>Micro</button>
        <button type="button" onClick={() => setFilter('regional')}>Regional</button>
        <button type="button" onClick={() => setFilter('brewpub')}>Brewpub</button>
        <button type="button" onClick={() => setFilter('large')}>Large</button>
        <button type="button" onClick={() => setFilter('planning')}>Planning</button>
        <button type="button" onClick={() => setFilter('bar')}>Bar</button>
        <button type="button" onClick={() => setFilter('contract')}>Contract</button>
        <button type="button" onClick={() => setFilter('proprietor')}>Proprietor</button>
        <List listFilter={filter} />
      </div>
    </div>
  );
};

export default BreweriesList;
