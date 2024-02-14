"use strict";

//console.log()

//1. Calculate the surface area:
let width = 100;
let height = 35;
let outcomeSurface = width * height;

console.log(outcomeSurface);

//2. Check if this integer is a prime number using the modulo operator % and is equal to ===
let primeNumber = 11;
let prime = primeNumber % 2;

console.log(prime === 0);

// //3.Convert the temperature from Celsius to Fahrenheit.
// //Tip: us this formula (Celcius * 9/5) + 32
// let tempCelcius = 22;
// let convFahrenheit = (tempCelcius * 9) / 5 + 32;
// console.log(convFahrenheit);

//SOLUTION VIDEO: Convert the temperature from Celsius to Fahrenheit.
//Tip: us this formula (Celcius * 9/5) + 32
let tempCelcius = 22;
console.log((tempCelcius * 9) / 5 + 32);

// //4 BONUS: Reverse the formula from task 3 to convert Fahrenheit to Celcius
let tempFahrenheit = 71;
let convCelcius = ((tempFahrenheit - 32) * 5) / 9;
console.log(convCelcius);

// // Solution video: Reverse the formula from task 3 to convert Fahrenheit to Celcius
// let tempFahrenheit = 71;
// console.log((tempFahrenheit * 9) / 5 - 32);
