import calculations from './calculations'

it('successfully calculate the progress', () => {
  const calcProgress = calculations.calcProgress
  const currentQuestionIndex = 0
  const questionsLength = 10
  expect(calcProgress(currentQuestionIndex, questionsLength)).toEqual(10)
})
