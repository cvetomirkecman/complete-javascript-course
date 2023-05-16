'use strict'

const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3

let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins.toFixed(2)} vs ${avgKoalas.toFixed(2)})`)
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas.toFixed(2)} vs ${avgDolphins.toFixed(2)})`)
  } else {
    console.log(`No team wins...`)
  }
}

checkWinner(scoreDolphins, scoreKoalas)

scoreDolphins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)

checkWinner(scoreDolphins, scoreKoalas)