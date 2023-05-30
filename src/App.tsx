import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserHeader from "./components/UserHeader";
import RibbonHeader from "./parts/RibbonHeader";
import MainContent from "./components/MainContent";
function App() {
  return (
    <div className="App">
      <RibbonHeader />
      <UserHeader />
      <MainContent />
    </div>
  );
}

export default App;
