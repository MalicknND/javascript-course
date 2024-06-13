"use strict"; // En JavaScript, l'utilisation de "use strict"; active le mode strict, qui impose une version plus stricte du langage. Cela peut aider à éviter certaines erreurs courantes et à rendre le code plus sécurisé et performant.
/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 244;
// ******************************************************************************

// FUNCTIONS

function logger() {
  console.log("I am Malick");
}
// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} and ${oranges}.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// ******************************************************************************

// Function declarations vs expressions

// function declarations ( WE CAN CALL THIS FUNCTION BEFORE DECLARATION)
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expressions
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

// Arrow functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearUntilRetirement(1991, "Malick"));
console.log(yearUntilRetirement(1980, "Amy"));
*/

// ******************************************************************************
// Functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
