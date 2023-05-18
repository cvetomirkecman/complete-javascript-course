'use strict'
const johnSmith = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2
    return this.BMI
  }
}

const markMiller = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

markMiller.calcBMI()
johnSmith.calcBMI()

if (markMiller.bmi > johnSmith.bmi) {
  console.log(`Mark's BMI (${markMiller.bmi.toFixed(2)}) is higher than John's (${johnSmith.bmi.toFixed(2)})`)
} else {
  console.log(`John's BMI (${johnSmith.bmi.toFixed(2)}) is higher than Mark's (${markMiller.bmi.toFixed(2)})`)
}
