import React from 'react'
import './ScoreBar.css'

export default ScoreBar

function ScoreBar ({ scores }) {
  const { score, minScore, maxScore } = scores

  return (
    <div id='score-bar'>
      <span className='score'>score: {score}%</span>
      <span className='max-score'>max score: {maxScore}%</span>
      <div className='representation-bar'>
        <div id='represent-max-score' style={{ width: `${maxScore}%` }} />
        <div id='represent-score' style={{ width: `${score}%` }} />
        <div id='represent-min-score' style={{ width: `${minScore}%` }} />
      </div>
    </div>
  )
}
