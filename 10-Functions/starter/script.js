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

*/

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
