import React from "react";
import "./App.css";
import allCountryScores from "./Scores";
import HighScore from "./HighScore";

function App() {
  return (
    <div className="App">
      <HighScore scores={allCountryScores}/>
    </div>
  );
}

export default App;
