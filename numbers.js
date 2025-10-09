/*
  NUMBERS
  Numbers are numerical data types in JavaScript.
  Any value we want to use in a calculation should be stored as a number.
  Examples: age, price, height, scores, etc.
*/

// number declaration
var age = 33;

/*
 The Rules of Numbers
 1. Written without quotes (33 not "33"). If you do this JavaScript will traet it as string instead.
 2. Can be integers (whole numbers) or floats (decimal numbers).
 3. Used in mathematical operations (+, -, *, /, %).
 4. Stored using the Number type in JavaScript.
 5. Numbers can be positive, negative, or zero.
*/

// SPECIAL VALUES
console.log(Number.MAX_VALUE); // largest number possible
console.log(Number.MIN_VALUE); // smallest number greater than 0
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NaN); // Not a Number

/*
  NUMBER METHODS
  JavaScript has built-in methods to work with numbers.
*/

var amount = 9.656;

// toFixed() → returns a string, with the number written with a specified number of decimals
// console.log(amount.toFixed(2));

// toPrecision() → returns a number with a specified length
// console.log(amount.toPrecision(4));

// toString() → converts number to string
// console.log(age.toString());

// isInteger() → checks if a number is an integer
// console.log(Number.isInteger(age));
// console.log(Number.isInteger(amount));
