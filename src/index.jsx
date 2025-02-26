import React from "react";
import ReactDOM from "react-dom";
import "./index.css";  // If you have a CSS file, include it
import App from "./App";  // Your main App component

// Renders the App component inside the root div of index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
