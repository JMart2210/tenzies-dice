import React from "react"

export default function Scoreboard(props) {
  // This sets a conditional style to let user know if they are already past their previous best score
  let styles = {};
  if (props.highScore > 0) {
    styles = {
      color: props.rolls > props.highScore ? "#db0000" : "black"
    }
  } 
  return (
    <div className="scoreBoard">
      <h1 className="rolls">Rolls:<span style={styles}> {props.rolls}</span></h1>
      <h1 className="high-score">Best Round: {props.highScore}</h1>
    </div>
  )
}