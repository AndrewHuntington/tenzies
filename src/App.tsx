import React, { useState } from "react";
import Die from "./Die";
import "./App.css";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    let diceArray = new Array(10).fill(1);
    return diceArray.map((die) => die * Math.floor(Math.random() * 6) + 1);
  }

  return (
    <main className="bg-[#f5f5f5] w-[320px] h-[320px] mx-auto rounded-md flex justify-center items-center mt-10">
      <div className="grid grid-cols-5 gap-4">
        {dice.map((die, index) => (
          <Die value={die} key={index} />
        ))}
      </div>
    </main>
  );
}

export default App;
