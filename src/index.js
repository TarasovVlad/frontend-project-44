import readlineSync from 'readline-sync'

const questionsCount = 3

export default (userName, gameDescription, getQuestionAndAnswer) => {
  console.log(gameDescription)

  for (let i = 0; i < questionsCount; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer()

    console.log(`Question: ${question}`)
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
