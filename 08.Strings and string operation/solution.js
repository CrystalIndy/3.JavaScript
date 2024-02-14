// You can create strings with double and single quotes, and backticks.
const kifle = "Kifle Wodajo";
const diallo = "Diallo Telli";
const nzo = `Nzo Ekangaki`;
const william = "William Eteki";
const edem = "  Edem Kodjo  ";
const peter = "Peter Onu";
const ide = "Ide Oumarou";
const salim = "Salim Ahmed Salim";
const amara = "Amara Essy";

// First letter of last name
console.log(kifle[6]); // "W"

// Amount of characters, not counting space
console.log(diallo.length - 1); // 11

// Slice for last name
// Literal value
console.log(nzo.slice(4));
// Dynamically look up the location of the space.
const spaceIndex = nzo.indexOf(" ");
console.log(nzo.slice(spaceIndex + 1));

// "william ETEKI"
// Multiple steps
const williamFirstName = william.slice(0, 7);
const williamFamilyName = william.slice(8);
console.log(williamFirstName.toLowerCase());
console.log(williamFamilyName.toUpperCase());
// In one step (also prints out a single line instead of two)
console.log(william.slice(0, 7).toLowerCase(), william.slice(8).toUpperCase());

// Trim
console.log(edem.trim());
console.log(edem.trimStart());
console.log(edem.trimEnd());

// Repeat
const peterFirstName = peter.slice(0, 5);
console.log(peterFirstName.repeat(3));

// Replace
console.log(ide.replace("m", "mm"));

// Interpolation.
const period = "1989-2001";
console.log(
	`The 8th secretary general of the OAU: ${salim}, who held this position from ${period}.`,
);

// Concatenation.
const amaraFirstLetter = amara[0];
const amaraFamilyName = amara.slice(amara.indexOf(" ") + 1);
console.log(amaraFirstLetter + ". " + amaraFamilyName);
