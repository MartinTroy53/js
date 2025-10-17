// DATA TYPES

/*
  STRINGS
  A string is a sequence of characters - such as alphabets, symbols, emojies, and even numbers - wrapped within single or double qoutes.
  Examples are names, emails, tokens, phone numbers, birthdays, colours, etc.
*/

var string = "`1234567890--=!@#$%^&*()_++QWERTYUIOPDFGHJKLZXCVBNM";
var name = "Odinaka";
var email = "chiemelie@gmail.com";

/*
  NUMBERS
  These are the numerical data in our code.
  Any value that would be use in calculation should be saved as number.
  A number must be an integer every other value should be a string
  Examples is age.
*/

var age = 33;

/*
  BOOLEANS
  A boolean is a value that is either true or false. It is either there or not there. Being qua being.
  Examples are on/off, male/female.
*/

var boolean = true | false;

/*
  UNDEFINED
  An undefined data type means that we just declared a variable with out assigning a value to it.
  This is usually done when we do not know the value yet and we are yet to do some computations or calculations first.
*/

var undefined;
var myPhonePercentage;

/*
  NULL
  The null data type is one that has no possible value to be assigned to it.
  Example, if you are asked the colour of spring water or unpolluted air, these phenomenon have no possible colors. So it is best to say that the value is null.
*/

var colorOfFreshwater = null;

/*
  ARRAYS
  An array is simply a list or collection of items.
  You can keep just one or more data type in list.
*/

// single data type
var devs = ["Mallon", "Chisom", "Adanna", "Henry", "Victor", "Promise"];

// multiple data type
var collection = [
	"Chibuike",
	20,
	null,
	undefined,
	true,
	false,
	{ school: "UNIZIK" },
	["banana", "orange", "apple"],
];

/*
  OBJECT
  A object is a collection of key-value pairs.
  Think about a real life object like a car, it got a name, color, date of production, number of seats, milage etc.
  These data are saved in a pair of key (that is the name of the of the property) and the value.
  Examples, the below object is a person, with a name, agem martial status, a laptop, friends and a car.
*/

var person = {
	name: "Chidimma",
	age: 19,
	married: true,
	laptop: null,
	friends: ["Xan", "Henry", "Victor"],
	car: {
		name: "beetle",
		model: "2023",
		color: "red",
	},
};

/*
  FUNCTIONS
  A function is a group of series of instructions that perform a specific task.
  Example, the below function takes in a person's name and says Hello👋🏾 to the person.
*/

var sayHello = function (name) {
	return `Hello👋🏾, ${name}.`;
};

sayHello("Emeka");
