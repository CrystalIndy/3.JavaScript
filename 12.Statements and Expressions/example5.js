const name = "DeRay Mckesson";

// () have precedence over the ".".
console.log((name + " BLM").toLowerCase()); // "deray mckesson blm"

// "." has precedence over multiplication.
console.log(name.length * 2); // 28

// [] has precedence over concatenation with +
console.log(name[6] + "J"); // "MJ"

// "." is left-to-right associative
// Expressions get evaluated left-to-right.
console.log(name.slice(0, 3).toLowerCase().repeat(3)); // "derderder"
