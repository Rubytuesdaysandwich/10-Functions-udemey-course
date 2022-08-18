'use strict';
//----- default parameters
const bookings = [];
//create function set default values
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //es5
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800); //flightNum,numPassengers,price
createBooking('LH123', 5);
//using undefined we are able to have to skip a argument and leave it at the default value
createBooking('LG123', undefined, 1000);
//----- default parameters
//!=========
//----- How Passing Arguments Works: Value vs. Reference

//----- end How Passing Arguments Works: Value vs. Reference
//!=========
