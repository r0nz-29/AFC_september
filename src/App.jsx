import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
