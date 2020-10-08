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

  const { currentQuestionIndex, questionsLength, currentQuestion, progress, wrongAnswers, correctAnswers } = state

  const calcProgress = () => {
    return ((currentQuestionIndex + 1) / questionsLength) * 100
  }

  const goToNextQuestion = (isCorrectAnswer) => {
    setState({ ...state,
      currentQuestionIndex: currentQuestionIndex + 1,
      currentQuestion: questions[currentQuestionIndex + 1],
      progress: calcProgress(),
      wrongAnswers: isCorrectAnswer ? wrongAnswers : wrongAnswers + 1,
      correctAnswers: isCorrectAnswer ? correctAnswers + 1 : correctAnswers
    })
  }

  return (
    <>
      <ProgressBar progress={progress} />
      <Question question={currentQuestion} position={{ currentQuestionIndex, questionsLength }} goToNextQuestion={goToNextQuestion} />
      <ScoreBar score='50%' minScore='10%' maxScore='80%' />
    </>
  )
}
