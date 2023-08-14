import React from 'react'
import Die from './component/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


export default function App() {
    const [diceNumber, setDiceNumber] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

   
    React.useEffect(() => {
        const allHeld = diceNumber.every(die => die.isHeld)
        const firstValue = diceNumber[0].value
        const allSameValue = diceNumber.every(die => die.value === firstValue)

        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [diceNumber])

    
    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

    function rollDice() {
        if (!tenzies) {
            setDiceNumber(oldDice => oldDice.map(die => {
                return die.isHeld ?
                    die :
                    generateNewDie()
            }))
        } else {
            setTenzies(false)
            setDiceNumber(allNewDice())
        }
    }

    function holdDice(id) {
        setDiceNumber(oldDice => oldDice.map(die => {
            
            return die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die

            }))
    }
 

    const diceElement = diceNumber.map(die => (

        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={()=> holdDice(die.id)}
        />

    ))

  return (      
      <main className="container">
          {tenzies && <Confetti />}
          <h1 className="title">Tenzies</h1>
          <p className="instructions">
              Roll until all dice are the same.
              Click each die to freeze it at its
              current value between rolls.
          </p>
          <div className="die--container">
                  { diceElement}
          </div>
          <button className="roll--button" onClick={rollDice}>
              {tenzies ? "New Game" : "Roll"}
          </button>
          </main>
  );
}

