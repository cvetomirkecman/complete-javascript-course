// Remember, we're gonna use strict mode in all scripts now!
'use strict'
/*

const temperature = [3, -2, -6, 1, 'error', 9, 13, 17, 15, 14, 9, 5]

const calcTempAmplitude = function (temps) {
  let max = temps[0]
  let min = temps[0]
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]
    if (typeof curTemp !== 'number') continue

    if (curTemp > max) max = curTemp
    if (curTemp < min) min = curTemp
  }
  console.log(max, min)
  return max - min
}

const amplitude = calcTempAmplitude(temperature)
console.log(amplitude)

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2)
  console.log(temps)
  let max = temps[0]
  let min = temps[0]
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]
    if (typeof curTemp !== 'number') continue

    if (curTemp > max) max = curTemp
    if (curTemp < min) min = curTemp
  }
  console.log(max, min)
  return max - min
}

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5])
console.log(amplitudeNew)

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: 10,
  }

  const kelvin = measurement.value + 273
  return kelvin
}

console.log(measureKelvin())
// Using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2)
  console.log(temps)
  let max = 0
  let min = 0
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]
    if (typeof curTemp !== 'number') continue

    if (curTemp > max) max = curTemp
    if (curTemp < min) min = curTemp
  }
  console.log(max, min)
  return max - min
}

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5])
console.log(amplitudeBug)
*/

const data1 = [17, 21, 23]
const printForecast = function (arr) {
  if (!Array.isArray(arr)) {
    console.log('Not an array')
  } else {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      str += `... ${arr[i]}°C in ${i + 1} days `
    }
    console.log(str + '...')
  }
}
printForecast(data1)
