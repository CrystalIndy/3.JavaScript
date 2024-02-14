//Celsius to Fahrenheit. X is Celsius
//(9/5) * X + 32

const prompt = require("prompt-sync")();

const celsius = Number(prompt("Input temperature in celsius:"));
const Fahrenheit = (9 / 5) * celsius + 32;
console.log(
	`${celsius} degrees Celsius is equal to ${Fahrenheit} degrees Fahrenheit`,
);

/* Solution:
// prompt and cast in one line
const tempInCelsius = Number(prompt("What is the temperature in degrees Celsius?"));

const tempInFahrenheit = (tempInCelsius * (9/5)) + 32;

console.log(`${tempInCelsius} degrees Celsius is equal to ${tempInFahrenheit} degrees Fahrenheit`);*/
