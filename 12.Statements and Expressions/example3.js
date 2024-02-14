const name = "Johnetta";
const age = 53;

///////////////////////////////////////////////////////////////////
// Everywhere (!) a literal value can be used is also a place where we
// can use an expression.

// An example with numbers

// The expression is a literal value
console.log(name.slice(5)); // "tta"

// The expression contains two subexpressions and an operator
console.log(name.slice(1 + 4)); // "tta"

// This expression contains multiple subexpressions.
console.log(name.slice(50 / 10)); // "tta"

// This expression contains multiple subexpressions.
console.log(name.slice(name.length - 3)); // "tta"

// This expression contains multiple subexpressions.
console.log(name.slice((age - 3) / 10)); // "tta"

// An example with strings
const worldDescription = "beautiful world";

// The expression is a literal value
console.log("Hello world");

// The expression contains two subexpressions and an operator
console.log("Hello " + "world");

// This expression contains multiple subexpressions.
// The parentheses here are optional.
console.log("He" + "llo" + (" " + "world"));

// This expression contains multiple subexpressions.
console.log("Hello " + worldDescription.slice(-5));

// This expression contains multiple subexpressions.
console.log(
	"Hello " + worldDescription.slice(worldDescription.indexOf(" ") + 1),
);
