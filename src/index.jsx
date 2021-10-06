import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "./components/context";

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
