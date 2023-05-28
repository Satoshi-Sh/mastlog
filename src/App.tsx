import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserHeader from "./components/UserHeader";
import DailyBoard from "./components/DailyBoard";

function App() {
  return (
    <div className="App">
      <h1>Mastlog</h1>
      <UserHeader />
      <DailyBoard />
    </div>
  );
}

export default App;
