// arithmetic.js

// Import readline module to take input from user
const readline = require("readline");

// Create input/output interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("=== Arithmetic Operations in Node.js ===");

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question(
      "Enter operation (+, -, *, /): ",
      (operation) => {
        let a = parseFloat(num1);
        let b = parseFloat(num2);
        let result;

        switch (operation) {
          case "+":
            result = a + b;
            break;
          case "-":
            result = a - b;
            break;
          case "*":
            result = a * b;
            break;
          case "/":
            result = b !== 0 ? a / b : "Cannot divide by zero!";
            break;
          default:
            result = "Invalid operation!";
        }

        console.log(`\nResult: ${result}`);
        rl.close();
      }
    );
  });
});