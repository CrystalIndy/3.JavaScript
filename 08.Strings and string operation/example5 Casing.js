const nameA = "Johnetta Elzie";

// Change the case
console.log(nameA.toLowerCase()); // "johnetta elzie"
console.log(nameA.toUpperCase()); // "JOHNETTA ELZIE"

// "trim" the whitespace around a string
// Note the whitespace before and after the name.
const nameB = " DeRay Mckesson      ";
console.log(nameB.trim()); // "DeRay Mckesson"
console.log(nameB.trimStart()); // "DeRay Mckesson      "
console.log(nameB.trimEnd()); // " DeRay Mckesson"

// trim() also removes tabs and newlines
const lines = "\nThis\nstring\ncontains\nmultiple\nlines.\n";
console.log(lines); // with newlines before and after
console.log(lines.trim()); // newlines at start and end removed

// Note the space at the end of the string.
const chant = "No Justice! No Peace! ";

// Repeat x times
console.log(chant.repeat(3));

// Replace the first matching substring
console.log(chant.replace("No", "Know"));
