/*
  STRINGS
  A string is a sequence of characters - alphabets, symbols, emojies, and even numbers - wrapped within single or double qoutes.
  In fact, anything wrapped within qoutes - single or double is an string.
  Examples are names, emails, tokens, phone numbers, birthdays, colours, etc.
*/

var string = "`1234567890--=!@#$%^&*()_++QWERTYUIOPDFGHJKLZXCVBNM";
var name = "John";
var email = "chiemelie@gmail.com";

// console.log(typeof string, typeof name, typeof email);

var name = "";

// Even when there is nothing in between these quotes, it is still considered to be a string.
var emptyQuotes = "";

// console.log(typeof emptyQuotes);

/*
  STRING METHODS
  There are many in-built JavaScript methods with which we can manipulate strings.
*/

var laptop = "hpjhssbuixcuisd";

var characterLenght = laptop.length;

// console.log(characterLenght);

var upperCase = "A STRING WRITTEN IN UPPERCASE";

const upperToLower = upperCase.toLocaleLowerCase();

// console.log(upperToLower);

var lowerCase = "a string written in lowercase";

const lowerToUpper = lowerCase.toLocaleUpperCase();

// console.log(lowerToUpper);

var address = "Awka";

const hasLetterO = address.includes("p");

// console.log(hasLetterO);

var dept = "Computer Science";

var newDept = dept.substring(0, 2);

console.log(newDept);

/*
 For more string methods, study
 https://www.w3schools.com/js/js_string_methods.asp
*/
