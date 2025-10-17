const inputfield = document.getElementById("inputField");
const outputfield = document.getElementById("outputField");
const button = document.getElementById("button");

button.addEventListener("click", function () {
	const inputValue = inputfield.value;
	console.log("Input Value: ", inputValue);
	return (outputfield.textContent = inputValue);
});
