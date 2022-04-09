import React from "react";
import "../scss/App.scss";
import "../scss/reset.scss";
import WelcomeUser from "./WelcomeUser";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="App">
      <WelcomeUser />
      <MainContent />
    </div>
  );
}

export default App;
