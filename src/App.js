import "./App.css";

function App() {
  return (
    <div className="calc-app">
      <div className="inputContainer">
        <input type="text" value="0" />
      </div>
      <div className="container">
        <button className="button-light-gray">AC</button>
        <button className="button-light-gray">+/-</button>
        <button className="button-light-gray">%</button>
        <button className="button-orange"> /</button>
        <button className="digits">7</button>
        <button className="digits">8</button>
        <button className="digits">9</button>
        <button className="button-orange">×</button>
        <button className="digits">4</button>
        <button className="digits">5</button>
        <button className="digits">6</button>
        <button className="button-orange">-</button>
        <button className="digits">1</button>
        <button className="digits">2</button>
        <button className="digits">3</button>
        <button className="button-orange">+</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
        <button className="button-orange equal">=</button>
      </div>
    </div>
  );
}

export default App;
