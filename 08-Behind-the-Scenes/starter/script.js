'use strict';

// The javascript Engine and Runtime

// The javascript Engine is a program that executes javascript code. It is a part of a browser or a javascript runtime environment like Node.js.

// JS ENGINE = program that executes JS code

/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);

// Variable Environment: Hoisting and the TDZ
// https://www.notion.so/Javascript-16fa533f16ca4027a5871fc38d4683f9?showMoveTo=true&saveParent=true

*/

// ******************************************************************************
// Hoisting and TDZ in Practice
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// this is a function declaration
function addDecl(a, b) {
  return a + b;
}

// this is a function expression
const addExpr = function (a, b) {
  return a + b;
};

// this is a arrow function
var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
