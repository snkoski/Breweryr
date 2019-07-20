import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import BreweriesList from './components/BreweriesList';
import BreweryDetails from './components/BreweryDetails';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={BreweriesList} />
      <Route path="/brewery/:id" component={BreweryDetails} />
    </div>
  );
}

export default App;
