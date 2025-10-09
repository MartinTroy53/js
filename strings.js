/*
  STRINGS
  A string is a sequence of characters - alphabets, symbols, emojies, and even numbers - wrapped within single or double qoutes.
  In fact, anything wrapped within qoutes - single or double is an string.
  Examples are names, emails, tokens, phone numbers, birthdays, colours, etc.
*/

var string = "`1234567890--=!@#$%^&*()_++QWERTYUIOPDFGHJKLZXCVBNM";
var name = "Odinaka";
var email = "chiemelie@gmail.com";

// console.log(typeof string, typeof name, typeof email);

// Even when there is nothing in between these quotes, it is still considered to be a string.
var emptyQuotes = "";

// console.log(typeof emptyQuotes);

/*
  STRING METHODS
  There are many in-built JavaScript methods with which we can manipulate strings.
*/

var laptop = "hp";

var numberofCharacters = laptop.length;

// console.log(numberofCharacters);

var upperCase = "A STRING WRITTEN IN UPPERCASE";

upperCase.toLocaleLowerCase();

// console.log(upperCase);

var lowerCase = "a string written in lowercase";

lowerCase.toLocaleUpperCase();

// console.log(lowerCase);

var address = "Awka";

var hasLetterA = address.includes("a");

// console.log(hasLetterA);

var dept = "Computer Science";

var subName = dept.substring(0, 8)

// console.log(subName)

/*
 For more string methods, study
 https://www.w3schools.com/js/js_string_methods.asp
*/