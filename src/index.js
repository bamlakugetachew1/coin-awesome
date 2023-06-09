import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CoinProvider } from "./store/coinstore";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CoinProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CoinProvider>
);
