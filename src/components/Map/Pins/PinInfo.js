import React from 'react';
import PropTypes from 'prop-types';
import '../../../App.css';

const PinInfo = ({ info }) => (
  <div className="popup">
    <div>
      {info.name}
      <br />
      {info.brewery_type}

      {info.website_url !== '' ? (
        <>
          <span>
            {' '}
            {' '}
|
            {' '}
            {' '}
          </span>
          <a
            target="_new"
            rel="noopener noreferrer"
            href={info.website_url}
          >
            Web site
          </a>

        </>
      ) : null}
    </div>
  </div>
);
export default PinInfo;

PinInfo.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brewery_type: PropTypes.string,
    website_url: PropTypes.string,
  }).isRequired,
};
