// Interpolation
// We "interpolate" variables into the string.
const nameA = "Johnetta Elzie";
const nameB = "DeRay Mckesson";

console.log(`Hello ${nameA}.`);
console.log(`Hello ${nameA} and ${nameB}.`);

// Concatenation
const chant1 = "No Justice! No Peace!";
const chant2 = "Know Justice! Know Peace!";

// Concatenate 2 strings together
let fullChant = chant1 + chant2;
console.log(fullChant);

// Concatenate 4 strings together
fullChant = fullChant + chant1 + chant2 + "!!!";
console.log(fullChant);

// ⚠️ Do not use concatenation to construct sentences
// This is hard to read and it's easy to make mistakes.
console.log("Hello " + nameA + " and " + nameB + ".");
