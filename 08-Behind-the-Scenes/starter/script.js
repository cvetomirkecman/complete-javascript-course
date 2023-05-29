'use strict'
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`
    console.log(output)
  }
  printAge()
  return age
}

const firstName = 'Jonas'
calcAge(1991)


console.log(me)
// console.log(job)
// console.log(year)

var me = 'Jonas'
let job = 'teacher'
const year = 1991

//Functions

console.log(addDecl(2, 3))
console.log(addExpr(2, 3))
console.log(addArrow(2, 3))

function addDecl(a, b) {
  return a + b
}

const addExpr = function (a, b) {
  return a + b
}

var addArrow = (a, b) => a + b

//Example

if (!numProducts) deleteShippingCart()

var numProducts = 10

function deleteShippingCart() {
  console.log('All products deleted!')
}
console.log(this)
const calcAge = function (birthYear) {
  console.log(2037 - birthYear)
  console.log(this)
}
calcAge(1991)

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear)
  console.log(this)
}
calcAgeArrow(1991)

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year)
  },
}
jonas.calcAge()

const matilda = {
  year: 2017,
}

matilda.calcAge = jonas.calcAge

matilda.calcAge()

const f = jonas.calcAge

// var firstName = 'Matilda'

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year)
    // const self = this
    // const isMillennial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996)
    // }

    const isMillennial = () => {
      console.log(this.year >= 1981 && this.year <= 1996)
    }
    isMillennial()
  },
  greet: () => {
    return console.log(`Hey ${this.firstName} `)
  },
}

jonas.greet()
jonas.calcAge()
//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments)
  return a + b
}
addExpr(2, 5)
addExpr(2, 5, 8, 12)

var addArrow = (a, b) => {
  console.log(arguments)
  return a + b
}

addArrow(2, 5, 8)

let age = 30
let oldAge = age
age = 31
console.log(age)
console.log(oldAge)

const me = {
  name: 'Jonas',
  age: 30,
}

const friend = me

friend.age = 27

console.log('Friend:', friend)
console.log('Me', me)
*/
let lastName = 'Williams'
let oldLastName = lastName
lastName = 'Davis'
console.log(lastName, oldLastName)

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}

const marriedJessica = jessica
marriedJessica.lastName = 'Davis'
console.log('Before marriage:', jessica)
console.log('After marriage:', marriedJessica)

//marriedJessica = {}

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
}

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'

jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

console.log('Before marriage:', jessica2)
console.log('After marriage:', jessicaCopy)
