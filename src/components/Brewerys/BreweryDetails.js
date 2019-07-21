import React from 'react';

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
