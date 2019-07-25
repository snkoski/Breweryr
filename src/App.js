import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
// import BreweryDetails from './components/Brewerys/BreweryDetails';
import Details from './components/Details';
import Header from './components/Header';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/brewery/:id" component={BreweryDetails} /> */}
          <Route path="/brewery/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
