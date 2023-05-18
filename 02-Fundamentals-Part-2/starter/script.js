'use strict'
/*
let hasDriversLicence = false
const passTest = true

if (passTest) hasDriverLicence = true
if (hasDriversLicence) console.log('I can drive now')

const interface = 'Audio'

function logger() {
  console.log('My name is Jonas')
}

logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} people and its capital city is ${capitalCity}.`
  return description
}

const firstCountry = describeCountry(`Serbia`, 60000000, `Belgrade`)
console.log(firstCountry)


function calcAge1(birthYear) {
  return 2037 - birthYear
}

const age1 = calcAge1(1991)
console.log(age1)

const calcAge2 = function(birthYear) {
  return 2037 - birthYear
}

const age2 = calcAge2(1991)
console.log(age1, age2)

function percentageOfWorld1(population) {
  return `This country has ` + ((population / 7900) * 100).toFixed(2) + `% population of whole world population`
}


const percentageOfWorld2 = function(population){
  return `This country has ` + ((population / 7900) * 100).toFixed(2) + `% population of whole world population`
}

const firstCountry = percentageOfWorld1(1441)
console.log(firstCountry)



const calcAge3 = birthYear => 2037 - birthYear

const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirement = 65 - age
  // return retirement
  return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1980, 'Bob'))


const percentageOfWorld3 = (population) => {
  return `This country has ` + ((population / 7900) * 100).toFixed(2) + `% population of whole world population`
}
console.log(percentageOfWorld3(1441))

function cutFruitPieces(fruit) {
  return fruit * 4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`
  return juice
}

console.log(fruitProcessor(2, 3))


function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2)
}

function describePopulation(country, population) {
  const calculatedPercentage = percentageOfWorld1(population)
  return `${country} has ${population} million people, which is about ${calculatedPercentage}% of the world!`
}

console.log(describePopulation(`Serbia`, 6))

const calcAge = function (birthYear) {
  return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear)
  const retirement = 65 - age

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`)
    return retirement
  } else {
    console.log(`${firstName} has already retired`)
    return -1
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1950, 'Mike'))


const friend1 = 'Micheal'
const friend2 = 'Steven'
const friend3 = 'Peter'

const friends = ['Micheal', 'Steven', 'Peter']
console.log(friends)

const years1 = new Array(1991, 1984, 2008, 2020)

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)

const firstName= 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
console.log(jonas)

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)


function percentageOfWorld1(population) {
  return `This country has ` + ((population / 7900) * 100).toFixed(2) + `% population of whole world population`
}

const populations = [1441, 3000, 82, 43]
console.log(populations.length === 4)

const percentages = [
percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3])
]

console.log(percentages)


const friends = ['Micheal', 'Steven', 'Peter']

//Add elements
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)

//Remove elements

friends.pop() //Last
const popped = friends.pop()

console.log(friends)
console.log(popped)

friends.shift() //First
console.log(friends)

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

friends.push(23)
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))

if (friends.includes('Steven')) {
  console.log('You have a friend called Peter')
}

const neighbours = ['Bosnia', 'Macedonia', 'Montenegro', 'Bulgaria', 'Croatia', 'Hungary', 'Romania']

neighbours.push('Utopia')
console.log(neighbours)

neighbours.pop()
console.log(neighbours)

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D')
}

neighbours[neighbours.indexOf('Bosnia')] = 'Bosnia and Herzegovina'
console.log(neighbours)


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Steven']
}

const myCountry = {
  country: 'Serbia',
  capital: 'Belgrade',
  language: 'serbian',
  population: '6 million',
  neighbours: ['Bosnia', 'Macedonia', 'Montenegro', 'Bulgaria', 'Croatia', 'Hungary', 'Romania']
}

console.log(myCountry)

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Steven']
}

console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name'
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

console.log(jonas)

const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends`)

if(jonas[interestedIn]) {
  console.log(jonas[interestedIn])
} else {
  console.log('Wrong request!')
}

jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas)

//Challenge

console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0])


const myCountry = {
  country: 'Serbia',
  capital: 'Belgrade',
  language: 'serbian',
  population: '6 million',
  neighbours: ['Bosnia', 'Macedonia', 'Montenegro', 'Bulgaria', 'Croatia', 'Hungary', 'Romania']
}

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Steven'],
  hasDriversLicense: false,

  // calcAge: function(birthYear) {
  //   return 2037 - birthYear
  // }

  // calcAge: function() {
  //   return 2037 - this.birthYear
  // }

  calcAge: function() {
    this.age = 2037 - this.birthYear
    return this.age
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
}

console.log(jonas.age)

//Challenge

console.log(jonas.getSummary())


const myCountry1 = {
  country: 'Serbia',
  capital: 'Belgrade',
  language: 'serbian',
  population: 6,
  neighbours: ['Bosnia', 'Macedonia', 'Montenegro', 'Bulgaria', 'Croatia', 'Hungary', 'Romania']
}

myCountry1['population'] -= 2
console.log(myCountry1.population)

const myCountry = {
  country: 'Serbia',
  capital: 'Belgrade',
  language: 'serbian',
  population: '6 million',
  neighbours: ['Bosnia', 'Macedonia', 'Montenegro', 'Bulgaria', 'Croatia', 'Hungary', 'Romania'],
  describe: function() {
    console.log(`${this.country} has ${this.population} 
    ${this.language}-speaking people, 
    ${this.neighbours.length} neighbouring countries 
    and a capital called ${this.capital}.`)
  },
  checkIsland: function() {
    this.isIsland = this.neighbours.length === 0 ? true : false
  }
}

myCountry.describe()
myCountry.checkIsland()
console.log(myCountry)

*/






