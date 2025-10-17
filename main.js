let office = {
	name: "aicic",
	employees: ["Mallon", "Chisom", "Adanna", "Henry", "Victor", "Promise"],
	active: true,
	length: 56,
	calculateSalary: function () {
		return 3000;
	},
};

let employees = ["Mallon", "Chisom", "Adanna", "Henry", "Victor", "Promise"];

console.log("First console logging", employees);

// employees.push("Odinaka");
// employees.pop();
// const employe = employees.forEach((employe) => {
//   console.log(`Aicic ${employe} Student`);
// });

// const adanna = employees.indexOf("Adanna");

// console.log("Adanna's index", adanna);

employees.forEach((employe) => {
	const richKids = [];
	if (employe === "Adanna" || employe === "Victor") {
		richKids.push(employe);
	}
	console.log("Rich Kids", richKids);
});
