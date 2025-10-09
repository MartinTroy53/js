/*
  ARRAYS
  An array is an ordered collection of values stored in a single variable.
  Example: the below array stores a list of fruits.
*/

// ARRAY DECLARATION AND USAGE

/*
  In JavaScript, creating an array involves two parts:
  - Declaration: where we define the array with its elements inside square brackets [].
  - Access/Usage: where we read, update, or loop through the values.
*/

// array declaration
var fruits = ["apple", "banana", "mango", "orange"];

/*
 The Anatomy of an Array
 1. Square brackets []: Marks the start and end of the array.
 2. Elements: The values inside the array (e.g., "apple", "banana").
 3. Index: Each element has a number position starting from 0.
 4. Accessing: Use the index in brackets to read or update values (fruits[0]).
 5. Length: Arrays have a .length property that tells how many elements they contain.
*/

// ACCESSING ARRAY VALUES

// console.log(fruits[0]);
// console.log(fruits[2]);

// updating a value
// fruits[1] = "grape";
// console.log(fruits);

// getting the length -  that is number of items in the array
// console.log(fruits.length);

// adding a new value at the end of the array
// fruits.push("pineapple");
// console.log(fruits);

// removing the last value
// fruits.pop();
// console.log(fruits);

// adding a new value at the beginning of the array
// fruits.unshift("pears");
// console.log(fruits);

// removing the first value
// fruits.shift();
// console.log(fruits);

// run a function that maniplulates ech item in the array
fruits.forEach(function (value, index, array) {
  // console.log(`${index}: ${value} - ${array}`);
});

const myFruits = fruits.map(function (fruit, index, array) {
  return `${index} : Sweet ${fruit}`;
});

// console.log(myFruits);

const sweetFruits = fruits.filter(function (fruit, index) {
  return fruit.includes("e") ? fruit : "";
});

// console.log(sweetFruits);

const numbers = [6, 5, 3, 3, 3, 3, 5, 5, 6];

const sum = numbers.reduce(
  (previousValue, currentValue) => {
    return previousValue + currentValue;
  }
);

// console.log(sum);

let fruits = ["apple", "orange", "apple", "banana", "orange", "apple"];

let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

// console.log(count);