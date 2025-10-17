/*
  OPERATORS IN JAVASCRIPT
  Operators are symbols used to perform operations on values and variables.
*/

/*
  1. ARITHMETIC OPERATORS
  Used for mathematical calculations.
*/
let a = 10,
	b = 3;

// console.log("Addition: ", a + b); // Addition
// console.log("Subtraction: ", a - b); // Subtraction
// console.log("Multiplication: ", a * b); // Multiplication
// console.log("Division: ", a / b); // Division
// console.log("Modulus (remainder): ", a % b); // Modulus
// console.log("Exponentiation: ", a ** b); // Exponentiation

// /*
//   2. ASSIGNMENT OPERATORS
//   Used to assign values to variables.
// */
let x = 5;

// console.log("x += 3 →", (x += 3)); // x = x + 3
// console.log("x -= 2 →", (x -= 2)); // x = x - 2
// console.log("x *= 4 →", (x *= 4)); // x = x * 4
// console.log("x /= 6 →", (x /= 6)); // x = x / 6
// console.log("x %= 3 →", (x %= 3)); // x = x % 3
// console.log("x **= 2 →", (x **= 2)); // x = x ** 2

// /*
//   3. COMPARISON OPERATORS
//   Always return true or false.
// */
// console.log(5 == "5"); // loose equal
// console.log(5 === "5"); // strict equal

// console.log(5 != '5')
// console.log(5 !== "5");

// console.log("!= :", 5 != "5"); // loose not equal
// console.log("!== :", 5 !== "5"); // strict not equal
// console.log("> :", 7 > 5);
// console.log("< :", 7 < 5);
// console.log(">= :", 7 >= 3);
// console.log("<= :", 7 <= 8);

// /*
//   4. LOGICAL OPERATORS
//   Combine conditions.
// */
let p = false,
	q = false;

// console.log("AND (&&):", p && q);
// console.log("OR (||):", p || q);
// console.log("NOT (!):", !p);

// /*
//   5. STRING OPERATOR
//   The + operator joins strings.
// */
// let first = "Hello",
//   second = "World";
// console.log("String concatenation:", first + " " + second);

// /*
//   7. TERNARY (CONDITIONAL) OPERATOR
//   Shorthand for if...else.
// */
// let age = 21;
// console.log("Ternary:", age >= 18 ? "Adult" : "Minor");

// /*
//   8. TYPE OPERATORS
//   Used to check or work with types.
// */
// console.log("typeof 'Hello':", typeof "Hello");
// console.log("typeof 42:", typeof 42);
// console.log("typeof true:", typeof true);

// let arr = [1, 2, 3];
// console.log("arr instanceof Array:", arr instanceof Array);

// /*
//   9. NULLISH COALESCING (??)
//   Provides a default value if null or undefined.
// */
// let user;
// console.log("user ?? 'Guest':", user ?? "Guest");

// /*
//   10. OPTIONAL CHAINING (?.)
//   Avoids errors when accessing nested properties.
// */
let person = { name: "Ada", address: { city: "Lagos" } };
// console.log("person.address?.city:", person.address?.city);
// console.log("person.contact?.phone:", person.contact?.phone);

// /*
//   11. SPREAD / REST OPERATORS
//   Spread → expands. Rest → collects.
// */
let numbers = [1, 2, 3];

let completeNumbers = [...numbers, 4, 5];

console.log(completeNumbers);

// console.log("Spread:", [...numbers, 4, 5]);

// function sum(...args) {
//   return args.reduce((a, b) => a + b, 0);
// }
// console.log("Rest:", sum(1, 2, 3, 4));

// /*
//   12. COMMA OPERATOR
//   Executes multiple expressions, returns the last.
// */
let val = (2 + 4, 3 + 7, 4 + 6);
console.log("Comma operator:", val);
