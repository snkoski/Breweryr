import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Header from './components/Header';
import Error404 from './components/Error404';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/brewery/:id" component={Details} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
