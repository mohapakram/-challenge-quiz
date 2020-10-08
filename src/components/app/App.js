import React from 'react'
import './App.css'
import ProgressBar from '../progressBar/ProgressBar'
import ScoreBar from '../scoreBar/ScoreBar'
import QuestionHeader from '../questionHeader/QuestionHeader'

export default App

const testQuestionData =
{
  category: 'Entertainment%3A%20Video%20Games',
  currentQNumber: 1,
  numberOfAllQ: 20,
  difficulty: 'medium'
}

function App () {
  return (
    <>
      <ProgressBar width='10%' />
      <h1>Hello</h1>
      <QuestionHeader questionData={testQuestionData} />
      <ScoreBar score='50%' minScore='10%' maxScore='80%' />
    </>
  )
}
