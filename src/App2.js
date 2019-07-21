import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Map from './components/Map';
import SearchableMap from './components/SearchableMap';
import MapApp from './MapApp';
import Home from './components/Home';
import BreweryDetails from './components/BreweryDetails';


function App2() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/brewery/:id" component={BreweryDetails} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App2;
