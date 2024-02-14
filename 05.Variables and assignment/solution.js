const pricePerMonth = 5;
const monthsInYear = 12;
const discountPercentageForYearSubscription = 10;
const discountFactorYear = (100 - discountPercentageForYearSubscription) / 100;
const numberOfReferralsForFreeMonth = 3;

const salmanPaid = pricePerMonth * monthsInYear * discountFactorYear;
console.log(salmanPaid);

const numReferralsKaren = 3;
const monthsFreeKaren =
	(numReferralsKaren - (numReferralsKaren % numberOfReferralsForFreeMonth)) /
	numberOfReferralsForFreeMonth;
const karenPaid = (monthsInYear - monthsFreeKaren) * pricePerMonth;
console.log(karenPaid);

const numReferralsDaniela = 8;
const monthsFreeDaniela =
	(numReferralsDaniela -
		(numReferralsDaniela % numberOfReferralsForFreeMonth)) /
	numberOfReferralsForFreeMonth;
const danielaPaid =
	(monthsInYear - monthsFreeDaniela) * pricePerMonth * discountFactorYear;
console.log(danielaPaid);
