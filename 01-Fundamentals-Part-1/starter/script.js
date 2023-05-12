/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";
console.log(firstName);

const country = "Serbia";
const continent = "Europe";
let population = 8400000;

console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let isIsland = false;
let language;

console.log(isIsland);
console.log(population);
console.log(language);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

language = "Serbian";

//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstNameLater = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstNameLater + " " + lastName);

//Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 20);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)

let halfOfPopulation = population / 2;
console.log(halfOfPopulation);

population++;
console.log(population);

let populationFinland = 6000000;
let populationComparison = populationFinland > population;
console.log(populationComparison);

let averagePopulation = 33000000;
console.log(averagePopulation <= population);

const description = "Portugal is in Europe, and its 11 million people speak portuguese";

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
const firstName = 'Jonas';
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines')

console.log(`String with
multiple
lines`)

const description = `Portugal is in Europe, and its 11 million people speak portuguese`;
