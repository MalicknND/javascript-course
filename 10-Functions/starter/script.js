'use strict';

// ******************************************************************************

// Default Parameters
const bookings = [];
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
