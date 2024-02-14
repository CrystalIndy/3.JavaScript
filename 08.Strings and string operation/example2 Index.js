// We can access the characters in a string without
// using a variable.
console.log("Nelson Mandela"[1]); // "e"

// We can access the characters in a string inside a variable.
const freedomFighter = "Nelson Mandela";
console.log(freedomFighter[7]); // "M"

//////////////////////////////////////////////////////
// Using indexOf
console.log(freedomFighter.indexOf("M")); // 7

// It finds the first one only
console.log(freedomFighter.indexOf("a")); // 8

// Find a sequence of characters
// The result is the index of the first character
console.log(freedomFighter.indexOf("ela")); // 11

// If it can't find: the result is -1
console.log(freedomFighter.indexOf("q")); // -1
