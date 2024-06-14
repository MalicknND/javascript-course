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


// ******************************************************************************
// reviews functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearUntilRetirement(1991, "MALICK"));
console.log(yearUntilRetirement(1950, "AMY"));

// ******************************************************************************
// Challenge 1

const calcAverage = (a, b, c) => (a + b + c) / 3;

// TEST 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// TEST 2
let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas > 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// ******************************************************************************
// Introduction to Arrays

const friend1 = "Bamba";
const friend2 = "Amy";
const friend3 = "Malick";

const friends = ["Bamba", "Amy", "Malick"];

console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Malick";
const malick = [firstName, "NDIAYE", 2037 - 1998, "Student", friends];
console.log(malick);

// excercice
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);

// ******************************************************************************
// Basic Array Operations Methods

const friends = ["Bamba", "Amy", "Malick"];
// Add elements to the end of an array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// Add elements to the beginning of an array
friends.unshift("John");
console.log(friends);

// Remove elements from the end of an array
const popped = friends.pop(); // Last element removed
console.log(friends);
console.log(popped);

// Remove elements from the beginning of an array
friends.shift(); // First element removed
console.log(friends);

console.log(friends.indexOf("Amy")); // return the index of the element

console.log(friends.includes("Amy")); // return true or false

if (friends.includes("Amy")) {
  console.log("You have a friend called Amy");
  } else {
    console.log("You don't have a friend called Amy");
}

// ******************************************************************************
// Challenge 2

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  const bills = [125, 555, 44];
  const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
  const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
  
  console.log(bills, tips, totals);
  */

// ******************************************************************************
// Introduction to Objects

const malick = {
  firstName: "Malick",
  lastName: "NDIAYE",
  age: 2037 - 1998,
  job: "Student",
  friends: ["Bamba", "Amy", "Malick"],
};

//DOT VS BRACKET NOTATION
console.log(malick);
console.log(malick.lastName);
console.log(malick["lastName"]);

const nameKey = "Name";
console.log(malick["first" + nameKey]);
console.log(malick["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Malick? Choose between firstName, lastName, age, job and friends"
);

if (malick[interestedIn]) {
  console.log(malick[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

malick.location = "Senegal";
malick["twitter"] = "@malickndiaye";
console.log(malick);

// Challenge
// Malick has 3 friends and his best friend is Amy

console.log(
  `${malick.firstName} has ${malick.friends.length} friends, and her best friend is ${malick.friends[1]}`
);
