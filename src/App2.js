import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Map from './components/Map';
import SearchableMap from './components/SearchableMap';
import MapApp from './MapApp';
import Home from './components/Home';


function App2() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchableMap} />
          <Route exact path="/map" component={MapApp} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App2;
