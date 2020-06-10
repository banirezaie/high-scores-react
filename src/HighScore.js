import React from "react";

const HighScore = (props) => {
  return (
    <div className="parentDiv">
      <h1 className="h1">High Score per Country</h1>
      {props.scores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((x, index) => (
          <div key={index} className="oneCountry">
            <p className="countryName">High Scores:{x.name}</p>
            <div className="allNamesScores">
              {x.scores
                .sort((a, b) => (a.s > b.s ? -1 : 1))
                .map((x, index) => (
                  <div key={index} className="name-score">
                    {x.n} <div className="numbers">{x.s}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default HighScore;
