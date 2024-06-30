'use strict';

// The javascript Engine and Runtime

// The javascript Engine is a program that executes javascript code. It is a part of a browser or a javascript runtime environment like Node.js.

// JS ENGINE = program that executes JS code

//
function calcAge(birthYear) {
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
