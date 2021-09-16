import React from "react";

export const Context = React.createContext();

export const Provider = ({ children }) => {
  const [landingPage, setLandingPage] = React.useState("home");
  let states = {
    landingPage,
    setLandingPage,
  };

  return <Context.Provider value={states}>{children}</Context.Provider>;
};

export const Consumer = Context.Consumer;
