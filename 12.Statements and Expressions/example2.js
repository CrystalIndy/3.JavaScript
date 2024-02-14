///////////////////////////////////////////////////////////////////
// An expression can be a literal value.
console.log(3); // 3
console.log("hello"); // "hello"

///////////////////////////////////////////////////////////////////
// Expressions can contain other expressions (which is nesting).
console.log(3 + 5);
console.log("hello" + "good morning");

///////////////////////////////////////////////////////////////////
// A variable can also be an expression.
let totalPrice = 100;
let age = 53;
const name = "Johnetta";
console.log(totalPrice); // 100
console.log(age); // 53
console.log(name); // "Johnetta"

///////////////////////////////////////////////////////////////////
// We can combine variables and literal values in an expression.
console.log(totalPrice * 1.2); // 120
console.log(2022 - age); // 1969
console.log(`Hello ${name}.`); // "Hello Johnetta."

///////////////////////////////////////////////////////////////////
// If a string operation results in a new value (string or number
// or other value) it’s also an expression:
console.log("hello " + name); // "hello Johnetta"
console.log(`good morning ${name}`); // "good morning Johnetta"
console.log(name.length); // 8
console.log(name.toLowerCase()); // "johnetta"
console.log(name.slice(5)); // "tta"
