#!/usr/bin/env node
import cli from '../../src/cli.js'
import startGame from '../../src/index.js'

console.log('Welcome to the Brain Games!')
const userName = cli()

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0
const getRandomNumber = () => Math.floor(Math.random() * 100)

const getQuestionAndAnswer = () => {
  const number = getRandomNumber()
  const answer = isEven(number) ? 'yes' : 'no'
  return [number, answer]
}

startGame(userName, description, getQuestionAndAnswer)
