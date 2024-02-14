"use strict";

// We "slice" from index 5 onwards
console.log("Rolihlahla".slice(5)); // lahla

// We "slice" from index 2 and stop before index 7
console.log("Rolihlahla".slice(2, 7)); // lihla

///////////////////////////////////////////////////////
const freedomFighter = "Nelson Mandela";

// Find the index of the space character
const spaceCharacterIndex = freedomFighter.indexOf(" ");
console.log(spaceCharacterIndex); // 6 (the index!)

// The lastname starts after the space, so we add 1.
// We "slice" from index 7.
console.log(freedomFighter.slice(spaceCharacterIndex + 1)); // Mandela
