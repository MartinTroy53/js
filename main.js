let office = {
	name: "aicic",
	employees: ["Mallon", "Chisom", "Adanna", "Henry", "Victor", "Promise"],
	active: true,
	length: 56,
	calculateSalary: function () {
		return 3000;
	},
};

// let employees = ["Mallon", "Chisom", "Adanna", "Henry", "Victor", "Promise"];
// // console.log("First console logging", employees);
// let employees = ["Mallon", "Chisom", "Adanna", "Henry", "Victor", "Promise"];
//  const employee = employees.push("Odinaka");
//  const employe = employees.pop();
// console.log(employe);

// const employe = employees.forEach((employe) => {
//   console.log(`Aicic ${employe} Student`);
// });
// let employees = ["Mallon", "Chisom", "Adanna", "Henry", "Victor", "Promise"];

// const adanna = employees.indexOf("Adanna");

// console.log("Adanna's index", adanna);

employees.forEach((employe) => {
	const richKids = [];
	if (employe === "Adanna" || employe === "Victor") {
		richKids.push(employe);
	}
	console.log("Rich Kids", richKids);
});
