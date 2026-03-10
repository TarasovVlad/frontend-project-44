import readlineSync from 'readline-sync'

const questions = 3

const isEven = number => number % 2 === 0

const getCorrectAnswer = number => isEven(number) ? 'yes' : 'no'

const getRandomNumber = () => Math.floor(Math.random() * 100)

export default (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < questions; i += 1) {
    const number = getRandomNumber()
    const correctAnswer = getCorrectAnswer(number)

    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${userName}!`)
}
