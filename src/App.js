import "./App.css";

function App() {
  return (
    <div className="calc-app">
      <form>
        <input type="text" />
      </form>
      <div classname="keypad">
        <div className="container">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button> /</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>×</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button id="zero">0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
