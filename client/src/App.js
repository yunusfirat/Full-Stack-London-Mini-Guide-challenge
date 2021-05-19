import "./App.css";
import React from "react";
function App() {
  const url = "http://localhost:5000/pharmacies";

  try{
       fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }



  return (
    <div className="App">
      ds
    </div>
  );
}

export default App;
