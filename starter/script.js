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
/*
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
*/
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
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split('');
  return [first.toUpperCase(), ...others].join('');
};
//high-order function
const transformer = function (str, fn) {
  console.log(`Original string:${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
//functions with a function inside
//oneWord is callback function we don't call them ourselves javascript calls them later ${fn(str)}
//upperFirstWord is callback function
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);
//js uses callback functions all the time
//functions allow us to reuse code and keep us from creating bugs and easier to update later
//more importantly is abstraction
const high5 = function () {
  console.log('????');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/
//------ end Functions Accepting Callback Functions
//!=========
//-----Functions Returning Functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('jonas');
greeterHey('steven');
greet('Hello')('jonas');

//challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('hi')('jonas');
*/
//useful for functional programming
//-----end Functions Returning Functions
//!=========
//-----The call and apply Methods
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function (){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; //no longer a method now a method

//does not work
//book(23,'Sarah Williams');

//.call method
// you can write a method once and then inherit it in another object, without having to rewrite the method for???
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);
*/
//-----end The call and apply Methods
//!=========
/*
// ----The bind Method
//book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); //book function with predefined properties
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//partial application means to preset parameters
//the order when binding matters you basically preseting the parameter values
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/
//----end The bind Method
//!===========
//-----challenge #1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section ????

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK ????
*/
//-------------------------solution
/*
const poll = {
  question: 'What is you favorite programming language?',
  options: ['0: JavaScript', '1:Pythons', '2:Rust', '3: C++'],
  //this generates [0,0,0,0]. More in the next section ????
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    //register answer
    console.log(answer);
    //short circuiting
    //if answer equals number and answer < less than answers lngth & answers answer add 1 to the value of th array for the optiion the person chooses from the prompt
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.log(this.answers); //print out the answers array
    this.displayResults(); //if type array returns to console (4)??[0, 0, 1, 0]
    this.displayResults('string'); // if type string returns a string: Poll results are 0, 1, 0, 0
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      //poll results are 13, 2,4,1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

//poll.registerNewAnswer();

//event listener for the answer poll button
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
// Calls a method of an object, substituting another object for the current object.
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); //call creates new array for the answers property in the poll object
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string'); //call creates new array for the answers property in the poll object
*/
//-----end challenge #1
//!============
//-----Immediately Invoked Function Expressions (IIFE)
//runs once and disappears needed for async await
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//(IIFE)Immediately Invoked Function Expressions
//they are wrapped in ( );
//they are then immediately invoked like this ();
// hide and protect variables using the scop chain
//functions can see global variables but global cannot see variables defined in the function
//this makes them useful for data encapsulation to protect data from accidentally from being changed
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);
//arrow function work as well
//need to be wrapped in parenthesis
(() => console.log('This will ALSO never run again'))(); //immediately invoked here

{
  //using brackets we can create a new scope with out the function
  const isPrivate = 23; //is not accessible to the global scope
  var notPrivate = 46; //is accessible to the global scope
} //(IIFE)is still the preferred method although it is not built into javascript but it is a method that developers made to protect data
console.log(notPrivate);
// console.log(isPrivate);
//-----end Immediately Invoked Function Expressions (IIFE)
//!===================
//-----closures
/*
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount}passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
*/
//closures are made automatically
//a closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created
//a closure makes sure that a function does not loose connection to variables that existed at the function's birth place;
// a closure gives a function access to all the variable of its parent function, even after that parent funtion has returned. THe function keeps a reference to its outer scope, which preserves the scope chain throughout time.
//a closure is the closed-over variable environment of the execution context in which was created, even after that execution context is gone;
//a function has access to the variable environment (VE) of the execution context in which it was created
// closure : VE attached to the function, exactly  as it was at the time and place the was created
//----- end closures
//!============
//----- More Closure Examples
/*
//example 1
let f;
const g = function () {
  const a = 23;
  // const b = 42;//this would also be put into the closure//once it reads through the scope chain it puts these variables into storage to use later
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
//reassigned by h so f will be different
h();
f();
console.dir(f);

// example 2 closure
const boardPassengers = function (n, wait) {
  //if this perGroup is removed the
  //perGroup in the global
  //scope will take priority because
  //then there is no closure
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait}seconds`);
};
//closures take priority of scope chain
//otherwise the perGroup variable here would be used
const perGroup = 1000;
boardPassengers(180, 3);
*/
// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);
//----- end More Closure Examples
//!==================================
//-----Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge ????

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK ????
*/

(function () {
  //this is a (IIFE) immediately invoked functions
  //the document .querySelector is selecting the 'h1' tag
  //the header variable that was assigned to h1 is being used to change the color style to red
  //this will only run one time
  const header = document.querySelector('h1');
  header.style.color = 'red';
  //the function is being passed into the addEventListener listener function as a callback function
  /*we are then selecting the body to detect the 
  the click and the header is in 
  the parent function so it get passed
  to the parent function where the color
  get changed to blue*/
  //the function is then able to go into the backpack and grab the assigned header variable
  //the header variable since it is a closure it will take prescience over scope variables in the global
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

//-----end Coding Challenge #2
