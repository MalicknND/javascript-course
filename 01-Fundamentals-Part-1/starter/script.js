/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Amy";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);




// ******************************************************************************
// data types for variables

true;
console.log(true);

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


// ******************************************************************************
// let, const, and var

let age = 30;
age = 31;

const birthYear = 1991; // cannot be reassigned

var job = "programmer"; // old way of declaring variables
job = "teacher"; // can be reassigned (mutable)

lastName = "Schmedtmann"; // not recommended to declare variables without let, const, or var
console.log(lastName);

// ******************************************************************************
// Basic Operators

let now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // exponentiation
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// assignment operators
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// ******************************************************************************
// Operator Precedence
// La précédence des opérateurs détermine l'ordre dans lequel les opérateurs sont évalués. Les opérateurs avec la plus haute précédence sont évalués en premier. Les opérateurs avec une précédence plus basse sont évalués en dernier. Si les opérateurs ont la même précédence, ils sont évalués de gauche à droite.
let now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// ******************************************************************************
// Coding Challenge #1

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
console.log(BMIMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


// ******************************************************************************

// Strings and template literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

//  Templates Literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(jonasNew);

console.log(`Just a regular string`);

console.log(
  "String with \n\
multiple \n\
lines"
);
console.log(`String
Multiple
lines`);
// ******************************************************************************
// Taking decisions : if/else statements
const age = 15;

if (age >= 18) {
    console.log("Malick can start driving 🚘");
    } else {
        const yearsLeft = 18 - age;
    console.log(`Malick is too young. Wait another ${yearsLeft} years `);
    }
    
    const birthYear = 1991;
    let century;
    if (birthYear <= 2000) {
        century = 20;
        } else {
            century = 21;
    }
    
    console.log(century);
// ******************************************************************************
    // Challenge 2
    const massMark = 78;
    const heightMark = 1.69;
    const massJohn = 92;
    const heightJohn = 1.95;
    
    const BMIMark = massMark / (heightMark * heightMark);
    const BMIJohn = massJohn / (heightJohn * heightJohn);
    
    console.log(BMIMark, BMIJohn);
    
    if (BMIMark > BMIJohn) {
        console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
        } else {
            console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
    }
    
    // ******************************************************************************
    // Type conversion
    
    const inputYear = "1991";
    console.log(Number(inputYear), inputYear);
    console.log(Number(inputYear) + 19);
    console.log(Number("Jonas")); // INVALID NUMBER
    console.log(typeof NaN); // number
    console.log(String(23), 23);
    
    // Type coercion
    console.log("I am " + 23 + " years old");
    console.log("23" - "10" - 3); // 10 number
    console.log("23" + "10" + 3); // 23103 string
    console.log("23" * 2); // 46 number
    console.log("23" / 2); // 11.5 number
    
    // ******************************************************************************
    
    // Truthy and Falsy values
    
    // 5 falsy values : 0, '', undefined, null, NaN
    
    console.log(Boolean(0));
    console.log(Boolean(undefined));
    console.log(Boolean("Jonas"));
    console.log(Boolean(""));
    console.log(Boolean({}));
    
    const money = 0;
    if (money) {
        console.log("Don't spend it all");
        } else {
            console.log("You should get a job");
    }
    
    let height;
    
    if (height) {
        console.log("Yes ! Height is defined");
        } else {
            console.log("Height is UNDEFINED");
    }
    // ******************************************************************************
    
    // Equality Operators == vs === (strict)
    
    const age = "18";
    
    if (age === 18) console.log("You just become an adult (strict)");
    if (age == 18) console.log("You just become an adult (loose)");
    
    const favorite = Number(prompt("What's your favorite number"));
    console.log(favorite);
    
    if (favorite === 23) {
        console.log("cool 23 est bien ");
        } else if (favorite === 7) {
            console.log("cool 7 est aussi bien ");
            } else {
                console.log("different de 23 et 7 ");
        }
        
        if (favorite !== 23) console.log("Why not use 23");
    // ******************************************************************************
        // Boolean logic
        // Logical operators
        
        const hasDriverLicense = true; // A
        const hasGoodVision = true; // B
        
        console.log(hasDriverLicense && hasGoodVision);
        console.log(hasDriverLicense || hasGoodVision);
        console.log(!hasDriverLicense);
        
        const shouldDrive = hasDriverLicense && hasGoodVision;
        
        // if (shouldDrive) {
            //   console.log("Amy is able to drive");
            // } else {
                //   console.log("Someone else should drive...");
                // }
                
                const isTired = false; //C
                
                console.log(hasDriverLicense && hasGoodVision && isTired);
                
                if (hasDriverLicense && hasGoodVision && !isTired) {
                    console.log("Amy is able to drive");
                    } else {
                        console.log("Someone else should drive...");
                }
 

// ******************************************************************************
// Challenge 3

// const scoreDolphins = (96 + 108 + 89) / 3;
// console.log(scoreDolphins);
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy");
// }

// BONUS

const scoreDolphins = (97 + 112 + 80) / 3;
console.log(scoreDolphins);
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No one win the trophy");
}

// ******************************************************************************
// The switch statement

const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy week ends");
    break;
  default:
    console.log("Not a valid day ");
}
// other way
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy week ends");
} else {
  console.log("Not a valid day ");
}

// ******************************************************************************
// Statements and Expressions

3 + 4; // expressions because its produce a value
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
 */
// ******************************************************************************

// The conditional (ternary) Operator

const age = 23;
// age >= 18
//   ? console.log("I like to drink Coca")
//   : console.log("I prefer water 💧");

const drink = age >= 18 ? "Coca" : "Water 💧 ";
console.log(drink);

let drink2;

if (age >= 18) {
  drink2 = "Coca";
} else {
  drink2 = "Water";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "Coca" : "Water 💧 "} `);
