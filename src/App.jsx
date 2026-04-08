import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [reversed, setReversed] = useState("");

  const reverseText = () => {
    setReversed(text.split("").reverse().join(""));
  };

  return (
    <div className="container">
      <h1>| Simple Functionality |</h1>

      <div>
        <h2>Counter</h2>
        <p>Count: <span>{count}</span></p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div>
        <h2>Text Reversal</h2>
        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={reverseText}>Reverse</button>
        <div>{reversed}</div>
      </div>
    </div>
  );
}

export default App;