import React from 'react'
import './QuestionHeader.css'
import decodeString from '../../utils/decodeString'
import displayDifficulty from '../../utils/displayDifficulty'
export default QuestionHeader

function QuestionHeader ({ questionData }) {
  const { currentQNumber, numberOfAllQ, difficulty, category } = questionData
  return (
    <div id='question-header'>
      <h1>question {currentQNumber} of {numberOfAllQ} </h1>
      <span>{decodeString(category)}</span>
      <span>{displayDifficulty(difficulty)}</span>
    </div>
  )
}
