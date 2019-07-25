import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import BreweryPin from './Pins/BreweryPin';

const token = 'pk.eyJ1Ijoid3Rmc21va2UiLCJhIjoiY2p5OTliam9lMDFzZzNjbzR1dGE4dmp2cSJ9.Zj-93J_-slJrJcuYoblyAA';

const MapSingle = ({ brewery }) => {
  const [viewport, setViewport] = useState(null);

  useEffect(() => {
    let parsedBrewery = {};
    if (brewery.latitude) {
      parsedBrewery = {
        width: 400,
        height: 400,
        latitude: parseFloat(brewery.latitude),
        longitude: parseFloat(brewery.longitude),
        zoom: 15,
      };
    }

    setViewport(parsedBrewery);
  }, [brewery]);

  const Mark = () => {
    if (brewery.latitude) {
      return (<Marker key={`marker-${brewery.id}`} longitude={parseFloat(brewery.longitude)} latitude={parseFloat(brewery.latitude)}><BreweryPin size={20} onClick={() => console.log('pin')} /></Marker>);
    }
    return null;
  };

  return (
    <div className="mapapp" style={{ height: '100%' }}>
      <div className="map">
        <ReactMapGL
          {...viewport}
          height="100%"
          width="100%"
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={token}
        >
          <Mark />
        </ReactMapGL>

      </div>
    </div>
  );
};

export default MapSingle;

MapSingle.propTypes = {
  brewery: PropTypes.shape({
    id: PropTypes.string.isRequired,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
  }).isRequired,
};
