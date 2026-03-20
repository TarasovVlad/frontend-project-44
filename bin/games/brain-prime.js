#!/usr/bin/env node
import cli from '../../src/cli.js'
import startGame from '../../src/index.js'

console.log('Welcome to the Brain Games!')
const userName = cli()

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRandomNumber = () => Math.floor(Math.random() * 100)

const isPrime = (number) => {
  const beforeCount = Math.floor(Math.sqrt(number))

  if (number < 2) {
    return false
  }
  if (number === 2) {
    return true
  }
  if (number % 2 === 0) {
    return false
  }
  if (number % 2 !== 0) {
    for (let i = 3; i <= beforeCount; i += 1) {
      if (number % i === 0) {
        return false
      }
    }
  }
  return true
}

const getQuestionAndAnswer = () => {
  const number = getRandomNumber()
  const answer = isPrime(number) ? 'yes' : 'no'
  return [number, answer]
}

startGame(userName, description, getQuestionAndAnswer)
