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
*/

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




