import React from "react";
import { useState } from "react";
import "../styles/pizzacount.css";
export default function App() {
  const [num, setNum] = useState(0);
  console.log(num);
  function decrease(num) {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  function increase(num) {
    setNum(num + 1);
  }

  return (
    <div className="pizzacount">
      <button onClick={() => decrease(num)} className="pizzacountnum">
        -
      </button>
      <span className="count">{num}</span>
      <button onClick={() => increase(num)} className="pizzacountnum">
        +
      </button>
    </div>
  );
}
