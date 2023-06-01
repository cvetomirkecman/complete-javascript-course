'use strict'
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    )
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`)
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
}

const airline = 'TAP Air Portugal'
const plane = 'A320'

console.log(plane[0])
console.log('B737'[0])
console.log(airline.length)
console.log('B737'.length)

console.log(airline.lastIndexOf('r'))
console.log(airline.indexOf('Portugal'))

console.log(airline.slice(4))
console.log(airline.slice(4, 7))

console.log(airline.slice(0, airline.indexOf(' ')))
console.log(airline.slice(airline.lastIndexOf(' ') + 1))
console.log(airline.slice(-2))
console.log(airline.slice(1, -1))

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1)
  if (s === 'B' || s === 'E') console.log('You got the middle seat...')
  else console.log('You got lucky!')
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

console.log(new String('jonas'))

console.log(airline.toLowerCase())
console.log(airline.toUpperCase())

//Fix capitalization in name
const passenger = 'jOnAS' // Jonas
const passengerLower = passenger.toLowerCase()
const passengerUpper = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerUpper)

//Check email
const email = 'hello@jonas.io'
const loginEmail = ' Hello@Jonas.Io \n'
const lowerEmail = loginEmail.toLowerCase()
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail)
const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)

const priceGB = '288,97#'
const priceUS = priceGB.replace('#', '$').replace(',', '.')
console.log(priceUS)

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!'

console.log(announcement.replaceAll('door', 'gate'))

const plane1 = 'A320neo'
console.log(plane1.includes('A320'))
console.log(plane1.startsWith('A3'))

if (plane1.startsWith('AirBus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family')
}

//Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase()
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('Not allowed!')
  } else {
    console.log('Welcome aboard!')
  }
}

checkBaggage('I have a laptop, some Food and a pocket Knife')
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
])
console.log(question)

//Convert object to map
console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap)

console.log(question.get('question'))
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}

const answer = Number(prompt('Your answer:'))
// if (question.get('correct') === answer) {
//   console.log(question.get(true))
// } else {
//   console.log(question.get(false))
// }

console.log(question.get(question.get('correct') === answer))

//Convert map to array
console.log([...question])
console.log(quesiton.entries())
console.log(quesiton.keys())
console.log(quesiton.values())
*/
/*
const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')
rest.set(2, 'Lisbon, Portugal')
console.log(rest.set(2, 'Lisbon, Portugal'))

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed')

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(1))

const time = 21
rest.get(time > rest.get('open') && time < rest.get('close'))
console.log(rest.has('categories'))
rest.delete(2)
console.log(rest.size)
// rest.clear(rest)
const arr = [1, 2]
rest.set(arr, 'Test')

rest.get(arr)
*/
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
])
console.log(orderSet)
console.log(new Set('Jonas'))

console.log(orderSet.size)
console.log(orderSet.has('Pizza'))
console.log(orderSet.has('Bread'))
orderSet.add('Garlic Bread')
orderSet.add('Garlic Bread')
console.log(orderSet)
orderSet.delete('Risotto')
// orderSet.clear()

for (const order of orderSet) console.log(order)

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']

const staffUnique = [...new Set(staff)]
console.log(staffUnique)
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
)

*/
/*
const properties = Object.keys(openingHours)
console.log(properties)

let openStr = `We are open on ${properties.length}
days: `

for (const day of properties) {
  openStr += `${day}, `
}
console.log(openStr)

const values = Object.values(openingHours)
console.log(values)

const entries = Object.entries(openingHours)
console.log(entries)

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}
*/
/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open)

// console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.mon?.open)

//Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for (const day of days) {
  console.log(day)
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day}, we open at ${open}`)
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist')

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }]

console.log(users[0]?.name ?? 'User array empty')
*/
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu) console.log(item)

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`)
}
*/

/*
const rest1 = {
  name: 'Capri',
  numGuests: 20,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}

// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10

rest1.numGuests ??= 10
rest2.numGuests ??= 10

// rest1.owner && rest1.owner && '<anon>'
// rest2.owner && rest2.owner && '<anon>'

rest1.owner &&= 'anon'
rest2.owner &&= 'anon'

console.log(rest1)
console.log(rest2)

console.log(rest1)
console.log(rest2)
*/
/*
//Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas')

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach')
}

restaurant.numGuests = 0
const guests = restaurant.numGuests || 10
console.log(guests)

const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect)

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')
*/
/*
const arr = [1, 2, ...[3, 4]]

const [a, b, ...others] = [1, 2, 3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]

const { sat, ...weekdays } = restaurant.openingHours
console.log(weekdays)

const add = function (...numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) sum += numbers[i]
}

add(2, 3)

const x = [23, 5, 7]
add(...x)

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
restaurant.orderPizza('mushrooms')
*/
/*
const arr = [7, 8, 9]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]

const newArr = [1, 2, ...arr]

const newMenu = [...restaurant.mainMenu, 'Gnocchi']

//Copy array
const mainMenuCopy = [...restaurant.mainMenu]

//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu)

const str = 'Jonas'
const letters = [...str, ' ', 'S.']
console.log(``)

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
]
console.log(ingredients)

restaurant.orderPasta(...ingredients)

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }

const restaurantCopy = {...restaurant}
restaurantCopy.name = 'Roma'
console.log(restaurantCopy.name)
console.log(restaurant.name)
*/
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

const { name, openingHours, categories } = restaurant

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant
console.log(restaurantName, hours, tags)
//Default values
const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters)
//Mutating variables
let a = 111
let b = 999
const obj = { a: 23, b: 7, c: 14 }

;({ a, b } = obj)
console.log(a, b)

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours
console.log(open, close)

// const arr = [2, 3, 4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [x, y, z] = arr
// console.log(x, y, z)

// let [main, , secondary] = restaurant.categories

// console.log(main, secondary)

// // const temp = main
// // main = secondary
// // secondary = temp

// // console.log(main, secondary)
// ;[main, secondary] = [secondary, main]
// console.log(main, secondary)

// const [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse)
// //Nested destructuring
// const nested = [2, 4, [5, 6]]

// // const [i, , j] = nested
// // console.log(i, j)
// const [i, , [j, k]] = nested
// console.log(i, j, k)

// //Default values
// const [p = 1, q = 1, r = 1] = [8]
// console.log(p, q, r)
*/
