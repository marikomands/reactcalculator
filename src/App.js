import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  // const [displayValue, setDisplayValue] = useState(0);
  // console.log("🚀 ~ file: App.js ~ line 6 ~ displayValue", displayValue);
  // const [actualValue, setActualValue] = useState(0);
  // console.log("🚀 ~ file: App.js ~ line 7 ~ actualValue", actualValue);
  const [action, setAction] = useState(""); // 'plus' 'minus' 'times' 'divide'
  // console.log("🚀 ~ file: App.js ~ line 10 ~ action", action);
  // const [actionValue, setActionValue] = useState(0);
  // console.log("🚀 ~ file: App.js ~ line 10 ~ actionValue", actionValue);

  const handleAllClear = () => {
    setResult(0);
    // setDisplayValue(0);
    // setActualValue(0);
    // setActionValue(0);
    // setAction("");
  };

  const handleNumberClick = (value) => {
    // console.log("🚀 ~ file: App.js ~ line 22 ~ handleNumberClick", value);
    // console.log("🚀 ~ file: App.js ~ line 16 ~ action", action);
    setResult(Number(`${result}${value}`));　　//文字列に変換してから数字に変換
    // setResult(result + value.toString());

    // if (action) {
    //   setActionValue(value);
    // } else {
    //   setActualValue(value);
    // }

    // setDisplayValue(displayValue + value);
  };

  const handleCalculate = (value) => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
    }
  //   if (action === "add") {
  //     console.log("ADD");
  //     const newValue = actualValue + actionValue;
  //     setActualValue(newValue);
  //     setDisplayValue(newValue);
  //   } else {
  //     console.log("NO_ACTION");
  //   }

  //   setAction("");
  // };

  return (
    <div className="calc-app">
      <div className="inputContainer">
        <input type="text" value={result} />
        {/* <input type="text" value={displayValue} /> */}
      </div>
      <div className="container">
        <button className="button-light-gray" onClick={() => handleAllClear()}>
          AC
        </button>
        <button className="button-light-gray">+/-</button>
        <button className="button-light-gray">%</button>
        <button className="button-orange"> /</button>
        <button className="digits" onClick={() => handleNumberClick("7")}>
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
        <button className="button-orange">-</button>
        <button className="digits" onClick={() => handleNumberClick(1)}>
          1
        </button>
        <button className="digits" onClick={() => handleNumberClick(2)}>
          2
        </button>
        <button className="digits" onClick={() => handleNumberClick(3)}>
          3
        </button>
        <button className="button-orange" onClick={() => action("add")}>
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
