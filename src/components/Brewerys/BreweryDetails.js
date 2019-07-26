// Details page for individual brewery
import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const BrewerDetails = ({ brewery }) => (

  <div className="details-container">
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
    {
      brewery.website_url !== ''
        ? <h4><a target="_new" href={brewery.website_url}>Vist our website</a></h4>
        : null
    }
  </div>
);
export default BrewerDetails;

BrewerDetails.propTypes = {
  brewery: PropTypes.shape({
    name: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal_code: PropTypes.string,
    website_url: PropTypes.string,
  }).isRequired,
};
