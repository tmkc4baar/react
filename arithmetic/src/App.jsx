import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleOperation = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers!");
      return;
    }

    let res = 0;
    switch (op) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "Cannot divide by zero!";
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h2>🧮 Arithmetic Operations using JSX</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ margin: "10px", padding: "8px" }}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ margin: "10px", padding: "8px" }}
      />
      <br />

      <button onClick={() => handleOperation("+")} style={{ margin: "5px" }}>+</button>
      <button onClick={() => handleOperation("-")} style={{ margin: "5px" }}>-</button>
      <button onClick={() => handleOperation("")} style={{ margin: "5px" }}></button>
      <button onClick={() => handleOperation("/")} style={{ margin: "5px" }}>/</button>

      <h3>Result: {result !== null ? <span style={{ color: "blue" }}>{result}</span> : "---"}</h3>
    </div>
  );
}

export default App;