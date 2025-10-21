import React from "react";
import ReactDOM from "react-dom";
import "./i18n/i18n";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./theme/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);