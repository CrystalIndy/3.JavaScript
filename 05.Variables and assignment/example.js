// 1: Bread and peanut butter
const breadPrice = 2;
const peanutButterPrice = 3;
console.log(breadPrice + peanutButterPrice);

// 2: Pokemon cards
const numberOfCards = 2348;
const pricePerCard = 0.1;
console.log(numberOfCards * pricePerCard);

// 3: Bike with discount
const bikePrice = 200;
const discountPercentage = 10;
console.log(bikePrice * ((100 - discountPercentage) / 100));

// 4: Freelancer VAT
const totalInvoicedAmount = 6280;
const vatPercentage = 21;
const totalInvoicedAmountWithoutVat =
	totalInvoicedAmount / ((100 + vatPercentage) / 100);
const vatAmount = totalInvoicedAmount - totalInvoicedAmountWithoutVat;
console.log(vatAmount);
// We can round this
console.log(Math.round(vatAmount));

// 5: New playgrounds
const budget = 60000;
const playgroundPrice = 1800;
const fullBudgetForPlaygrounds = budget / 2;
const remainderBudget = fullBudgetForPlaygrounds % playgroundPrice;
const allocatedBudgetForPlaygrounds =
	fullBudgetForPlaygrounds - remainderBudget;
const numberOfPlaygrounds = allocatedBudgetForPlaygrounds / playgroundPrice;
console.log(numberOfPlaygrounds);
