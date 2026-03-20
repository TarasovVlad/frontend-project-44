#!/usr/bin/env node
import cli from '../../src/cli.js'
import startGame from '../../src/index.js'

console.log('Welcome to the Brain Games!')
const userName = cli()

const description = 'What is the result of the expression?'

const signs = ['+', '-', '*']

const getRandomNumber = () => Math.floor(Math.random() * 25)
const getRandomSigns = () => signs[Math.floor(Math.random() * signs.length)]
const getRandomExercise = () => `${getRandomNumber()} ${getRandomSigns()} ${getRandomNumber()}`

const calculate = (exercise) => {
  const parts = exercise.split(' ')
  const a = Number(parts[0])
  const sign = parts[1]
  const b = Number(parts[2])
  if (sign === '+') {
    return a + b
  }
  else if (sign === '-') {
    return a - b
  }
  else if (sign === '*') {
    return a * b
  }
}

const getQuestionAndAnswer = () => {
  const exercise = getRandomExercise()
  const answer = String(calculate(exercise))
  return [exercise, answer]
}

startGame(userName, description, getQuestionAndAnswer)
