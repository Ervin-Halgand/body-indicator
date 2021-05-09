import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from './view/Home/Home'
import Imc from './view/Imc/Imc'
import Metabolisme from './view/Metabolisme/Metabolisme'
import FFMI from './view/FFMI/Ffmi';

function App() {
  return (
    <div className="app">
      <Router >
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/imc">
            <Imc />
          </Route>
          <Route path="/metabolisme">
            <Metabolisme />
          </Route>
          <Route path="/ffmi">
            <FFMI />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
