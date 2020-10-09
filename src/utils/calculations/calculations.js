export default {
  calcProgress,
  calcWrongAnswers,
  calcCorrectAnswers,
  calcScore,
  calcMaxScore,
  calcMinScore
}

function calcProgress (currentQuestionIndex, questionsLength) {
  return ((currentQuestionIndex + 1) / questionsLength) * 100
}

function calcWrongAnswers (isCorrectAnswer, wrongAnswers) {
  return isCorrectAnswer ? wrongAnswers : wrongAnswers + 1
}

function calcCorrectAnswers (isCorrectAnswer, correctAnswers) {
  return isCorrectAnswer ? correctAnswers + 1 : correctAnswers
}

function calcScore (correctAnswers, nextQuestionIndex) {
  return Math.round((correctAnswers / nextQuestionIndex) * 100)
}

function calcMaxScore (questionsLength, nextQuestionIndex, correctAnswers) {
  return (((questionsLength - nextQuestionIndex) + correctAnswers) / questionsLength) * 100
}

function calcMinScore (correctAnswers, questionsLength) {
  return (correctAnswers / questionsLength) * 100
}
