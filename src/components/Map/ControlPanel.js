import React from 'react';
import PropTypes from 'prop-types';

const ControlPanel = ({ onViewportChange, cities }) => {
  const renderButton = (city, index) => (
    <div key={`btn-${index}`} className="input">
      <input
        type="radio"
        name="city"
        id={`city-${index}`}
        defaultChecked={city.name === 'Boulder'}
        onClick={() => onViewportChange(city)}
      />
      <label htmlFor={`city-${index}`}>{city.name}</label>
    </div>
  );

  return (
    <div className="control-panel">
      <h3 className="title">Pick a city to see their breweries</h3>
      {cities.map(renderButton)}
    </div>
  );
};

export default ControlPanel;

ControlPanel.propTypes = {
  onViewportChange: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
