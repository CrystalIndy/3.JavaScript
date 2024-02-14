"use strict";
const memberMonth = 5;
const monthsYear = 12;
const discountYear = 10;
const discountFactor = (100 - discountYear) / 100;
const memberReferals = 3;

const feeSalman = memberMonth * monthsYear * discountFactor;
console.log(feeSalman);

const referalKaren = 3;
const freeMonthKaren =
	(referalKaren - (referalKaren % memberReferals)) / memberReferals;
const feeKaren = (monthsYear - freeMonthKaren) * memberMonth;
console.log(feeKaren);

const referalDaniela = 8;
const freeMonthDaniela =
	(referalDaniela - (referalDaniela % memberReferals)) / memberReferals;
const feeDaniela =
	(monthsYear - freeMonthDaniela) * memberMonth * discountFactor;
console.log(feeDaniela);
