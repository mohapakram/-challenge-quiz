import React, { useState } from 'react'
import ProgressBar from '../progressBar/ProgressBar'
import ScoreBar from '../scoreBar/ScoreBar'
import Question from '../question/Question'
import questions from '../../assets/questions.json'

export default Quiz

function Quiz () {
  const [ state, setState ] = useState({
    currentQuestionIndex: 0,
    questionsLength: questions.length,
    progress: 0,
    score: 0,
    minScore: 0,
    maxScore: 0,
    currentQuestion: questions[0],
    correctAnswers: 0,
    wrongAnswers: 0
  })

  const { currentQuestionIndex, questionsLength, currentQuestion, progress, wrongAnswers, correctAnswers, score, maxScore } = state

  const calcProgress = () => {
    return ((currentQuestionIndex + 1) / questionsLength) * 100
  }

  const goToNextQuestion = (isCorrectAnswer) => {
    let nextQuestionIndex = currentQuestionIndex + 1
    let nextQuestions = questions[nextQuestionIndex]
    const calcWrongAnswers = () => isCorrectAnswer ? wrongAnswers : wrongAnswers + 1
    const calcCorrectAnswers = () => isCorrectAnswer ? correctAnswers + 1 : correctAnswers
    const calcScore = () => (calcCorrectAnswers() / nextQuestionIndex) * 100
    const calcMaxScore = () => (((questions.length - nextQuestionIndex) + calcCorrectAnswers()) / questions.length) * 100
    setState({ ...state,
      currentQuestionIndex: nextQuestionIndex,
      currentQuestion: nextQuestions,
      progress: calcProgress(),
      wrongAnswers: calcWrongAnswers(),
      correctAnswers: calcCorrectAnswers(),
      score: calcScore(),
      maxScore: calcMaxScore()
    })
  }

  return (
    <>
      <ProgressBar progress={progress} />
      <Question question={currentQuestion} position={{ currentQuestionIndex, questionsLength }} goToNextQuestion={goToNextQuestion} />
      <ScoreBar score={score} minScore='10%' maxScore={maxScore} />
    </>
  )
}
