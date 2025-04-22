import New from "./new";
import "./App.css";

import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 0;

  const increment = () => {
    setCounter(counter + 1);
    // console.log(counter);
  };
  const decrement = () => {
    setCounter(counter - 1);
    // console.log(counter);
  };

  const reset = () => {
    setCounter(0);
    // console.log(counter);
  };
  return (
    <>
      <h1>Nitin Singh | React With Vite</h1>
      <div className="counter-container">
        <h2 className="counter-value">Counter value {counter}</h2>

        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={increment} className="Bot">Increment</button>
        <br />
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={decrement} className="Bot">Decrement</button>
        <br />
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={reset} className="reset-btn p-1 rounded-md cursor-pointer">
          Reset
        </button>
        <br />
      </div>

      <div className="mb-4">
        <New />
      </div>
      <div>
        <Card />
      </div>
    </>
  );
}

export default App;
