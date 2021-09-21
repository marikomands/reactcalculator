import React, { useState } from "react";
import "./App.css";

function App() {
  console.log("%%%%%% STATE %%%%%%%");
  const [memoryNumber, setMemoryNumber] = useState(0);
  console.log("🚀 ~ file: App.js ~ line 6 ~ memoryNumber", memoryNumber);
  const [displayNumber, setDisplayNumber] = useState(0);
  console.log("🚀 ~ file: App.js ~ line 8 ~ displayNumber", displayNumber);
  const [actionNumber, setActionNumber] = useState(0);
  console.log("🚀 ~ file: App.js ~ line 10 ~ actionNumber", actionNumber);
  const [action, setAction] = useState("add"); // 'plus' 'minus' 'times' 'divide'
  console.log("🚀 ~ file: App.js ~ line 12 ~ action", action);
  console.log("%%%%%% STATE %%%%%%%");

  const handleAllClear = () => {
    setMemoryNumber(0);
    setDisplayNumber(0);
    setActionNumber(0);
    setAction("");
  };

  const handleNumberClick = (number) => {
    console.log("🚀 ~ file: App.js ~ line 31 ~ handleNumberClick", number);

    const newNumber = Number(`${actionNumber}${number}`);
    setActionNumber(newNumber);
    setDisplayNumber(newNumber);
  };

  const handleActionClick = (action) => {
    console.log("🚀 ~ handleActionClick ~ handleActionClick", action);
    if (actionNumber) {
      handleCalculate();
    }
    setAction(action);
  };

  const handleCalculate = () => {
    console.log("🚀 ~ handleCalculate ~ handleCalculate", action);
    if (action === "add") {
      const newValue = memoryNumber + actionNumber;
      setDisplayNumber(newValue);
      setMemoryNumber(newValue);
      setActionNumber(0);
    } else if (action === "minus") {
      const newValue = memoryNumber - actionNumber;
      setDisplayNumber(newValue);
      setMemoryNumber(newValue);
      setActionNumber(0);
    } else {
      console.log("NO_ACTION");
    }
  };

  return (
    <div className="calc-app">
      <div className="inputContainer">
        <input type="text" value={displayNumber} />
      </div>
      <div className="container">
        <button className="button-light-gray" onClick={() => handleAllClear()}>
          AC
        </button>
        <button className="button-light-gray">+/-</button>
        <button className="button-light-gray">%</button>
        <button className="button-orange"> /</button>
        <button className="digits" onClick={() => handleNumberClick(7)}>
          7
        </button>
        <button className="digits" onClick={() => handleNumberClick(8)}>
          8
        </button>
        <button className="digits" onClick={() => handleNumberClick(9)}>
          9
        </button>
        <button className="button-orange">×</button>
        <button className="digits" onClick={() => handleNumberClick(4)}>
          4
        </button>
        <button className="digits" onClick={() => handleNumberClick(5)}>
          5
        </button>
        <button className="digits" onClick={() => handleNumberClick(6)}>
          6
        </button>
        <button
          className="button-orange"
          onClick={() => handleActionClick("minus")}
        >
          -
        </button>
        <button className="digits" onClick={() => handleNumberClick(1)}>
          1
        </button>
        <button className="digits" onClick={() => handleNumberClick(2)}>
          2
        </button>
        <button className="digits" onClick={() => handleNumberClick(3)}>
          3
        </button>
        <button
          className="button-orange"
          onClick={() => handleActionClick("add")}
        >
          +
        </button>
        <button className="zero">0</button>
        <button className="dot">.</button>
        <button
          className="button-orange equal"
          onClick={() => handleCalculate()}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
