// A Callback is a function that is passed into a method as an argument.

setTimeout(function () {
	console.log("Ran function");
	setTimeout(function () {
		console.log("Ran function");
	}, 5000)
}, 5000)


// setTimeout(function () {
// 	console.log("Ran callback function");
// 	setTimeout(function () {
// 		console.log("Ran deeper callback function");
// 		setTimeout(function () {
// 			console.log("Deepest callback");
// 		}, 6000);
// 	}, 5000);
// }, 7000);