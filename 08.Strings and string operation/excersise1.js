const kifle = "Kifle Wodajo";
const diallo = "Diallo Telli";
const nzo = `Nzo Ekangaki`;
const william = "William Eteki";
const edem = "  Edem Kodjo  ";
const peter = "Peter Onu";
const ide = "Ide Oumarou";
const salim = "Salim Ahmed Salim";
const amara = "Amara Essy";

// print first letter last name
console.log(kifle[6]);
// print number of characters, not the space.
console.log(diallo.length - 1);
//  slice, indexOf
const spaceIndex = nzo.indexOf(" ");
console.log(nzo.slice(4));
console.log(nzo.slice(spaceIndex + 1));

// slice, upper, lowercase
const nameA = william.slice(0, 7);
const nameB = william.slice(8, 13);
console.log(nameA.toLowerCase());
console.log(nameB.toUpperCase());
// In one step (also prints out a single line instead of two)
console.log(william.slice(0, 7).toLowerCase(), william.slice(8).toUpperCase());

// print three times
console.log(edem.trim());
console.log(edem.trimStart());
console.log(edem.trimEnd());
// repeat
const nameC = peter.slice(0, 5);
console.log(nameC.repeat(3));
// replace
console.log(ide.replace("m", "mm"));
// Interpolation. let op de backtick.
const yearS = "1989 - 2001";
console.log(
	`The 8th secretary-general of the OAU: ${salim}, who held this position from ${yearS}.`,
);
// //  Concatenation eigen
// console.log(amara[0]);
// const indexAmara = amara.indexOf(" ");

// Concatenation. winc
const amaraFirstLetter = amara[0];
const amaraFamilyName = amara.slice(amara.indexOf(" ") + 1);
console.log(amaraFirstLetter + ". " + amaraFamilyName);
