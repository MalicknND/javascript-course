"use strict";
// ******************************************************************************

/* Fundamentals Part 1
//ChALLENGE 1
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

BMIMark = markMass / markHeight * 2;
BMIJohn = johnMass / johnHeight * 2;

const markHigherBMI = BMIJohn > BMIMark
console.log(BMIJohn, BMIMark, markHigherBMI)

//Challenge 2

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const BMIMark = (markMass / markHeight) * 2;
const BMIJohn = (johnMass / johnHeight) * 2;

if (BMIJohn > BMIMark) {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark} `);
} else {
  console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn} `);
}

// Challenge 3

const Dolphins = (96 + 108 + 89) / 3;
const Koalas = (88 + 91 + 110) / 3;
console.log(Dolphins, Koalas);

if (Dolphins > Koalas && Dolphins >= 100) {
  console.log(`Dolphins win the trophy`);
} else if (Koalas > Dolphins && Koalas >= 100) {
  console.log(`Koalas win the trophy`);
} else if (Dolphins === Koalas && Dolphins >= 100 && Koalas >= 100) {
  console.log(`Both win the trophy`);
} else {
  console.log(`No one win`);
}

// Challenge 4
let bill = 430;
const tip = bill >= 50 && bill <= 500 ? 0.2 * bill : 0.15 * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);


// ******************************************************************************
// Fundamentals Part 2

// Challenge 1
const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

const dolphins = calcAverage(44, 23, 71);
const koalas = calcAverage(65, 54, 49);

const checkWinner = (avgDophins, avgKoalas) => {
  if (avgDophins > avgKoalas * 2) {
    console.log(`Dophins ${avgDophins} vs ${avgKoalas})`);
  } else if (avgKoalas > avgDophins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDophins})`);
  } else {
    console.log(`No teams wins !`);
  }
};

checkWinner(dolphins, koalas);


// Challenge 2

const calcTip = (bill) => {
  return bill >= 50 && bill <= 500 ? 0.2 * bill : 0.15 * bill;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[1], bills[1] + tips[2], bills[2] + tips[2]];
console.log(bills, tips, totals);


// Challenge 3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  CalcBMI: function () {
    this.bmi = this.mass / (this.height * 2);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  CalcBMI: function () {
    this.bmi = this.mass / (this.height * 2);
    return this.bmi;
  },
};

console.log(mark.CalcBMI());
console.log(john.CalcBMI());

console.log(john.bmi, mark.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}

*/

//Challenge 4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(tips, totals);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
