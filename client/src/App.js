import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Dropdown from "./Components/Dropdown";
import Buttons from "./Components/Buttons";
import Table from "./Components/Table";
function App() {
  return (
    <div className="App">
      <div className="container">
      <Header />
      <Dropdown />
      <Buttons />
      <Table />
      </div>
    </div>
  );
}

export default App;
