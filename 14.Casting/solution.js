// Ignore this first part
const generateRandomNumber = () => Math.floor(Math.random() * 10);

const number1 = generateRandomNumber();
const number2 = generateRandomNumber();
const number3 = generateRandomNumber();
const number4 = generateRandomNumber();
const number5 = generateRandomNumber();
const number6 = generateRandomNumber();

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);
console.log(number6);

// Using string interpolation
// We don't need to explicitly cast to a string because
// string interpolation already does this.
console.log(`${number1}${number2}${number3}${number4}${number5}${number6}`);

// Using string concatenation
// We do need to explicitly cast to a string here because the +
// is ambiguous.
let idNumber = String(number1);
idNumber = idNumber + String(number2);
idNumber = idNumber + String(number3);
idNumber = idNumber + String(number4);
idNumber = idNumber + String(number5);
idNumber = idNumber + String(number6);
console.log(idNumber);
