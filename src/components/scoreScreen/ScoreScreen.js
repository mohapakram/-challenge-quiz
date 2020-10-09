import React from 'react'
import './ScoreScree.css'

export default ScoreScreen

function ScoreScreen ({ score }) {
  return (
    <div id='score-screen'>
      <h1>Your score is {score}</h1>
    </div>
  )
}
