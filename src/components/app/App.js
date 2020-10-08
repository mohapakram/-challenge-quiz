import React from 'react'
import './App.css'
import ProgressBar from '../progressBar/ProgressBar'
import ScoreBar from '../scoreBar/ScoreBar'
import Question from '../question/Question'

export default App

function App () {
  const testQuestion = {
    question: 'Who%20is%20the%20creator%20of%20the%20comic%20series%20%22The%20Walking%20Dead%22%3F'
  }

  return (
    <>
      <ProgressBar width='10%' />
      <Question question={testQuestion} />
      <ScoreBar score='50%' minScore='10%' maxScore='80%' />
    </>
  )
}
