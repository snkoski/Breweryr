import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import BreweryDetails from './components/Brewerys/BreweryDetails';
import './App.css';


function App() {
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
export default App;
