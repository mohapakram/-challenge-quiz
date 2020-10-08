import React from 'react'
import './App.css'
import ProgressBar from '../progressBar/ProgressBar'
import ScoreBar from '../scoreBar/ScoreBar'

export default App

function App () {
  return (
    <>
      <ProgressBar width='10%' />
      <h1>Hello</h1>
      <ScoreBar score='50%' minScore='10%' maxScore='80%' />
    </>
  )
}
