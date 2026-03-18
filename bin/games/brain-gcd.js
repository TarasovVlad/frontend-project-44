#!/usr/bin/env node
import cli from '../../src/cli.js'
import startGame from '../../src/index.js'

console.log('Welcome to the Brain Games!')
const userName = cli()

const description = 'Find the greatest common divisor of given numbers.'

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1
const getGcd = (a, b) => b === 0 ? a : getGcd(b, a % b)

const getQuestionAndAnswer = () => {
  const gcd = getRandomNumber()
  const firstNumber = gcd * (getRandomNumber())
  const secondNumber = gcd * (getRandomNumber())
  const answer = String(getGcd(firstNumber, secondNumber))
  return [`${firstNumber} ${secondNumber}`, answer]
}

startGame(userName, description, getQuestionAndAnswer)
