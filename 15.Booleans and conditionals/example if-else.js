const sunIsLargerThanEarth = true;
if (sunIsLargerThanEarth) {
	console.log("The sun is larger than the earth.");
}

let itsRaining = false;
if (itsRaining) {
	console.log("You should bring an umbrella.");
}

let totalPrice = 50;
let discountPercentage = 10;
let hasDiscountCard = true;

if (hasDiscountCard) {
	console.log("You have a discount card.");
	console.log("Calculating the price including discount..");
	totalPrice = totalPrice * ((100 - discountPercentage) / 100);
}
console.log(`The total price is ${totalPrice}`);
