import React, { useState } from "react";
import Die from "./Die";
import "./App.css";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    let diceArray = new Array(10).fill({ isHeld: false });
    return diceArray.map((die, index) => ({
      ...die,
      value: Math.ceil(Math.random() * 6),
      id: index,
    }));
  }

  function holdDie(id: number) {
    let newDice = dice.map((die) => {
      if (die.id === id) {
        return { ...die, isHeld: !die.isHeld };
      } else {
        return die;
      }
    });
    setDice(newDice);
  }

  function rollDice() {
    let newDice = dice.map((die) => {
      if (die.isHeld) {
        return die;
      } else {
        return { ...die, value: Math.ceil(Math.random() * 6) };
      }
    });
    setDice(newDice);
  }

  return (
    <main className="bg-[#f5f5f5] w-[320px] h-[320px] mx-auto rounded-md flex justify-center items-center mt-10 flex-col">
      <h1 className="font-bold text-2xl tracking-tight">Tenzies</h1>
      <p className="text-sm tracking-tight text-center mb-5 w-57">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid grid-cols-5 gap-4">
        {dice.map((die, index) => (
          <Die
            value={die.value}
            isHeld={die.isHeld}
            key={index}
            holdDie={holdDie}
            id={die.id}
          />
        ))}
      </div>
      <button
        onClick={rollDice}
        className="bg-[#5035ff] text-white w-24 h-9 rounded shadow-md mt-6 font-bold active:shadow-inner"
      >
        Roll
      </button>
    </main>
  );
}

export default App;
