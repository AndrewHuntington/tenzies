import React from "react";
import Die from "./Die";
import "./App.css";

function App() {
  return (
    <main className="bg-[#f5f5f5] w-[320px] h-[320px] mx-auto rounded-md flex justify-center items-center mt-10">
      <div className="grid grid-cols-5 gap-4">
        <Die value={1} />
        <Die value={2} />
        <Die value={5} />
        <Die value={4} />
        <Die value={1} />
        <Die value={3} />
        <Die value={6} />
        <Die value={3} />
        <Die value={2} />
        <Die value={1} />
      </div>
    </main>
  );
}

export default App;
