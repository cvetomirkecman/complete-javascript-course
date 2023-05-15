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


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving licence');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century)

const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number('Jonas'))

console.log(String(23))
//type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' * '2')

let n = '1' + 1
n = n - 1;
console.log(n)

'19' - '13' + 17
'123' < 57
5 + 6 + '4' + 9 - 4 - 2
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 0
if (money) {
  console.log("Don't spend it all")
} else {
  console.log('You should get a job!')
}

let height = 123
if (height) {
  console.log('YAY! Height is defined')
} else {
  console.log('Height is UNDEFINED')
}


const favourite = Number(prompt("What's your favourite number?"));

console.log(favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else {
  console.log('Number is not 23 or 7')
}

if (favourite !== 23) console.log('Why not 23?')

const numNeighbours = prompt('How many neighbour countries does your country have?')

if (numNeighbours === 1) {
  console.log('Only 1 border!')
} else if (numNeighbours > 1) {
  console.log('More than 1 border')
} else {
  console.log('No borders')
}


const hasDriversLicence = true // A
const hasGoodVision = true // B

console.log(hasDriversLicence && hasGoodVision)
console.log(hasDriversLicence || hasGoodVision)
console.log(!hasDriversLicence)

const shouldDrive = hasDriversLicence && hasGoodVision

// if (shouldDrive) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log('Someone else should drive...')
// }

const isTired = false // C

console.log(hasDriversLicence && hasGoodVision && !isTired)

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!')
} else {
  console.log('Someone else should drive...')
}

const country = 'Serbia'
const language = 'english'
const population = 6647003
const isIsland = true

if (language === 'english' && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country}`)
} else (
  console.log(`${country} does not meet your criteria`)
)

const day = 'monday'

switch (day) {
  case 'monday': //day === 'monday'
    console.log('Plan course structure')
    console.log('Go to coding meetup')
    break
  case 'tuesday':
    console.log('Prepare theory videos')
    break
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples')
    break
  case 'friday':
    console.log('Record videos')
    break
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend')
    break
  default:
    console.log('Not a valid day!')
}


const language = 'english'

switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log(`MOST number of native speakers!`)
    break
  case 'spanish':
    console.log(`2nd place in number of native speakers`)
    break
  case 'english':
    console.log(`3rd place`)
    break
  case 'hindi':
    console.log(`Number 4`)
    break
  case 'arabic':
    console.log(`5th most spoken language`)
    break
  default:
    console.log(`Great language too ;D`)
}

const age = 23
//age >= 18 ? console.log('I like to drink wine') : console.log('You are underage')

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)

let drink2
if (age >= 18) {
  drink2 = 'wine'
} else {
  drink2 = 'water'
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
*/
const country = `Serbia`
const population = 6000000

console.log(
  `${country}'s population is ${population > 330000000 ? 'above' :
    'below'} average`,
);