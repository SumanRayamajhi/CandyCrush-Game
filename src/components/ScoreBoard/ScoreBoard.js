import React from "react";
import "./ScoreBoard.css";

function ScoreBoard({ score }) {
  return <div className="ScoreBoard_Main"> Total Scores : {score}</div>;
}

export default ScoreBoard;
