import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NightModeProvider from "./context/NightModeProvider";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <NightModeProvider>
      <App />
    </NightModeProvider>
  </React.StrictMode>,
  rootElement
);
