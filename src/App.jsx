import { useState, useEffect } from 'react'
import Die from "./Die"
import Scoreboard from "./Scoreboard"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

function App() {
  const highScore = () => Number(window.localStorage.getItem("highScore")) || 0;

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [rolls, setRolls] = useState(1)
  const [score, setScore] = useState(highScore())

  // This is checking to see if the user has won "tenzies" (all dice are the same)
  useEffect(() => {
      const allHeld = dice.every(die => die.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(die => die.value === firstValue)
      if (allHeld && allSameValue) {
        score === 0 ? setScore(rolls) : setScore(Math.min(rolls, score));
        console.log(score);
        window.localStorage.setItem("highScore", score);
        setTenzies(true);
      }
  }, [dice])

  function generateNewDie() {
      return {
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
      }
  }
  
  function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push(generateNewDie())
      }
      return newDice
  }
  
  function rollDice() {
      if(!tenzies) {
        setRolls(roll => roll + 1);
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
      }))
      } else {
          setTenzies(false)
          setRolls(1)
          setDice(allNewDice())
      }
  }
  
  function holdDice(id) {
      setDice(oldDice => oldDice.map(die => {
          return die.id === id ? 
              {...die, isHeld: !die.isHeld} :
              die
      }))
  }
  
  const diceElements = dice.map(die => (
      <Die 
          key={die.id} 
          value={die.value} 
          isHeld={die.isHeld} 
          holdDice={() => holdDice(die.id)}
      />
  ))
  
  return (
    <>
      <main>
          {tenzies && <Confetti numberOfPieces='400' recycle={rolls === score? true : false} />}
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll the dice until you get all 10 dice showing the same number. Click the die to hold onto it. See if you can beat your high score!</p>
          <div className="dice-container">
              {diceElements}
          </div>
          <button 
              className="roll-dice" 
              onClick={rollDice}
          >
              {tenzies ? "New Game" : "Roll"}
          </button>
        <Scoreboard rolls={rolls} highScore={score} />
      </main>
    </>
  )
}

export default App
