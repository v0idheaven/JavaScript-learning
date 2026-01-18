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


const now2 = 2037;
const ageJonas2 = now - 1991;
const ageSarah2 = now - 2018;

console.log(now - 1991 > now - 2018)

let a, b;
a = b = 25 - 10 - 5; // a = b = 10, a = 10
console.log(a, b);

const averageAge = (ageJonas2 + ageSarah2) / 2
console.log(ageJonas2, ageSarah2, averageAge)


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.;88
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


const firstName3 = "Varun";
const job3 = 'Teacher';
const birthYear3 = 1991;
const year3 = 2037;

const varun = "I'm" + firstName3 + ', a ' + (year - birthYear3) + ' year old' + job + '!';
console.log(varun);

const varunNew = `I'm ${firstName3}, a ${year3 - birthYear3} year old ${job3}!`;
console.log(varunNew)

console.log(`Just a regular string...`);

console.log('String with \n\
    multiple \n\
    lines');

console.log(`String
    multiple
    lines`);


const aage = 19;

if (aage >= 18){
    console.log("Sarah can start driving license");
} else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`); 
}

const birthYear4 = 1998;

let century;
if(birthYear4 <= 2000) {
    let century = 20;
} else {
    let century = 21;
}
console.log(century);


// const massMark2 = 78;
// const heightMark2 = 1.69;
// const massJohn2 = 92;
// const heightJohn2 = 1.95;

const massMark2 = 95;
const heightMark2 = 1.;88
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(BMIMark2, BMIJohn2);

if(BMIMark2 > BMIJohn2){
    console.log("Mark's BMI is higher than John's!");
} else{
    console.log("John's BMI is higher than Mark's!");
}



// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number("Varun"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am' + 23 + ' years old');
console.log('I am' + String(23) + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);



// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Varun'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!')
}


let height = 0;
if (height){
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}



const agge = 10;
if (age === 18) console.log('You just become an adult :D (strict)');

if (age == 18) console.log('You just become an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number!"))
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
    console.log('Cool! 23 is an amzaing number!')
} else if(favourite === 7){
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

if (favourite !== 23) console.log('Why not 23?')



const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('someone else should drive...')
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('someone else should drive...')
}


// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy 🏆');
// } else if(scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy!")
// }


// BONUS 1
const scoreDolphins = (96 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}