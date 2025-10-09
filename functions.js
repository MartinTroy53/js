/*
  FUNCTIONS
  A function is a block of instructions that performs a specific task.
  Example: the function below takes in a person's name and says Hello👋🏾 to them.
*/

// FUNCTION DECLARATION AND INVOCATION

/*
  In JavaScript, writing a function has two parts:
  1. Declaration: where we define the function body and its parameters.
  2. Invocation: where we call the function and pass in arguments.
*/

// function declaration
function sayHi(name) {
  return `Hi👋🏾, ${name}`;
}

// function invocation
console.log(sayHi());

/*
  The Anatomy of a Function
  1. The `function` keyword:
     Tells JavaScript that what follows is a function.

  2. The function name (optional):
     Used to call the function later. Functions can be anonymous if used as values.
     In the example above, the name is `sayHi`.

  3. Parameters:
     Variables inside the parentheses () after the function name.
     They act as placeholders for the values the function will receive.

  4. Function block:
     The code inside curly braces {}.
     This is where the actual logic lives.
     Often we use `return` to send back a result.

  5. Calling the function:
     We execute a function by writing its name followed by ().
     Inside () we pass values for the parameters — these are called arguments.
*/

// FUNCTION EXPRESSION
var multiplyNumbers = function (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

console.log(multiplyNumbers(6, 5));

// ES6 ARROW FUNCTION (simpler syntax)
var addNumbers = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

console.log(addNumbers(34, 19));