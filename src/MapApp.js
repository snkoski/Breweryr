import React, { useState, useEffect, useContext } from 'react';
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl';
import ControlPanel from './control-panel';
import CityContext from './hooks/CityContext';
import './App.css';

const token = 'pk.eyJ1Ijoid3Rmc21va2UiLCJhIjoiY2p5OTliam9lMDFzZzNjbzR1dGE4dmp2cSJ9.Zj-93J_-slJrJcuYoblyAA';

const MapApp = () => {
  const [viewport, setViewport] = useState(null);
  const { value, setValue } = useContext(CityContext);

  useEffect(() => {
    setViewport({
      width: 400,
      height: 400,
      latitude: 39.7618,
      longitude: -104.8806,
      zoom: 8,
    });
  }, []);

  const onViewportChange = (newViewport) => {
    console.log(newViewport);
    setViewport(currentState => ({ ...currentState, ...newViewport }));
    setValue(newViewport.city);
  };

  const goToViewport = ({ longitude, latitude, city }) => {
    onViewportChange({
      city,
      longitude,
      latitude,
      zoom: 8,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 2000,
    });
  };
  return (
    <div className="mapapp" style={{ height: '100%' }}>
      <div className="map">
        <ReactMapGL
          {...viewport}
          height="100%"
          width="100%"
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onViewportChange={change => setViewport(currentState => ({ ...currentState, ...change }))}
          mapboxApiAccessToken={token}

        />
      </div>
      <div>
        <ControlPanel
        // containerComponent={this.props.containerComponent}
          onViewportChange={goToViewport}
        />
      </div>
    </div>
  );
};

export default MapApp;
