/*
  OBJECTS
  An object is a collection of related data and instructions stored as key–value pairs.
  Example: the below object stores details about a person and can also say Hello👋🏾.
*/

// OBJECT DECLARATION AND USAGE

/*
  In JavaScript, creating an object involves two parts:
  - Declaration: where we define the object with its properties and methods.
  - Access/Usage: where we read, update, or call the object’s properties/methods.
*/

// object declaration

var person = {
	name: "Emmanuel",
	age: 25,
	friends: ["Kelvin", "James", "Musa"],
	greet: function () {
		return `Hi👋🏾, my name is ${this.name}`;
	},
};

/*
 The Anatomy of an Object
 1. Curly braces {}: Marks the start and end of the object.
 2. Properties: Key–value pairs inside the object (e.g., name: "Emmanuel").
 3. Methods: Functions stored as values inside the object (e.g., sayHi).
 4. this keyword: Refers to the current object (so sayHi can use person’s name).
 5. Accessing: Use dot notation (person.name) or bracket notation (person["name"]).
*/

// ACCESSING OBJECT VALUES

// Using dot notation
// console.log(person.name);
// console.log(person.age);
// console.log(person.friends);

// Using bracket notation
// console.log(person["name"]);
// console.log(person["age"]);

console.log(person.greet());

// Calling a method
// console.log(typeof person.greet());

// Adding a new property
// person.country = "Nigeria";
// console.log(person.country);

// console.log(person);

// Editing a property

// person.name = "John";
// console.log(person, person.greet())

// Removing a property
// delete person.age;
// console.log(person);

// Getting an array of keys in an object
// const keys = Object.keys(person);
// console.log(keys);

// Getting values in a object
// const values = Object.values(person);
// console.log(values);
