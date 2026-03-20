#!/usr/bin/env node
import cli from '../../src/cli.js'
import startGame from '../../src/index.js'

console.log('Welcome to the Brain Games!')
const userName = cli()

const description = 'What number is missing in the progression?'

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1
const getRandomNumberforRandomElement = () => Math.floor(Math.random() * 10)

const createNumbers = () => {
  let massiveNumbers = []
  let currentElement
  let start = getRandomNumber()
  let step = getRandomNumber()
  for (let i = 0; i < 10; i += 1) {
    currentElement = start + i * step
    massiveNumbers.push(currentElement)
  }
  return massiveNumbers
}

const createProgression = () => {
  let massiveNumbers = createNumbers()
  let randomIndex = getRandomNumberforRandomElement()
  const deleteElement = massiveNumbers[randomIndex]
  massiveNumbers[randomIndex] = '..'
  return [massiveNumbers, deleteElement]
}

const getQuestionAndAnswer = () => {
  const elementRandomElement = createProgression()
  const question = elementRandomElement[0].join(' ')
  const answer = String(elementRandomElement[1])
  return [question, answer]
}

startGame(userName, description, getQuestionAndAnswer)
