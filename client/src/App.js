import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Dropdown from "./Components/Dropdown";
import Buttons from "./Components/Buttons";
function App() {
  return (
    <div className="App">
      <div className="container">
      <Header />
      <Dropdown />
      <Buttons />
      </div>
    </div>
  );
}

export default App;
