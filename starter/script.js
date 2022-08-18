'use strict';
//----- default parameters
/*
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
*/
//----- default parameters
//!=========
//----- How Passing Arguments Works: Value vs. Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('wrong passport!');
  }
};
//checkIn(flight, jonas);
//console.log(flight);
//console.log(jonas);

// is the same as doing...
//const flightNum = flight;
//const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
//passing by value vs reference
//javascript does not have pass by reference
//javascript only has values
//----- end How Passing Arguments Works: Value vs. Reference
//!=========
//-----First-Class and Higher-Order Functions
//first class functions
//javascript treats functions as first-class citizens
//this means that functions are simply values
//functions are just another "type" of object
//store function i variable or properties
//pass functions as arguments to Other functions
// return function FROM functions
//call methods on functions
//high-order functions
/*
a function the receives another function as argument, that returns a new function, or both
This is only possible because of first class functions

function that receives another function
function that return new function
*/
//-----First-Class and Higher-Order Functions
//!=========
//------ Functions Accepting Callback Functions

//------ end Functions Accepting Callback Functions
//!=========
