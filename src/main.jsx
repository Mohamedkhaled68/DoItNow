import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthProvider from "./contexts/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Loader } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Loader />
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
