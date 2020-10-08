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
    currentQuestion: questions[0]
  })

  const { currentQuestionIndex, questionsLength, currentQuestion } = state

  const goToNextQuestion = () => {
    setState({ ...state, currentQuestionIndex: currentQuestionIndex + 1, currentQuestion: questions[currentQuestionIndex + 1] })
  }

  const validateAnswer = () => {
    goToNextQuestion()
  }
  return (
    <>
      <ProgressBar width='10%' />
      <Question question={currentQuestion} position={{ currentQuestionIndex, questionsLength }} onSelect={validateAnswer} />
      <ScoreBar score='50%' minScore='10%' maxScore='80%' />
    </>
  )
}
