import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Galllery from "./components/Gallery";
import Events from "./components/Events";
import About from "./components/About";
import { Context } from "./components/context";

import "./App.css";

const App = () => {
  let globalContext = React.useContext(Context);
  function switchSections() {
    switch (globalContext.landingPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "events":
        return <Events />;
      case "gallery":
        return <Galllery />;
      default:
        return null; //replace with a 404 not found page later
    }
  }
  return (
    <div className="App">
      <Header />
      <div style={{ textAlign: "center" }}>{switchSections()}</div>
    </div>
  );
};

export default App;
