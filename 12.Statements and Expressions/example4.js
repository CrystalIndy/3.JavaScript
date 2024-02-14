///////////////////////////////////////////////////////////////////
// Every expression can be used as part of another expression.

const name = "Johnetta";

// 1. slice to "Jo"
// 2. repeat "Jo" 2 times
console.log(name.slice(0, 2).repeat(2)); // "JoJo"

// 1. slice to "Jo"
// 2. repeat "Jo" 2 times
// 3. convert "JoJo" to lower case
console.log(name.slice(0, 2).repeat(2).toLowerCase()); // "jojo"

const repeatXTimes = 4;
const letterEIndex = name.indexOf("e");

// 1. slice to "John"
// 2. repeat "John" 4 times
console.log(name.slice(0, letterEIndex).repeat(repeatXTimes)); // "JohnJohnJohnJohn"

// 1. name.length * -4 = -32
// 2. -32 + 3 = -29
console.log(name.length * -4 + 3); // -29

const country = "  Ghana   ";
// 1. trim whitespace: "Ghana"
// 2. repeat 4 times: "GhanaGhanaGhanaGhana"
// 3. convert to lowercase: "ghanaghanaghanaghana"
console.log(country.trim().repeat(repeatXTimes).toLowerCase()); // "ghanaghanaghanaghana"

const greeting = "hello";

// 1. greeting.length - 2 = 3
// 2. repeatXTimes - 2 = 2
// 3. convert to "HELLO"
// 4. slice(1, 3) to "EL"
// 5. repeat(2) to "ELEL"
console.log(
	greeting
		.toUpperCase()
		.slice(1, greeting.length - 2)
		.repeat(repeatXTimes - 2),
); // "ELEL"
