import calculations from './calculations'

it('successfully calculate the progress', () => {
  const calcProgress = calculations.calcProgress
  const currentQuestionIndex = 0
  const questionsLength = 10
  expect(calcProgress(currentQuestionIndex, questionsLength)).toEqual(10)
})

it('keep the wrong answers the same if the answer is right', () => {
  const calcWrongAnswers = calculations.calcWrongAnswers
  const isCorrectAnswer = true
  const wrongAnswers = 1
  expect(calcWrongAnswers(isCorrectAnswer, wrongAnswers)).toEqual(wrongAnswers)
})

it('increase the wrong answers if the answer was wrong', () => {
  const calcWrongAnswers = calculations.calcWrongAnswers
  const isCorrectAnswer = false
  const wrongAnswers = 1
  expect(calcWrongAnswers(isCorrectAnswer, wrongAnswers)).toEqual(wrongAnswers + 1)
})

describe('calcCorrectAnswers', () => {
  it('keep the right answers the same if the answer is wrong', () => {
    const calcCorrectAnswers = calculations.calcCorrectAnswers
    const isCorrectAnswer = false
    const correctAnswers = 1
    expect(calcCorrectAnswers(isCorrectAnswer, correctAnswers)).toEqual(correctAnswers)
  })

  it('increase the right answers if the answer was right', () => {
    const calcCorrectAnswers = calculations.calcCorrectAnswers
    const isCorrectAnswer = true
    const correctAnswers = 1
    expect(calcCorrectAnswers(isCorrectAnswer, correctAnswers)).toEqual(correctAnswers + 1)
  })
}
)
