import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Routes,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import "../scss/App.scss";
import "../scss/reset.scss";
import WelcomeUser from "./WelcomeUser";
import MainContent from "./MainContent";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <WelcomeUser />
      <MainContent />
    </div>
  );
}

export default App;
