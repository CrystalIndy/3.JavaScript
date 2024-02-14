const prompt = require("prompt-sync")();

const name = prompt("What's your name?");
const location = prompt("Where were your born?");
const food = prompt("What is your favourite food?");

console.log(
	`You are ${name}, you were born in ${location} and your favourite food is ${food}`,
);

// What’s your name?
// Where were you born?
// What is your favourite food?

// “You are (name), you were born in (location), your favourite food is (favorite food).”
