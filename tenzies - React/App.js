import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {
/**
 * Challenge: Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 * 
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state
 */

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(()=>{
        const allHeld = dice.every(die => die.isHeld===true)
        const allSame = dice.every(die => die.value===dice[0].value)
        if(allHeld&&allSame){
            setTenzies(true)
            console.log("you win")
        }
    },[dice])
    
    function generateNewDie () {
        return {
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            }
    }
    
    function newGame(){
        setDice(allNewDice())
        setTenzies(false)
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie ())
        }
      
        return newDice
    }
    
    function rollDice() {
        setDice(dice=>dice.map(die => {
            return die.isHeld ? die : generateNewDie ()
        }))
    }
    
    function holdDice(id) {
        setDice(dice=>dice.map(die=>{
            return die.id===id ? {...die, isHeld: !die.isHeld} : die
        }))
    }
    
    const diceElements = dice.map(die => <Die 
                                            key={die.id} 
                                            value={die.value} 
                                            isHeld={die.isHeld} 
                                            holdDice={()=>{holdDice(die.id)}}
                                            />)
    
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            {tenzies  
                ? <button className="roll-dice" onClick={newGame}>You Win</button>
                : <button className="roll-dice" onClick={rollDice}>Roll</button>
                }
        </main>
    )
}