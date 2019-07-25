import React from 'react';
import PropTypes from 'prop-types';

const BrewerDetails = ({ brewery }) => (
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
export default BrewerDetails;

BrewerDetails.propTypes = {
  brewery: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal_code: PropTypes.string,
  }).isRequired,
};
