import calculations from './calculations'

describe('calcProgress', () => {
  it('successfully calculate the progress', () => {
    const calcProgress = calculations.calcProgress
    const currentQuestionIndex = 0
    const questionsLength = 10
    expect(calcProgress(currentQuestionIndex, questionsLength)).toEqual(10)
  })
})

describe('calcWrongAnswers', () => {
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

describe('calcScore', () => {
  it('successfully calculate the score', () => {
    const calcScore = calculations.calcScore
    const correctAnswers = 1
    const nextQuestionIndex = 2
    expect(calcScore(correctAnswers, nextQuestionIndex)).toEqual(50)
  })
})

describe('calcMaxScore', () => {
  it('successfully calculate the calcMaxScore', () => {
    const calcMaxScore = calculations.calcMaxScore
    const questionsLength = 20
    const nextQuestionIndex = 1
    const correctAnswers = 1
    expect(calcMaxScore(questionsLength, nextQuestionIndex, correctAnswers)).toEqual(100)
  })
})

describe('calcMinScore', () => {
  it('successfully calculate the minimum score', () => {
    const calcMinScore = calculations.calcMinScore
    const questionsLength = 20
    const correctAnswers = 1
    expect(calcMinScore(correctAnswers, questionsLength)).toEqual(5)
  })
})
