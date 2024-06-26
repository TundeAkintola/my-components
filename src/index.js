import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/navigation";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <div>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </div>
);
