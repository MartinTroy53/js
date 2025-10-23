// Let's create a variable that represents a day of the week
const day = "Tuesday";

// The switch statement compares 'day' against several cases
switch (day) {
	case "Monday":
		// If 'day' equals "Monday", this block runs
		console.log("Start of the week! Time to get things moving.");
		break; // 'break' prevents the code from falling into the next case

	case "Tuesday":
		console.log("Second day grind. Keep pushing!");
		break;

	case "Wednesday":
		console.log("Midweek already — stay focused!");
		break;

	case "Thursday":
		console.log("Almost there. One more push!");
		break;

	case "Friday":
		console.log("Finally Friday! Wrap it up strong.");
		break;

	case "Saturday":
	case "Sunday":
		// You can stack cases like this if they share the same logic
		console.log("Weekend vibes — relax and recharge.");
		break;

	default:
		// Runs if no case matches the 'day' value
		console.log("That’s not a valid day!");
}

// Output (if day = "Tuesday"):
// Second day grind. Keep pushing!

// if-else statement

const age = 13;

if (age < 13) {
	console.log("Child");
} else (age < 20) 
	console.log("Teenager");
// } else {
// 	console.log("Adult");
// }
