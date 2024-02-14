// Ignore this first part
const generateRandomNumber = () => Math.floor(Math.random() * 10);

const number1 = Number(generateRandomNumber());
const number2 = Number(generateRandomNumber());
const number3 = Number(generateRandomNumber());
const number4 = Number(generateRandomNumber());
const number5 = Number(generateRandomNumber());
const number6 = Number(generateRandomNumber());

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);
console.log(number6);

let randomNumber = `${number1}${number2}${number3}${number4}${number5}${number6}`;
console.log(`Your random number is: ${randomNumber}.`);
