// An array of fruits
const fruits = ["apple", "banana", "mango", "orange"];

// 1. Classic for loop (with index)

// for (let index = 7; index < 10; index++){
// 	console.log(index);
// }


// for (let index = 10; index >= fruits.length; index--){
//  console.log(index);
// }

// for (let i = 0; i < fruits.length; i++) {
// 	const fruit = fruits[i];
// 	// console.log(`Fruit ${i}: ${fruit}`);
// }

// 2. forEach loop (clean, element only)
fruits.forEach(function (fruit, index, fruits) {
//  console.log(`${index}: Sweet ${fruit}`);

})


// 3. BONUS: for...of loop (great for arrays, strings, sets, maps, etc.)
// for (const fruit of fruits) {
// 	console.log(fruit);
// }

// An object of student scores
const studentScores = {
	Chiemelie: 95,
	Ada: 88,
	Musa: 72,
};

// 4. for...in loop (for objects, gives keys)
for (const student in studentScores) {
	const score = studentScores[student];
	console.log(`${student} scored ${score}`);
}
