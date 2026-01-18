let js = "amazing"
console.log(40 + 8 + 23 - 10)

console.log("Varun")
console.log(23)

let firstName = "Varun";

console.log(firstName)
console.log(firstName)
console.log(firstName)

// Variable name conventions
let jonas_matilda = "JM"
let $function = 27;

let person = "Varun";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob)

// In JS every value is either Object or Primitive value.
// There are 7 Primitive Data types:-

// 1. Number: Floating point numbers Used for decimals and integers.
// let age = 23;
// 2. String: Sequence of characters Used for text.
// let firstName = 'Jonas'; 
// 3. Boolean: Logical type that can only be true or false Used for taking decisions 
// let fullAge = true;
// 4. Undefined: Value taken by a variable that is not yet defined ('empty value') 
// let children: 
// 5. Null: Also means 'empty value 
// 6. Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now] 
// 7. BigInt (ES2020): Larger integers than the Number type can hold

// JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically

 
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Varun');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = "Schmedtmann";
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas - ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName2 = 'Jonas';
const lastName2 = 'Schmedtmann';
console.log(firstName2 + lastName2);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)