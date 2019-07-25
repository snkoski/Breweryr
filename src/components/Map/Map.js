import React, { useState, useContext } from 'react';
import ReactMapGL, { FlyToInterpolator, Marker, Popup } from 'react-map-gl';
import ControlPanel from './ControlPanel';
import BreweryPin from './Pins/BreweryPin';
import PinInfo from './Pins/PinInfo';
import CityContext from '../../hooks/CityContext';
import '../../App.css';

const token = 'pk.eyJ1Ijoid3Rmc21va2UiLCJhIjoiY2p5OTliam9lMDFzZzNjbzR1dGE4dmp2cSJ9.Zj-93J_-slJrJcuYoblyAA';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 40.0150,
    longitude: -105.2705,
    zoom: 10,
  });
  const [popup, setPopup] = useState(null);
  const { setCity, breweries } = useContext(CityContext);

  const changeViewPort = ({ longitude, latitude, city }) => {
    const newViewport = {
      city,
      longitude,
      latitude,
      zoom: 10,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 2000,
    };
    setViewport(currentState => ({ ...currentState, ...newViewport }));
    setCity(city);
  };

  const renderBreweryMarker = (brewery, index) => (
    <Marker key={`marker-${index}`} longitude={parseFloat(brewery.longitude)} latitude={parseFloat(brewery.latitude)}><BreweryPin size={10} onClick={() => setPopup({ ...brewery })} /></Marker>
  );

  const renderPopup = () => (
    popup && (

      <Popup
        tipSize={5}
        // anchor="bottom"
        longitude={parseFloat(popup.longitude)}
        latitude={parseFloat(popup.latitude)}
        closeButton={false}
        // closeOnClick={true}
        onClose={() => setPopup(null)}
        className="popup"
      >
        <PinInfo info={popup} />
      </Popup>
    ));
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
        >
          {breweries.filter(b => b.longitude !== null && b.latitude !== null)
            .map((brewery, index) => renderBreweryMarker(brewery, index))}
          {renderPopup()}
        </ReactMapGL>

      </div>
      <div>
        <ControlPanel
          onViewportChange={changeViewPort}
        />
      </div>
    </div>
  );
};

export default Map;
