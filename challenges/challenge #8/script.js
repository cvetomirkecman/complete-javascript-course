'use strict'

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = function(bill) {
  if (bill >= 50 && bill <= 300) {
    let tip = bill * 0.15
    return tip
  } else {
    let tip = bill * 0.2
    return tip
  }
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i])
  tips.push(tip)
  totals.push(tip + bills[i])
}

console.log(tips, totals)

const calcAverage = function(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}
console.log(calcAverage(totals))