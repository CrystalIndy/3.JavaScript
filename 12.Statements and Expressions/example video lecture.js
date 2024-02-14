"use strict";

// Tip: use console.log() to display the result.

// 1.Concatenate these two strings
let firstName = "Louis";
let lastName = "van Gaal";
let fullName = firstName + " " + lastName;

console.log(fullName);

//2. Find the length of this string
let groceries = "2 apples, bananas, coffee, bread";

console.log(groceries.length);

//3. Store the first and third characters in seperate strings
let text = "Winc Academy";
let firstChar = text[0];
let thirdChar = text[3];

console.log(firstChar);
console.log(thirdChar);

//4. Replace 'Bob' with your own name
let greeting = "Good Morning Bob!";
let ownName = greeting.replace("Bob", "Marco");

console.log(ownName);

//5. BONUS: Edit the two variables in a way which the outcome would be True
let var1 = "85";
let var2 = 85;
let outcome = var1 == var2;

console.log(outcome);
