import React from 'react';

import CITIES from './data/cities.json';

const ControlPanel = ({ onViewportChange }) => {
  const renderButton = (city, index) => (
    <div key={`btn-${index}`} className="input">
      <input
        type="radio"
        name="city"
        id={`city-${index}`}
        defaultChecked={city.city === 'Boulder'}
        onClick={() => onViewportChange(city)}
      />
      <label htmlFor={`city-${index}`}>{city.city}</label>
    </div>
  );

  return (
    <div className="control-panel">
      <h3>Pick a city to see their breweries</h3>
      <hr />
      {CITIES.filter(city => city.state === 'Colorado').map(renderButton)}
    </div>
  );
};

export default ControlPanel;
