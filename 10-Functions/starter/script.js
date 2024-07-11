'use strict';

// ******************************************************************************

// Default Parameters
/*const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // numPassengers = 1, price = 199
createBooking('LH123', 2, 800); // numPassengers = 2, price = 800
createBooking('LH123', 2); // numPassengers = 2, price = 199


// ******************************************************************************
// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight); // LH234
// console.log(jonas); // {name: "Mr. Jonas Schmedtmann", passport: 24739479284}

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas); // {name: "Mr. Jonas Schmedtmann", passport: 52241907307}
checkIn(flight, jonas); // {name: "Mr. Jonas Schmedtmann", passport: 52241907307} // Checked in

// ******************************************************************************
// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord); // Original string: JavaScript is the best! // Transformed string: JAVASCRIPT is the best! // Transformed by: upperFirstWord
transformer('JavaScript is the best!', oneWord); // Original string: JavaScript is the best! // Transformed string: javascriptisthebest! // Transformed by: oneWord

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5); // 👋 👋 👋


// ******************************************************************************

// Functions Returning Functions

const greet = function (greeting) {
  // Outer function
  return function (name) {
    // Inner function
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven

greet('Hello')('Jonas'); // Hello Jonas

// Challenge
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hi')('Jonas'); // Hi Jonas


// ******************************************************************************
// The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Lufthansa flight LH239
lufthansa.book(635, 'John Smith'); // John Smith booked a seat on Lufthansa flight LH635
console.log(lufthansa); // {airline: "Lufthansa", iataCode: "LH", bookings: Array(2)}

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
// Method borrowing
const book = lufthansa.book;

// Does NOT work because the 'this' keyword is now pointing to undefined
// book(23, 'Sarah Williams'); // Uncaught TypeError: Cannot read property 'airline' of undefined

// Call method
book.call(eurowings, 23, 'Sarah Williams'); // Sarah Williams booked a seat on Eurowings flight EW23
console.log(eurowings); // {airline: "Eurowings", iataCode: "EW", bookings: Array(1)}

book.call(lufthansa, 239, 'Mary Cooper'); // Mary Cooper booked a seat on Lufthansa flight LH239

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper'); // Mary Cooper booked a seat on Swiss Air Lines flight LX583
console.log(swiss); // {airline: "Swiss Air Lines", iataCode: "LX", bookings: Array(1)}

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // George Cooper booked a seat on Swiss Air Lines flight LX583
console.log(swiss); // {airline: "Swiss Air Lines", iataCode: "LX", bookings: Array(2)}

book.call(swiss, ...flightData); //is the same as the apply method above (spread operator)


// ******************************************************************************

// Closures

let passengerCount = 0;
const secureBooking = function () {
  return function () {
    passengerCount++;
    // console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

// The booker function has access to the passengerCount variable even though it is not in its scope
booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

// console.dir(booker); // prints the booker function name and the closure arguments

// More Closure Examples

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 7;
  f = function () {
    console.log(b * 2); // 14
  };
};

g(); // logs 46
f(); // logs 46
console.dir(f);

// The f function is a closure that has access to the variables from both g and h.
//  re-assigning f function
h(); // logs 14
f(); // logs 14

console.dir(f);

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // This variable will not be used because the boardPassengers function has its own perGroup variable
boardPassengers(180, 3); // Will start boarding in 3 seconds // We are now boarding all 180 passengers // There are 3 groups, each with 60 passengers

*/

// ******************************************************************************

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

//  Explanation for the function above:
// 1. The IIFE is executed immediately when the script is loaded.
// 2. The header variable is assigned to the h1 element.
// 3. The event listener is added to the body element.
// 4. When the body is clicked, the callback function is executed.
// 5. The callback function changes the color of the header to blue.
// 6. The callback function has access to the header variable because of the closure.
// 7. The callback function is executed when the body is clicked.
// 8. The callback function changes the color of the header to blue.
